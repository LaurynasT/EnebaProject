using EnebaApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EnebaApi.Data;

[Route("api/")]
[ApiController]
public class GamesController : ControllerBase
{
    private readonly GameDbContext _context;
    public GamesController(GameDbContext context)
    {
        _context = context;
    }
    
[HttpGet("list")]
public async Task<IActionResult> GetList([FromQuery] string? search)
{
    var query = _context.Games.AsQueryable();
    
    if (!string.IsNullOrEmpty(search))
    {
        query = query.Where(game => EF.Functions.ILike(game.Title, $"%{search}%"));
    }
    
    var games = await query.ToListAsync();
    
    return Ok(new 
    {
        count = games.Count,
        results = games
    });
}
}