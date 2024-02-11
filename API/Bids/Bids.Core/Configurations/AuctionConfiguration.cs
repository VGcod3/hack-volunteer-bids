using Bids.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bids.Core.Configurations;

public class AuctionConfiguration: IEntityTypeConfiguration<Auction>
{
    public void Configure(EntityTypeBuilder<Auction> builder)
    {
        ConfigureEntity(builder);
        SeedData(builder);
    }

    private void SeedData(EntityTypeBuilder<Auction> builder)
    {
        builder.HasData(
            new Auction {
                Id = 1,
                Name = "Antique Vase from Ming Dynasty",
                Description = "A rare and exquisite Ming Dynasty vase, perfect for collectors.",
                StartPrice = 5000,
                HighestPrice = 5500,
                CreatedById = "9f1614df-d564-4795-b7ce-9e0d9cc79e31",
                AuctionCategory = AuctionCategory.Jewelry,
                StartDate = new DateTime(2024, 3, 15),
                FinishDate = new DateTime(2024, 3, 30),
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow,
                Completed = false,
                Deleted = false
            },
            new Auction {
                Id = 2,
                Name = "Limited Edition Modern Art Print",
                Description = "A striking modern art print by a renowned contemporary artist. Numbered and signed.",
                StartPrice = 2000,
                HighestPrice = 2500,
                CreatedById ="9f1614df-d564-4795-b7ce-9e0d9cc79e31", 
                AuctionCategory = AuctionCategory.Art,
                StartDate = new DateTime(2024, 4, 1),
                FinishDate = new DateTime(2024, 4, 15),
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow,
                Completed = false,
                Deleted = false
            }
        );
    }

    private void ConfigureEntity(EntityTypeBuilder<Auction> builder)
    {
        builder
            .Property(p => p.AuctionCategory)
            .HasConversion(
                p => p.ToString(),
                p => Enum.Parse<AuctionCategory>(p));
    }
}