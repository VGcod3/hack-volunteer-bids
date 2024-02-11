using Bids.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bids.Core.Configurations;

public class BidConfiguration : IEntityTypeConfiguration<Bid>
{
    public void Configure(EntityTypeBuilder<Bid> builder)
    {
        
        builder.HasData(
            new Bid
            {
                Id = Guid.NewGuid(), AuctionId = 1,
                SetOn = DateTime.UtcNow, Value = 1050,
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow, Deleted = false
            },
            new Bid
            {
                Id = Guid.NewGuid(), AuctionId = 1,
               SetOn = DateTime.UtcNow, Value = 1100,
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow, Deleted = false
            },
            new Bid
            {
                Id = Guid.NewGuid(), AuctionId = 2, SetOn = DateTime.UtcNow, Value = 500, CreatedOn = DateTime.UtcNow,
               UpdatedOn = DateTime.UtcNow, Deleted = false
            },
            new Bid
            {
                Id = Guid.NewGuid(), AuctionId = 2, SetOn = DateTime.UtcNow, Value = 750, CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow, Deleted = false
            }
        );
    }
}