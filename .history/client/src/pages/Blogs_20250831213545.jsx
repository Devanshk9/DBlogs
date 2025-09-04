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
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mt-[100px]">Blogs</h1>

      {blogs.map(b => (
        <div className="bg-amber-100 p-10 m-1.5">
        <div key={b.blog_id}>
          <h2>{b.title}</h2>
          <p>{b.content}</p>
          <small>By {b.username}</small>
        </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
