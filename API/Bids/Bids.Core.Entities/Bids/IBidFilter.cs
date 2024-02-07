using Bids.Abstrations;

namespace Bids.Entities;

public interface IBidFilter : IPagination
{
    BidFieldIdentifier SortBy { get; }
    SortOrder SortOrder { get; }
}