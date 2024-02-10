using Bids.Abstrations;

namespace Bids.Core.Filters.Auction;

public interface IAuctionFilter : IPagination
{
    AuctionFieldIdentifier SortBy { get; }
    DateTime? EndDate { get; }
    bool? Finished { get; }
    SortOrder SortOrder { get; }
    DateTime? StartDate { get; }
}