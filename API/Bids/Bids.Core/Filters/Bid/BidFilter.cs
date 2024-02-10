using Bids.Abstrations;

namespace Bids.Core.Filters.Bid;

public class BidFilter : IBidFilter
{
    public int PageIndex { get; set; }
    public int PageSize { get; set; } = 20;
    public long? AuctionId { get; set; }
    public BidFieldIdentifier SortBy { get; set; } = BidFieldIdentifier.Date;
    public SortOrder SortOrder { get; set; } = SortOrder.Ascending;
}