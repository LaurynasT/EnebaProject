namespace EnebaApi.Models;
public class Game
{
    public int Id { get; set; }
    public string ImageUrl { get; set; }
    public string Title { get; set; }
    public string Platform { get; set; }
    public string Region { get; set; }
    public decimal Price { get; set; }
    public decimal Discount { get; set; }
    public decimal FinalPrice{ get; set;}
    public decimal Cashback { get; set; }
    public decimal Likes { get; set; }
    public string PlatformImageUrl { get; set; }
}