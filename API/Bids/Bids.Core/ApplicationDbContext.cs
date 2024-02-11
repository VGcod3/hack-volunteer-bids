using Bids.Core.Entities.Users;
using Bids.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Bids.Core;

public class ApplicationDbContext : IdentityDbContext<User>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> opts)
        : base(opts)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Roles>().HasData(
            new Roles
            {
                Id = "431f29e9-13ff-4f5f-b178-511610d5103f",
                Name = "Admin", ConcurrencyStamp = "1",
                NormalizedName = "Admin"
            },
            new Roles
            {
                Id = "5adbec33-97c5-4041-be6a-e0f3d3ca6f44",
                Name = "User", ConcurrencyStamp = "2",
                NormalizedName = "User"
            }
        );

        builder.Entity<Auction>()
            .Property(p => p.AuctionCategory)
            .HasConversion(
                p => p.ToString(),
                p => Enum.Parse<AuctionCategory>( p));
        
        base.OnModelCreating(builder);
    }

    public DbSet<Bid> Bids { get; set; } = null!;
    public DbSet<Auction> Auctions { get; set; } = null!;
}