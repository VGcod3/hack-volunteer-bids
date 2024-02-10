using Bids.Abstrations;

namespace Bids.Core.Filters.Bid;

public interface IBidFilter : IPagination
{
    long? AuctionId { get; }
    BidFieldIdentifier SortBy { get; }
    SortOrder SortOrder { get; }
}