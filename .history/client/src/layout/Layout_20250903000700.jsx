import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Layout() {
  const { token, logout } = useContext(AuthContext);

  return (
    <div>
      <nav className="flex gap-4 p-4 bg-gray-800 text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blogs">Blogs</Link>

        {token ? (
          <button onClick={logout} className="ml-auto bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        ) : (
          <Link to="/login" className="ml-auto bg-blue-500 px-3 py-1 rounded">
            Login
          </Link>
        )}
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
