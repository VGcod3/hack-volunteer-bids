namespace Bids.Abstrations;

public static class PaginationExtensions
{
    public static IQueryable<TEntity> TakePage<TEntity>(this IQueryable<TEntity> entities, IPagination pagination)
    {
        return entities
            .Skip(pagination.PageIndex * pagination.PageSize)
            .Take(pagination.PageSize);
    }
}