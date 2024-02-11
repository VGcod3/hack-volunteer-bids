using Bids.Abstrations;
using Bids.Core.Entities.Users;
using Bids.Core.Filters.Auction;
using Bids.Core.Filters.Bid;
using Bids.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Bids.Core;

public class AuctionManager
{
    private readonly AuctionStore _auctionStore;
    private readonly BidStore _bidStore;
    private readonly UserStore _userStore;
    
    public AuctionManager(AuctionStore auctionStore, BidStore bidStore, UserStore userStore)
    {
        _auctionStore = auctionStore;
        _bidStore = bidStore;
        _userStore = userStore;
    }

    public async Task<bool> AddAuction(AuctionDto auctionDto)
    {
        User? user = await _userStore.GetByEmail(auctionDto.PlacedBy);

        if (user is null)
            return false;

        Auction auction = auctionDto.FromDto(user);

        await AddAuction(auction);

        return true;
    }
    
    public Task AddAuction(Auction auction)
    {
        return _auctionStore.Create(auction);
    }
    
    public Task AddBid(Bid bid)
    {
        return _bidStore.Create(bid);
    }

    public Task Delete(long auctionId)
    {
        return _auctionStore.Delete(auctionId);
    }
    
    public Task Delete(Guid bidId)
    {
        return _bidStore.Delete(bidId);
    }

    public async Task<PagedList<Auction>> Find(AuctionFilter filter)
    {
        List<Auction> auctionsPage = await _auctionStore.Find(filter);
        int totalCount = await _auctionStore.CountTotal(filter);

        return new PagedList<Auction>()
        {
            Value = auctionsPage,
            Count = totalCount
        };
    }
    
    public async Task<List<Bid>> Find(IBidFilter filter)
    {
        List<Bid> bidsPage = await _bidStore.Find(filter);

        return bidsPage;
    }

    public Task<Auction?> Get(long id)
    {
        return _auctionStore.Get(id);
    }
    
    public async Task<AuctionDto?> GetDto(long id)
    {
        Auction? auction = await Get(id);

        return auction?.ToDto();
    }

    public Task<Bid?> Get(Guid id)
    {
        return _bidStore.Get(id);
    }

    public Task Update(Auction auction)
    {
        return _auctionStore.Update(auction);
    }
    
    public async Task<bool> Update(AuctionDto auctionDto)
    {
        Auction? auction = await Get(auctionDto.Id);

        if (auction is null)
            return false;

        auction.PopulateFromDto(auctionDto);

        await Update(auction);
        return true;
    }

    public Task Update(Bid bid)
    {
        return _bidStore.Update(bid);
    }

    public Task<List<Auction>> GetAll()
    {
        return _auctionStore.GetAll();
    }
}