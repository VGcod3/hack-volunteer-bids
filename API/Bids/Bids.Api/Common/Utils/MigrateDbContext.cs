using Bids.Core;
using Microsoft.EntityFrameworkCore;

namespace Bids.Api.Common.Utils;

public static class MigrateDbContext
{
    public static async Task MigrateAsync(IApplicationBuilder app)
    {
        using var serviceScope = app.ApplicationServices.CreateScope();
        var context = serviceScope.ServiceProvider.GetService<ApplicationDbContext>();
        await context?.Database.MigrateAsync()!;
    }
}