import { useEffect, useState } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/blogs") // backend
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center px-6">
      <h1 className="text-4xl font-bold mt-24 mb-8 text-gray-800">Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {blogs.map((b) => (
          <div
            key={b.blog_id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {b.title}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
              {b.content}
            </p>
            <div className="flex items-center mt- justify-between text-sm text-gray-500">
              <span> By {b.username}</span>
              <span className="italic">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
