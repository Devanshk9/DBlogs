import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function BlogDetail() {
  const { id } = useParams();  // get blog id from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <p className="text-center mt-20">Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 mt-20">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="text-gray-500 text-sm mb-6">
          By {blog.username} • {new Date(blog.created_at).toLocaleDateString()}
        </div>
        <p className="text-lg leading-relaxed text-gray-700">{blog.content}</p>
      </div>
    </>
  );
}

export default BlogDetail;
