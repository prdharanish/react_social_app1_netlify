import { Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <main className="PostLayout">
      <Outlet />
    </main>
  );
};

export default PostLayout;