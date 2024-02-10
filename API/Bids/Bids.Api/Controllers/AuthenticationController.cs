using Bids.Common.Abstrations.Services;
using Bids.Core.Entities.Users;
using Bids.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Bids.Api.Controllers;

[ApiController]
[AllowAnonymous]
[Route("api/[controller]")]
public class AuthenticationController : ControllerBase
{
    private readonly IAccountService _accountService;

    public AuthenticationController(IAccountService accountService)
    {
        _accountService = accountService;
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
    {
        TokenModel? result = await _accountService.LoginAsync(loginModel);

        if (result is null)
        {
            return Unauthorized("Email or password entered incorrectly");
        }

        return Ok(result);
    }
    
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterModel registerModel)
    {
        IdentityResult? result = await _accountService.RegisterAsync(registerModel);

        return result is {Succeeded: true}
            ? Ok(result.Succeeded)
            : BadRequest(result!.Errors);
    }
    
    
    [HttpPost("logout")]
    [Authorize]
    public async Task<IActionResult> Logout()
    {
        await _accountService.Logout();
        return NoContent();
    }
    
    [HttpPost]
    [Route("refreshToken")]
    public async Task<IActionResult> RefreshToken(TokenModel? tokenModel)
    {
        if (tokenModel is null)
        {
            return BadRequest();
        }

        var result = await _accountService.RefreshToken(tokenModel);
        if (result is null)
        {
            return BadRequest();
        }

        return Ok(result);
    }
}