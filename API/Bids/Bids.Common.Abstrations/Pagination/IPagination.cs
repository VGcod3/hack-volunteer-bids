namespace Bids.Abstrations;

public interface IPagination
{
    int PageIndex { get; }
    int PageSize { get; }
}