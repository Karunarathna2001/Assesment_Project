using Interview_Assignment.Models;
using Microsoft.VisualBasic;

namespace Interview_Assignment.WebData
{
    public class SqlPostsData : EWebData
    {
        private PostContext _postContext;
        public SqlPostsData(PostContext postContext)
        {
            _postContext = postContext;
        }
        public Post AddPost(Post post)
        {
            _postContext.MyPosts.Add(post);
            _postContext.SaveChanges();
            return post;
        }

        public void DeletePost(Post post)
        {
            _postContext.MyPosts.Remove(post);
            _postContext.SaveChanges();
        }

        public Post GetPost(int id)
        {
            var post = _postContext.MyPosts.Find(id);
            return post;
        }

        public List<Post> GetPosts()
        {
            return _postContext.MyPosts.ToList();
        }

        public Post UpdatePost(Post post)
        {
            var Existingpost = _postContext.MyPosts.Find(post.id);
            if(Existingpost != null)
            {
                Existingpost.title = post.title;
                Existingpost.body = post.body;
                _postContext.MyPosts.Update(Existingpost);
                _postContext.SaveChanges();
            }
            return post;
        }
    }
}
