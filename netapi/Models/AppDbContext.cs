using Microsoft.EntityFrameworkCore;

namespace MyApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> YourEntities { get; set; }
    }

    public class User
    {
        public int Id { get; set; }
        public string? Name { get; set; }
    }
}
