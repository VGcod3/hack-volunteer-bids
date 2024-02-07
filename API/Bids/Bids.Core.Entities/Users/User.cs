using Microsoft.AspNetCore.Identity;

namespace Bids.Entities;

public class User : IdentityUser
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    
    public IEnumerable<Bid> Bids { get; set; } = Enumerable.Empty<Bid>();
}