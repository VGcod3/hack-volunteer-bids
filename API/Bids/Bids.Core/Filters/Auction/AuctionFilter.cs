using Bids.Abstrations;

namespace Bids.Core.Filters.Auction;

public class AuctionFilter
{
    public CategoryOption[] Categories { get; set; } = Array.Empty<CategoryOption>();
    public PriceFilter PriceFilter { get; set; } = null!;
    public int CurrentPage { get; set; }
    public int TotalPages { get; set; }
    public string SearchField { get; set; } = String.Empty;
    public SortOptionsEnum SortBy { get; set; } = SortOptionsEnum.CreatedAt;
}