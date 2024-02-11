using Bids.Core.Entities.Users;

namespace Bids.Entities;

public class Auction
{
    public long Id { get; set; }
    public string Name { get; set; } = String.Empty;
    public string Description { get; set; } = String.Empty;
    public double StartPrice { get; set; }
    public double HighestPrice { get; set; }
    public AuctionCategory AuctionCategory { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime FinishDate { get; set; }

    public string CreatedById { get; set; } = null!;
    public User CreatedBy { get; set; } = null!;
    
    public bool Completed { get; set; } = false;
    public DateTime CreatedOn { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedOn { get; set; } = DateTime.MinValue;
    public DateTime DeletedOn { get; set; } = DateTime.MinValue;
    public bool Deleted { get; set; } = false;

    public ICollection<Bid> Bids { get; set; } = null!;
}
