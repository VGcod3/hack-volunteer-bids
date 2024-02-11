using Bids.Core;
using Bids.Core.Entities.Users;
using Microsoft.AspNetCore.Mvc;

namespace Bids.Api.Controllers;

[ApiController]
[Route("/api/users")]
public class UserController : Controller
{
    private readonly UserManager _userManager;

    public UserController(UserManager userManager)
    {
        _userManager = userManager;
    }

    [HttpDelete]
    public async Task<IActionResult> UpdateUser([FromBody] string email)
    {
        bool result = await _userManager.Delete(email);

        return result ? Ok() : NotFound();
    }
    
    [HttpPut]
    public async Task<IActionResult> UpdateUser([FromBody] UserDto userDto)
    {
        bool result = await _userManager.Update(userDto);

        return result ? Ok() : NotFound();
    }
}