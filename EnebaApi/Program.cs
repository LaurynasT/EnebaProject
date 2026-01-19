using Microsoft.EntityFrameworkCore;
using EnebaApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddOpenApi();

// Database - Railway support
builder.Services.AddDbContext<GameDbContext>(options =>
{
    // First try Railway's DATABASE_URL, then fall back to appsettings.json
    var connectionString = Environment.GetEnvironmentVariable("DATABASE_URL") 
                          ?? builder.Configuration.GetConnectionString("DefaultConnection");
    
    // Parse Railway's DATABASE_URL if needed (format: postgresql://user:pass@host:port/db)
    if (!string.IsNullOrEmpty(connectionString) && connectionString.StartsWith("postgresql://"))
    {
        connectionString = ConvertPostgresUrl(connectionString);
    }
    
    options.UseNpgsql(connectionString);
});

// CORS - Good!
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddControllers();

var app = builder.Build();

// Auto-apply migrations on startup (for Railway)
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<GameDbContext>();
    try
    {
        db.Database.Migrate();
        Console.WriteLine("✅ Database migrations applied successfully");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"❌ Migration error: {ex.Message}");
    }
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}


app.UseCors("AllowAll");
app.UseStaticFiles();
app.MapControllers();

app.Run();


static string ConvertPostgresUrl(string databaseUrl)
{
    try
    {
        var uri = new Uri(databaseUrl);
        var userInfo = uri.UserInfo.Split(':');
        
        return $"Host={uri.Host};" +
               $"Port={uri.Port};" +
               $"Database={uri.AbsolutePath.Trim('/')};" +
               $"Username={userInfo[0]};" +
               $"Password={userInfo[1]};" +
               $"SSL Mode=Require;" +
               $"Trust Server Certificate=true";
    }
    catch
    {
        return databaseUrl; 
    }
}