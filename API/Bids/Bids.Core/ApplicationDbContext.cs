using Bids.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Bids.Core;

public class ApplicationDbContext : IdentityDbContext<Entities.User>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> opts)
        : base(opts)
    {
        
    }

    public DbSet<Bid> Bids { get; set; } = null!;
    public DbSet<Auction> Auctions { get; set; } = null!;
}