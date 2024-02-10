using Bids.Abstrations;
using Bids.Core.Filters;
using Bids.Core.Filters.Auction;
using Bids.Core.Filters.Bid;
using Bids.Entities;

namespace Bids.Core;

public class AuctionManager
{
    private readonly AuctionStore _auctionStore;
    private readonly BidStore _bidStore;
    
    public AuctionManager(AuctionStore auctionStore, BidStore bidStore)
    {
        _auctionStore = auctionStore;
        _bidStore = bidStore;
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

    public async Task<PagedList<Auction>> Find(IAuctionFilter filter)
    {
        List<Auction> auctionsPage = await _auctionStore.Find(filter);
        int totalCount = await _auctionStore.CountTotal(filter);

        return new PagedList<Auction>()
        {
            Value = auctionsPage,
            Count = totalCount
        };
    }
    
    public async Task<PagedList<Bid>> Find(IBidFilter filter)
    {
        List<Bid> bidsPage = await _bidStore.Find(filter);
        int totalCount = await _bidStore.CountTotal(filter);

        return new PagedList<Bid>()
        {
            Value = bidsPage,
            Count = totalCount
        };
    }

    public Task<Auction?> Get(long id)
    {
        return _auctionStore.Get(id);
    }

    public Task<Bid?> Get(Guid id)
    {
        return _bidStore.Get(id);
    }

    public Task Update(Auction auction)
    {
        return _auctionStore.Update(auction);
    }

    public Task Update(Bid bid)
    {
        return _bidStore.Update(bid);
    }
}