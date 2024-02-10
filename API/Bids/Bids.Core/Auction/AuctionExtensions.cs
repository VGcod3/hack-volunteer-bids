using Bids.Abstrations;
using Bids.Core.Filters;
using Bids.Core.Filters.Auction;
using Bids.Entities;

namespace Bids.Core;

internal static class AuctionExtensions
{
    internal static IQueryable<Auction> FilterBy(this IQueryable<Auction> auctions,
        IAuctionFilter filter)
    {
        return auctions.Where(a =>
            (a.Completed == filter.Finished || filter.Finished == null)
            && (a.StartDate >= filter.StartDate || filter.StartDate == null)
            && (a.StartDate <= filter.EndDate || filter.EndDate == null));
    }
    
    internal static IQueryable<Auction> OrderBy(this IQueryable<Auction> auctions,
        IAuctionFilter filter)
    {
        return filter.SortBy switch
        {
            AuctionFieldIdentifier.Date => filter.SortOrder == SortOrder.Ascending
                ? auctions.OrderBy(a => a.StartDate)
                : auctions.OrderByDescending(a => a.StartDate),
            AuctionFieldIdentifier.Name => filter.SortOrder == SortOrder.Ascending
                ? auctions.OrderBy(a => a.Name)
                : auctions.OrderByDescending(a => a.Name),
            _ => auctions
        };
    }
}