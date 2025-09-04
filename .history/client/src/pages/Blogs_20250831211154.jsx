import { useEffect, useState } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/blogs") // backend
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex items-center">
      <h1 className="text-3xl ">Blogs</h1>
      {blogs.map(b => (
        <div key={b.blog_id}>
          <h2>{b.title}</h2>
          <p>{b.content}</p>
          <small>By {b.username}</small>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
