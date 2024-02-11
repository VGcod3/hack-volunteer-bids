namespace Bids.Entities;

public class AuctionDto
{
    public long Id { get; set; }
    public string Name { get; set; } = String.Empty;
    public string Description { get; set; } = String.Empty;
    public string Category { get; set; } = String.Empty;
    public double StartPrice { get; set; }
    public double HighestPrice { get; set; }
    public string PlacedBy { get; set; } = String.Empty;
    public string[] Images { get; set; } = Array.Empty<string>();
    public DateTime AuctionStart { get; set; }
    public DateTime AuctionEnd { get; set; }
}