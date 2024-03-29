using Bids.Abstrations;
using Bids.Core.Filters;
using Bids.Core.Filters.Auction;
using Bids.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Bids.Core;

public class AuctionStore
{
    private readonly ApplicationDbContext _storage;

    public AuctionStore(ApplicationDbContext dbContext)
    {
        _storage = dbContext;
    }
    
    public Task<int> CountTotal(AuctionFilter filter)
    {
        return _storage.Auctions
            .FilterBy(filter)
            .CountAsync();
    }
    
    public Task Create(Auction auction)
    {
        _storage.Auctions.Add(auction);

        return _storage.SaveChangesAsync();
    }
    
    public async Task Delete(long auctionId)
    {
        Auction? auction = await Get(auctionId: auctionId);

        if (!(auction is null))
        {
            auction.Deleted = true;
            auction.DeletedOn = DateTime.UtcNow;
            await Update(auction);
            await _storage.SaveChangesAsync();
        }
    }
    
    public Task<List<Auction>> Find(AuctionFilter filter)
    {
        return _storage.Auctions
            .FilterBy(filter)
            .OrderBy(filter)
            .TakePage(filter.CurrentPage)
            .ToListAsync();
    }
    
    public Task<Auction?> Get(long auctionId)
    {
        return _storage.Auctions
            .FirstOrDefaultAsync(a => a.Id == auctionId && !a.Deleted);
    }
    
    public Task Update(Auction auction)
    {
        _storage.Auctions.Update(auction);

        return _storage.SaveChangesAsync();
    }

    public Task<List<Auction>> GetAll()
        => _storage.Auctions.AsNoTracking().ToListAsync();
}