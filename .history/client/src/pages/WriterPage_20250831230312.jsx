import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

function WriterPage() {
  const { id } = useParams();  // writer id from URL
  const [writer, setWriter] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/api/writers/${id}`)
      .then((res) => res.json())
      .then((data) => setWriter(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!writer) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-6 mt-20">
      {/* Writer Name */}
      <h1 className="text-4xl font-bold mb-8">{writer.username}</h1>

      {/* List of Blogs */}
      <div className="space-y-6">
        {writer.blogs.map((b) => (
          <div
            key={b.blog_id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
          >
            <div className="flex flex-row items-center justify-between w-full">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{b.title}</h2>
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
              <span>By {writer.username}</span>
              <span className="italic">
                {new Date(b.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WriterPage;
