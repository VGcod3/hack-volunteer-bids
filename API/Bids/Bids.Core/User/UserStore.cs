using Bids.Entities;
using Microsoft.EntityFrameworkCore;

namespace Bids.Core;

public class UserStore
{
    private readonly ApplicationDbContext _storage;

    public UserStore(ApplicationDbContext store)
    {
        _storage = store;
    }
    
    public Task Create(User user)
    {
        _storage.Users.Add(user);

        return _storage.SaveChangesAsync();
    }
    
    public async Task Delete(string userId)
    {
        User? user = await Get(userId);

        if (!(user is null))
        {
            _storage.Users.Remove(user!);
            await _storage.SaveChangesAsync();
        }
    }
    
    public Task<User?> Get(string userId)
    {
        return _storage.Users
            .FirstOrDefaultAsync(u => u.Id == userId);
    }
    
    public Task Update(User user)
    {
        _storage.Users.Update(user);

        return _storage.SaveChangesAsync();
    }
}