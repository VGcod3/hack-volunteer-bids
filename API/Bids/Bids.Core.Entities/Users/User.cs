using Bids.Core.Entities.Bids;
using Microsoft.AspNetCore.Identity;

namespace Bids.Core.Entities.Users;

public class User : IdentityUser
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    
    public IEnumerable<Bid> Bids { get; set; } = Enumerable.Empty<Bid>();
}