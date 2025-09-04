import React from 'react'
import { useEffect, useState } from "react";

const Writers = () => {
    const [writers, setWriters] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:5001/writers") // backend
          .then(res => res.json())
          .then(data => setWriters(data))
          .catch(err => console.error(err));
      }, []);
  return (
    <div>Writers
        <h1>Writers</h1>
      {writers.map(b => (
        <div key={b.blog_id}>
          <h2>{b.title}</h2>
          <p>{b.content}</p>
          <small>By {b.username}</small>
        </div>
      ))}
    </div>
  )
}

export default Writers