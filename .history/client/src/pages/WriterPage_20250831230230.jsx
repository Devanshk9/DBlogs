import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function WriterPage() {
  const { id } = useParams();  // get blog id from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/api/writers/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <p className="text-center mt-20">Loading...</p>;

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 mt-20">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="text-gray-500 text-sm mb-6">
          {blog.map((b) => (
            <div
              key={b.blog_id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="flex flex-row items-center justify-between w-full">
  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
    {b.title}
  </h2>
  <Link 
    to={`/blogs/${b.blog_id}`} 
    className="hover:underline text-gray-600 hover:text-gray-900"
  >
    <FiExternalLink />
  </Link>
</div>

              <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                {b.content}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span> By {b.username}</span>
                <span className="italic">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-lg leading-relaxed text-gray-700">{blog.content}</p>
      </div>
    </>
  );
}

export default WriterPage;
