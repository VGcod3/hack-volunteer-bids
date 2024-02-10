using Bids.Abstrations;

namespace Bids.Entities;

public interface IBidFilter : IPagination
{
    long? AuctionId { get; }
    BidFieldIdentifier SortBy { get; }
    SortOrder SortOrder { get; }
}