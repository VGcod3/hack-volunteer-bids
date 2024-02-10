using Bids.Core;
using Bids.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Bids.Api.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class AuctionsController : Controller
{
    [HttpGet]
    public IActionResult GetAllAuctions()
    {
        return Ok();
    }
    
    [HttpGet("{auctionId:long}")]
    public IActionResult Get([FromRoute] long auctionId)
    {
        return Ok();
    }
    
    [HttpPost]
    [Authorize]
    public IActionResult Create([FromBody] Auction auction)
    {
        return Ok();
    }
    
    [HttpDelete("{auctionId:long}")]
    [Authorize]
    public IActionResult Delete([FromRoute] long auctionId)
    {
        return Ok();
    }
    
    [HttpPut("{auctionId:long}")]
    [Authorize]
    public IActionResult Update([FromRoute] long auctionId, [FromBody] Auction auction)
    {
        return Ok();
    }
}