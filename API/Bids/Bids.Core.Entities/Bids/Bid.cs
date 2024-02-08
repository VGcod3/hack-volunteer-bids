using Bids.Core.Entities.Auctions;
using Bids.Core.Entities.Users;
using Bids.Entities;

namespace Bids.Core.Entities.Bids;

public class Bid
{
    public Guid Id { get; set; } = Guid.Empty;
    public Auction Auction { get; set; } = null!;
    public User SetBy { get; set; } = null!;
    public DateTime SetOn { get; set; } = DateTime.UtcNow;
    public double Value { get; set; }
    public DateTime CreatedOn { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedOn { get; set; } = DateTime.MinValue;
    public DateTime DeletedOn { get; set; } = DateTime.MinValue;
    public bool Deleted { get; set; } = false;
}