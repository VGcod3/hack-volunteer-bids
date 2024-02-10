using Bids.Abstrations;
using Bids.Entities;

namespace Bids.Core;

internal static class BidExtensions
{
    internal static IQueryable<Bid> FilterBy(this IQueryable<Bid> bids,
        IBidFilter filter)
    {
        return bids.Where(b =>
            b.Auction.Id == filter.AuctionId || filter.AuctionId == null);
    }
    
    internal static IQueryable<Bid> OrderBy(this IQueryable<Bid> bids,
        IBidFilter filter)
    {
        return filter.SortBy switch
        {
            BidFieldIdentifier.Date => filter.SortOrder == SortOrder.Ascending
                ? bids.OrderBy(b => b.CreatedOn)
                : bids.OrderByDescending(b => b.CreatedOn),
            BidFieldIdentifier.Value => filter.SortOrder == SortOrder.Ascending
                ? bids.OrderBy(b => b.Value)
                : bids.OrderByDescending(b => b.Value),
            _ => bids
        };
    }
}