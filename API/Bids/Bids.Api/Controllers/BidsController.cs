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
    public IActionResult GetAllBidsForAuction([FromRoute] long auctionId)
    {
        return Ok();
    }

    [HttpGet("{bidId:guid}")]
    public IActionResult GetBidById(long auctionId, Guid bidId)
    {
        return Ok();
    }
    
    [Authorize]
    [HttpDelete("{bidId:guid}")]
    public IActionResult Delete([FromRoute] long auctionId, [FromRoute] Guid bidId)
    {
        return Ok();
    }
    
    [Authorize]
    [HttpPost]
    public IActionResult Create(long auctionId, [FromBody] Bid bid)
    {
        return Ok();
    }
    
    [Authorize]
    [HttpPut]
    public IActionResult Update([FromRoute] long auctionId, [FromBody] Bid bid)
    {
        return Ok();
    }
}