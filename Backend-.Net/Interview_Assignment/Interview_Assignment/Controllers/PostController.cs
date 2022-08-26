using Interview_Assignment.Models;
using Interview_Assignment.WebData;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace Interview_Assignment.Controllers
{
   
    [ApiController]
    public class PostController : ControllerBase
    {
        private EWebData _WebData;
        public PostController(EWebData webData)
        {
            _WebData = webData;
        }
        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult getPosts()
        {
            return Ok(_WebData.GetPosts());

        }
        [HttpGet]
        [Route("api/[controller]/{id}")]
        public IActionResult getPostById(int id)
        {
            var post = _WebData.GetPost(id);
            if (post != null)
            {
                return Ok(post);
            }

            return NotFound("Not found");

        }

        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult addPost(Post post)
        {
            _WebData.AddPost(post);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + post.id, post);

        }

        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public IActionResult deletePost(int id)
        {
            var post = _WebData.GetPost(id);

            if (post != null)
            {
                _WebData.DeletePost(post);
                return Ok();
            }
            return NotFound("Not found");
        }

        [HttpPatch]
        [Route("api/[controller]/{id}")]
        public IActionResult updatePost(int id, Post post)
        {
            var Existingpost = _WebData.GetPost(id);

            if (Existingpost != null)
            {
                post.id = Existingpost.id;
                _WebData.UpdatePost(post);

            }
            return Ok(post);

        }
    }
}
