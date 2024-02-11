namespace Bids.Core.Filters.Auction;

public class CategoryOption
{
    public Enum AuctionCategory { get; set; } = null!;
    public string Label { get; set; } = String.Empty;
    public bool Checked { get; set; }
}