using Bids.Core.Configurations;
using Bids.Core.Entities.Users;
using Bids.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace Bids.Core;

public class ApplicationDbContext : IdentityDbContext<User>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> opts)
        : base(opts)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfiguration(new AuctionConfiguration());
        builder.ApplyConfiguration(new RolesConfiguration());
        builder.ApplyConfiguration(new BidConfiguration());
    
        base.OnModelCreating(builder);
    }

    public DbSet<Bid> Bids { get; set; } = null!;
    public DbSet<Auction> Auctions { get; set; } = null!;
}