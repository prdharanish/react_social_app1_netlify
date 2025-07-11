// src/components/Post.js
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p className="postDate">{post.datetime}</p>
      <p className="postBody">
        {post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}
      </p>
      <Link to={`/post/${post.id}`}>View Post</Link>
    </article>
  );
};

export default Post;
