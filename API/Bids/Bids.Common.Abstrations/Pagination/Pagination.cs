namespace Bids.Abstrations;

public class Pagination : IPagination
{
    public int PageIndex { get; set; }
    public int PageSize { get; set; } = 20;
    
    public Pagination(){}

    public Pagination(int pageIndex, int pageSize)
    {
        PageIndex = pageIndex;
        PageSize = pageSize;
    }
}