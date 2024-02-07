using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

using Bids.Entities;

namespace Bids.Core.Db;

public class ApplicationDbContext : IdentityDbContext<User>
{
    
}