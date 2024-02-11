using Microsoft.Extensions.DependencyInjection;

namespace Bids.Core;

public static class ServiceCollectionExtensions
{
    public static void AddCore(this IServiceCollection services)
    {
        services.AddScoped<AuctionStore>();
        services.AddScoped<BidStore>();

        services.AddScoped<UserManager>();
        services.AddScoped<UserStore>();
    }
}