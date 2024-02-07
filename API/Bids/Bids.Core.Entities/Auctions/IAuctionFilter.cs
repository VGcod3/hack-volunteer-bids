using Bids.Abstrations;

namespace Bids.Entities;

public interface IAuctionFilter : IPagination
{
    AuctionFieldIdentifier SortBy { get; }
    DateTime? EndDate { get; }
    bool? Finished { get; }
    SortOrder SortOrder { get; }
    DateTime? StartDate { get; }
}