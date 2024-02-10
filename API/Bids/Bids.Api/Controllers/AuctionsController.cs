using Bids.Entities;
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
    public IActionResult Create([FromBody] Auction auction)
    {
        return Ok();
    }
    
    [HttpDelete("{auctionId:long}")]
    public IActionResult Delete([FromRoute] long auctionId)
    {
        return Ok();
    }
    
    [HttpPut("{auctionId:long}")]
    public IActionResult Update([FromRoute] long auctionId, [FromBody] Auction auction)
    {
        return Ok();
    }
}