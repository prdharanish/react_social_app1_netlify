import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const PostPage = () => {
  const { posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);

  return (
    <main className="PostPage">
      {post ? (
        <article className="post">
          <h2>{post.title}</h2>
          <p className="postDate">{post.datetime}</p>
          <p className="postBody">{post.body}</p>
          <Link to={`/edit/${post.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => handleDelete(post.id)} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </article>
      ) : (
        <article className="post">
          <h2>Post Not Found</h2>
          <p>
            <Link to="/">Back to Home</Link>
          </p>
        </article>
      )}
    </main>
  );
};

export default PostPage;
