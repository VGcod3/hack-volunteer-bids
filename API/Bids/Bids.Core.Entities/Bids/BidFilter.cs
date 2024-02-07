using Bids.Abstrations;

namespace Bids.Entities;

public class BidFilter : IBidFilter
{
    public int PageIndex { get; set; }
    public int PageSize { get; set; } = 20;
    public BidFieldIdentifier SortBy { get; set; } = BidFieldIdentifier.Date;
    public SortOrder SortOrder { get; set; } = SortOrder.Ascending;
}