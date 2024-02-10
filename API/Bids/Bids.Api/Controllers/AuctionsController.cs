using Bids.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Bids.Api.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class AuctionsController : Controller
{
    public AuctionsController()
    {
        
    }

    [HttpPost("add")]
    public IActionResult Create([FromBody] Auction auction)
    {
        return Ok();
    }
    
    [HttpPost("{auctionId:long}/bids/add")]
    public IActionResult Create([FromRoute] long auctionId, [FromBody] Bid auction)
    {
        return Ok();
    }
    
    [HttpDelete("{auctionId:long}")]
    public IActionResult Delete([FromRoute] long auctionId)
    {
        return Ok();
    }
    
    [HttpDelete("{auctionId:long}/bids/{bidId:guid}")]
    public IActionResult Delete([FromRoute] long auctionId, [FromRoute] Guid bidId)
    {
        return Ok();
    }
    
    [HttpPost]
    public IActionResult Find([FromBody] IAuctionFilter filter)
    {
        return Ok();
    }
    
    [HttpPost("{auctionId:long}/bids")]
    public IActionResult Find([FromRoute] long auctionId, [FromBody] IBidFilter filter)
    {
        return Ok();
    }
    
    [HttpGet("{auctionId:long}")]
    public IActionResult Get([FromRoute] long auctionId)
    {
        return Ok(new
        {
            hello = "hello focker"
        });
    }
    
    [HttpGet("{auctionId:long}/bids/{bidId:guid}")]
    public IActionResult Get([FromRoute] long auctionId, [FromRoute] Guid bidId)
    {
        return Ok();
    }
    
    [HttpPut("{auctionId:long}")]
    public IActionResult Update([FromRoute] long auctionId, [FromBody] Auction auction)
    {
        return Ok();
    }
    
    [HttpPut("{auctionId:long}/bids/{bidId:guid}")]
    public IActionResult Update([FromRoute] long auctionId, [FromRoute] Guid bidId, [FromBody] Bid bid)
    {
        return Ok();
    }
}