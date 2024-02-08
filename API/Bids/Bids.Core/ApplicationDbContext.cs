using Bids.Core.Entities.Auctions;
using Bids.Core.Entities.Bids;
using Bids.Core.Entities.Users;
using Bids.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Bids.Core;

public class ApplicationDbContext : IdentityDbContext<User>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> opts)
        : base(opts)
    {
        
    }

    public DbSet<Bid> Bids { get; set; } = null!;
    public DbSet<Auction> Auctions { get; set; } = null!;
}