namespace Bids.Abstrations;

public static class PaginationExtensions
{
    public static IQueryable<TEntity> TakePage<TEntity>(this IQueryable<TEntity> entities, int page)
    {
        return entities
            .Skip(6 * (page - 1))
            .Take(6);
    }
}