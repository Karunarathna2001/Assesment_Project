using Microsoft.EntityFrameworkCore;

namespace Interview_Assignment.Models
{
    public class PostContext: DbContext
    {
        public PostContext(DbContextOptions<PostContext> options) : base(options)
        {
        }
        public DbSet<Post> MyPosts { get; set; }
    }
}
