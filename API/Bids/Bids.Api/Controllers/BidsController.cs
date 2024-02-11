using Bids.Core;
using Bids.Core.Filters.Auction;
using Bids.Core.Filters.Bid;
using Bids.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Bids.Api.Controllers;

[ApiController]
[Route("/api/auctions/{auctionId:long}/[controller]")]
public class BidsController : ControllerBase
{
    private readonly AuctionManager _auctionManager;

    public BidsController(AuctionManager manager)
    {
        _auctionManager = manager;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetAllBidsForAuction([FromRoute] long auctionId)
    {
        BidFilter filter = new BidFilter()
        {
            AuctionId = auctionId,
            PageIndex = 0,
            PageSize = int.MaxValue
        };

        List<Bid> bids = await _auctionManager.Find(filter);
        return Ok(bids);
    }

    [HttpGet("{bidId:guid}")]
    public async Task<IActionResult> GetBidById(long auctionId, Guid bidId)
    {
        Bid? bid = await _auctionManager.Get(bidId);
        return Ok(bid);
    }
    
    [Authorize]
    [HttpDelete("{bidId:guid}")]
    public async Task<IActionResult> Delete([FromRoute] long auctionId, [FromRoute] Guid bidId)
    {
        await _auctionManager.Delete(bidId);
        
        return Ok();
    }
    
    [Authorize]
    [HttpPost]
    public async Task<IActionResult> Create(long auctionId, [FromBody] Bid bid)
    {
        await _auctionManager.AddBid(bid);
        return Ok();
    }
    
    [Authorize]
    [HttpPut]
    public async Task<IActionResult> Update([FromRoute] long auctionId, [FromBody] Bid bid)
    {
        await _auctionManager.Update(bid);
        return Ok();
    }
}