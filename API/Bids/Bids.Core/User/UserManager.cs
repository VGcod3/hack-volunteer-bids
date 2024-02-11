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

    public async Task<bool> Delete(string email)
    {
        User? user = await _userStore.GetByEmail(email);

        if (user is null)
        {
            return false;
        }
        
        await _userStore.Delete(user!.Id);

        return true;
    }
    
    public Task<User?> Get(string id)
    {
        return _userStore.Get(id);
    }
    
    public Task Update(User user)
    {
        return _userStore.Update(user);
    }
    
    public async Task<bool> Update(UserDto userDto)
    {
        User? user = await _userStore.GetByEmail(userDto.Email);

        if (user is null)
        {
            return false;
        }

        user.FirstName = userDto.FirstName;
        user.LastName = userDto.LastName;

        await _userStore.Update(user);

        return true;
    }
}