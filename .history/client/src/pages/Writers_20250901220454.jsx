
//not using currrently
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// const Writers = () => {
//   const [writers, setWriters] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5001/api/writers") // backend
//       .then((res) => res.json())
//       .then((data) => setWriters(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="flex flex-col items-center px-6">
//       <h1 className="text-4xl font-bold mt-24 mb-8 text-gray-800">Our Writers</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
//         {writers.map((w) => (
//           <div
//             key={w.writer_id}
//             className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 flex flex-col items-center"
//           >
//             {/* Placeholder avatar (you can replace with profile pic from backend if available) */}
//             <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 flex items-center justify-center text-white text-xl font-bold mb-4">
//               {w.username.charAt(0).toUpperCase()}
//             </div>

//             <h2 className="text-xl font-semibold text-gray-900 mb-2">{w.username}</h2>

//             <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition">
//              <Link 
//     to={`/writers/${w.user_id}`} 
//     className="hover:underline text-gray-600 hover:text-gray-900"
//   >
//     View Blogs
//   </Link>
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Writers;
