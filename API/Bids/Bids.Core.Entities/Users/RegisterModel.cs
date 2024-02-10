namespace Bids.Core.Entities.Users;

public class RegisterModel
{
    public string Email { get; set; } = String.Empty;
    public string Password { get; set; } = String.Empty;
    public string FirstName { get; set; } = String.Empty;
    public  string LastName { get; set; } = String.Empty;
}