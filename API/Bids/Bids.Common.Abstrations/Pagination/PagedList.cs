namespace Bids.Abstrations;

public class PagedList<TEntity>
{
    public IEnumerable<TEntity> Value { get; set; } = Enumerable.Empty<TEntity>();
    public int Count { get; set; }
}