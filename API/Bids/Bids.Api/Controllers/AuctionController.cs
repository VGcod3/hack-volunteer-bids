using Bids.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Bids.Api.Controllers;

[ApiController]
public class AuctionController : Controller
{
    public AuctionController()
    {
        
    }

    [HttpPost("auctions/add")]
    public IActionResult Create([FromBody] Auction auction)
    {
        return Ok();
    }
    
    [HttpPost("auctions/{auctionId:long}/bids/add")]
    public IActionResult Create([FromRoute] long auctionId, [FromBody] Bid auction)
    {
        return Ok();
    }
    
    [HttpDelete("auctions/{auctionId:long}")]
    public IActionResult Delete([FromRoute] long auctionId)
    {
        return Ok();
    }
    
    [HttpDelete("auctions/{auctionId:long}/bids/{bidId:guid}")]
    public IActionResult Delete([FromRoute] long auctionId, [FromRoute] Guid bidId)
    {
        return Ok();
    }
    
    [HttpPost("auctions")]
    public IActionResult Find([FromBody] IAuctionFilter filter)
    {
        return Ok();
    }
    
    [HttpPost("auctions/{auctionId:long}/bids")]
    public IActionResult Find([FromRoute] long auctionId, [FromBody] IBidFilter filter)
    {
        return Ok();
    }
    
    [HttpGet("auctions/{auctionId:long}")]
    public IActionResult Get([FromRoute] long auctionId)
    {
        return Ok();
    }
    
    [HttpGet("auctions/{auctionId:long}/bids/{bidId:guid}")]
    public IActionResult Get([FromRoute] long auctionId, [FromRoute] Guid bidId)
    {
        return Ok();
    }
    
    [HttpPut("auctions/{auctionId:long}")]
    public IActionResult Update([FromRoute] long auctionId, [FromBody] Auction auction)
    {
        return Ok();
    }
    
    [HttpPut("auctions/{auctionId:long}/bids/{bidId:guid}")]
    public IActionResult Update([FromRoute] long auctionId, [FromRoute] Guid bidId, [FromBody] Bid bid)
    {
        return Ok();
    }
}