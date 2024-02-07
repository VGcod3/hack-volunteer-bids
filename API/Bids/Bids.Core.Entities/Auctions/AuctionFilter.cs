using Bids.Abstrations;

namespace Bids.Entities;

public class AuctionFilter : IAuctionFilter
{
    public int PageIndex { get; set; }
    public int PageSize { get; set; } = 20;
    public AuctionFieldIdentifier SortBy { get; set; } = AuctionFieldIdentifier.Date;
    public DateTime? EndDate { get; set; }
    public bool? Finished { get; set; }
    public SortOrder SortOrder { get; set; } = SortOrder.Ascending;
    public DateTime? StartDate { get; set; }
}