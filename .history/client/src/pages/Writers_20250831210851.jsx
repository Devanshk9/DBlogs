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
    <div>
        <h1>Writers</h1>
      {writers.map(b => (
        <div>
          <h2>{b.username}</h2>
        </div>
      ))}
    </div>
  )
}

export default Writers