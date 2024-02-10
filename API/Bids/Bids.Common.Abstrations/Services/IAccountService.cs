using Bids.Core.Entities.Users;
using Microsoft.AspNetCore.Identity;

namespace Bids.Common.Abstrations.Services;

public interface IAccountService
{
    Task<IdentityResult?> RegisterAsync(RegisterModel registerModel);
    Task<TokenModel?> LoginAsync(LoginModel loginModel);
    Task<TokenModel?> RefreshToken(TokenModel tokenModel);
    Task Logout();
}