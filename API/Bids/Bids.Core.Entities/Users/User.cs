using System.Collections;
using Bids.Entities;
using Microsoft.AspNetCore.Identity;

namespace Bids.Core.Entities.Users;

public class User : IdentityUser
{
    public string? RefreshToken { get; set; }
    public DateTime RefreshTokenExpiryTime { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;

    public ICollection<Bid> Bids { get; set; } = null;
    public ICollection<Auction> Auctions { get; set; } = null;
}