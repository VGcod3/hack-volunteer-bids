using Bids.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Bids.Api.Controllers;

[ApiController]
public class AuthenticationController : Controller
{
    public AuthenticationController()
    {
        
    }
    
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginModel loginModel)
    {
        return Ok();
    }
    
    [HttpPost("register")]
    public IActionResult Register([FromBody] RegisterModel registerModel)
    {
        return Ok();
    }
}