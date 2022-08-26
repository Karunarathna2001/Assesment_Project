using Interview_Assignment.Models;

namespace Interview_Assignment.WebData
{
    public interface EWebData
    {
        List<Post> GetPosts();
        Post GetPost(int id);
        Post AddPost(Post post);
        void DeletePost(Post post); 
        Post UpdatePost(Post post);
    }
}
