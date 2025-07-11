// src/components/EditPost.js
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext"; // for components


const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    posts,
    handleEdit,
    editTitle,
    setEditTitle,
    editBody,
    setEditBody,
  } = useContext(DataContext);

  const post = posts.find((p) => p.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(post.id);
  };

  return (
    <main className="NewPost">
      {editTitle ? (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="submit">Update</button>
          </form>
        </>
      ) : (
        <>
          <h2>Post Not Found</h2>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </>
      )}
    </main>
  );
};

export default EditPost;
