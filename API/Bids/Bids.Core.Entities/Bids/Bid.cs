using Bids.Core.Entities.Users;

namespace Bids.Entities;

public class Bid
{
    public Guid Id { get; set; } = Guid.Empty;
    public long AuctionId { get; set; }
    public Auction Auction { get; set; } = null!;
    
    public User SetBy { get; set; } = null!;
    public DateTime SetOn { get; set; } = DateTime.UtcNow;
    public double Value { get; set; }
    public DateTime CreatedOn { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedOn { get; set; } = DateTime.MinValue;
    public DateTime DeletedOn { get; set; } = DateTime.MinValue;
    public bool Deleted { get; set; } = false;
}