using Bids.Core.Entities.Users;

namespace Bids.Core;

public class UserManager
{
    private readonly UserStore _userStore;
    
    public UserManager(UserStore userStore)
    {
        _userStore = userStore;
    }

    public Task Add(User user)
    {
        return _userStore.Create(user);
    }

    public Task Delete(string userId)
    {
        return _userStore.Delete(userId);
    }
    
    public Task<User?> Get(string id)
    {
        return _userStore.Get(id);
    }

    public Task Update(User user)
    {
        return _userStore.Update(user);
    }
}