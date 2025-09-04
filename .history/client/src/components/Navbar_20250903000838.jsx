import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, logout } = useContext(AuthContext); // ✅ use auth state

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          DBlogs
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium items-center">
          <li>
            <Link to="/" className="hover:text-yellow-400">Home</Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-yellow-400">Blogs</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          </li>

          {/* ✅ Dynamic button */}
          {token ? (
            <button
              onClick={logout}
              className="ml-6 bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="ml-6 bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
            >
              Login
            </Link>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-4 font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

            {/* ✅ Dynamic button in mobile */}
            {token ? (
              <li>
                <button
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
