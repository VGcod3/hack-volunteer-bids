using Bids.Abstrations;
using Bids.Core.Filters;
using Bids.Core.Filters.Bid;
using Bids.Entities;
using Microsoft.EntityFrameworkCore;

namespace Bids.Core;

public class BidStore
{
    private readonly ApplicationDbContext _storage;

    public BidStore(ApplicationDbContext dbContext)
    {
        _storage = dbContext;
    }
    
    public Task<int> CountTotal(IBidFilter filter)
    {
        return _storage.Bids
            .FilterBy(filter)
            .CountAsync();
    }
    
    public Task Create(Bid bid)
    {
        _storage.Bids.Add(bid);

        return _storage.SaveChangesAsync();
    }
    
    public async Task Delete(Guid bidId)
    {
        Bid? bid = await Get(bidId);

        if (!(bid is null))
        {
            bid.Deleted = true;
            bid.DeletedOn = DateTime.UtcNow;
            await Update(bid);
            await _storage.SaveChangesAsync();
        }
    }
    
    public Task<List<Bid>> Find(IBidFilter filter)
    {
        return _storage.Bids
            .FilterBy(filter)
            .OrderBy(filter)
            .TakePage(filter.PageIndex+1)
            .ToListAsync();
    }
    
    public Task<Bid?> Get(Guid bidId)
    {
        return _storage.Bids
            .FirstOrDefaultAsync(b => b.Id == bidId && !b.Deleted);
    }
    
    public Task Update(Bid bid)
    {
        _storage.Bids.Update(bid);

        return _storage.SaveChangesAsync();
    }
}