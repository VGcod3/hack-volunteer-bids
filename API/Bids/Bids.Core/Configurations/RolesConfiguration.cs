using Bids.Core.Entities.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bids.Core.Configurations;

public class RolesConfiguration : IEntityTypeConfiguration<Roles>
{
    public void Configure(EntityTypeBuilder<Roles> builder)
    {
        builder.HasData(
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
    }
}