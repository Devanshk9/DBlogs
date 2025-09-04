import React from 'react'

const Writers = () => {
    const [writers, setWriters] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:5001/writers") // backend
          .then(res => res.json())
          .then(data => setBlogs(data))
          .catch(err => console.error(err));
      }, []);
  return (
    <div>Writers</div>
  )
}

export default Writers