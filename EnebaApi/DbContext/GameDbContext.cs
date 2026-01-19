using Microsoft.EntityFrameworkCore;
using EnebaApi.Models;
namespace EnebaApi.Data;
public class GameDbContext : DbContext
{
    public GameDbContext(DbContextOptions<GameDbContext> options)
        : base(options)
    {
    }

    public DbSet<Game> Games { get; set; }
}
