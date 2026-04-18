using Microsoft.EntityFrameworkCore;
using PortalAdmin.Models.Entities;

namespace PortalAdmin.Data
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
    }
}
