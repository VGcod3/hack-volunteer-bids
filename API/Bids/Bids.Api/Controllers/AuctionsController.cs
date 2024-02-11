using Bids.Core;
using Bids.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Bids.Api.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class AuctionsController : Controller
{
    private readonly AuctionManager _auctionManager;
    
    public AuctionsController(AuctionManager auctionManager)
    {
        _auctionManager = auctionManager;
    }
    
    [HttpGet]
    public IActionResult GetAllAuctions()
    {
        return Ok();
    }
    
    [HttpGet("{auctionId:long}")]
    public async Task<IActionResult> Get([FromRoute] long auctionId)
    {
        AuctionDto? auction = await _auctionManager.GetDto(auctionId);
        
        return Ok(auction);
    }
    
    [HttpPost]
    [Authorize]
    public async Task<IActionResult> Create([FromBody] AuctionDto auctionDto)
    {
        bool result = await _auctionManager.AddAuction(auctionDto);
        
        return result ? Ok() : BadRequest();
    }
    
    [HttpDelete("{auctionId:long}")]
    [Authorize]
    public async Task<IActionResult> Delete([FromRoute] long auctionId)
    {
        await _auctionManager.Delete(auctionId);
        
        return Ok();
    }
    
    [HttpPut("{auctionId:long}")]
    [Authorize]
    public async Task<IActionResult> Update([FromRoute] long auctionId, [FromBody] AuctionDto auction)
    {
        bool result = await _auctionManager.Update(auction);
        
        return result ? Ok() : BadRequest();
    }
}