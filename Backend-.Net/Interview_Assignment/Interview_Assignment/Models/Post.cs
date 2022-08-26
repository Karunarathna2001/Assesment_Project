using System.ComponentModel.DataAnnotations;

namespace Interview_Assignment.Models
{
    public class Post
    {
        [Key]
        public int id { get; set; }

        [Required]
        [MaxLength(250, ErrorMessage = "Title is longer than expected")]
        public string title { get; set; }

        [Required]
        [MaxLength(1000, ErrorMessage = "Body is longer than expected")]
        public string body { get; set; }
    }
}
