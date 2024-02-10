using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Bids.Common.Abstrations.Services;
using Bids.Core.Entities.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using JwtRegisteredClaimNames = Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames;

namespace Bids.Core.Services;

public class AccountService : IAccountService
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;
    private readonly IConfiguration _configuration;

    public AccountService(SignInManager<User> signInManager, IConfiguration configuration, UserManager<User> userManager)
    {
        _signInManager = signInManager;
        _configuration = configuration;
        _userManager = userManager;
    }

    public async Task<IdentityResult?> RegisterAsync(RegisterModel registerModel)
    {
        var user = new User
        {
            Email = registerModel.Email,
            UserName = registerModel.FirstName,
            EmailConfirmed = false
        };

        var result = await _userManager.CreateAsync(user, registerModel.Password);
        if (!result.Succeeded) return result;
        
        await _userManager.AddToRoleAsync(user, "User");
        await _userManager.UpdateAsync(user);
        return result;
    }

    public async Task<TokenModel?> LoginAsync(LoginModel loginModel)
    {
        User? userByEmail = await _userManager.FindByEmailAsync(loginModel.Email);
        if (userByEmail?.UserName is null) return null;
        
        var result = await _signInManager.PasswordSignInAsync(userByEmail.UserName, 
            loginModel.Password, false, false);
        if (!result.Succeeded) return null;

        var authClaims = new List<Claim>
        {
            new(ClaimTypes.Email,loginModel.Email),
            new(ClaimTypes.Name,userByEmail.UserName),
            new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

        var roles = await _userManager.GetRolesAsync(userByEmail);
        authClaims
            .AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));

        var token = CreateToken(authClaims, loginModel);
        var refreshToken = GenerateRefreshToken();

        _ = int.TryParse(_configuration["JWT:RefreshTokenValidityInDays"], out int refreshTokenValidityInDays);

        userByEmail.RefreshToken = refreshToken;
        userByEmail.RefreshTokenExpiryTime = DateTime.Now.AddDays(refreshTokenValidityInDays);

        await _userManager.UpdateAsync(userByEmail);

        return new TokenModel
        {
            AccessToken = token,
            RefreshToken = refreshToken
        };
    }
    
    private string CreateToken(IEnumerable<Claim> authClaims, LoginModel? loginModel)
    {
        var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));
        _ = int.TryParse(_configuration["JWT:TokenValidityInMinutes"], out int tokenValidityInMinutes);

        DateTime expires = DateTime.Now.AddMinutes(tokenValidityInMinutes);
        
        //TODO: delete this after testing
        if (loginModel?.AccessTokenInSeconds is {} seconds)
        {
            expires = DateTime.Now.AddSeconds(seconds);
        }
        
        var token = new JwtSecurityToken(
            issuer: _configuration["JWT:ValidIssuer"],
            audience: _configuration["JWT:ValidAudience"],
            claims: authClaims,
            expires: expires,
            signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
    
    private static string GenerateRefreshToken()
    {
        var randomNumber = new byte[64];
        using var rng = RandomNumberGenerator.Create();
        rng.GetBytes(randomNumber);
        return Convert.ToBase64String(randomNumber);
    }
    
    public async Task<TokenModel?> RefreshToken(TokenModel tokenModel)
    {
        string? accessToken = tokenModel.AccessToken;
        string? refreshToken = tokenModel.RefreshToken;

        var principal = GetPrincipalFromExpiredToken(accessToken);
        string username = principal.Identity.Name;

        var user = await _userManager.FindByNameAsync(username);

        if (user is null || user.RefreshToken != refreshToken || user.RefreshTokenExpiryTime <= DateTime.Now) { return null; }

        var newAccessToken = CreateToken(principal.Claims.ToList(),null);
        var newRefreshToken = GenerateRefreshToken();

        user.RefreshToken = newRefreshToken;
        await _userManager.UpdateAsync(user);

        return new TokenModel
        {
            AccessToken = newAccessToken,
            RefreshToken = newRefreshToken
        };
    }
    private ClaimsPrincipal? GetPrincipalFromExpiredToken(string? token)
    {
        var tokenValidationParameters = new TokenValidationParameters
        {
            ValidateAudience = false,
            ValidateIssuer = false,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"])),
            ValidateLifetime = false
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out SecurityToken securityToken);
        if (securityToken is not JwtSecurityToken jwtSecurityToken || !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
            throw new SecurityTokenException("Invalid token");

        return principal;
    }
    public Task Logout()
    {
        return _signInManager.SignOutAsync();
    }
}