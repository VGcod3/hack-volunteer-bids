using Bids.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Bids.Api.Controllers;

[ApiController]
[Route("/api/auctions/{auctionId:long}/[controller]")]
public class BidsController : ControllerBase
{
    
    [HttpGet]
    public IActionResult GetAllBidsForAuction(long auctionId)
    {
        return Ok();
    }

    [HttpGet("{bidId:long}")]
    public IActionResult GetBidById(long auctionId, long bidId)
    {
        return Ok();
    }
    
    [Authorize]
    [HttpDelete("{bidId:long}")]
    public IActionResult Delete([FromRoute] long auctionId, [FromRoute] long bidId)
    {
        return Ok();
    }
    
    [Authorize]
    [HttpPost]
    public IActionResult Create(long auctionId, [FromBody] Bid auction)
    {
        return Ok();
    }
    
    [Authorize]
    [HttpPut]
    public IActionResult Update([FromRoute] long auctionId, [FromBody] Auction auction)
    {
        return Ok();
    }

}