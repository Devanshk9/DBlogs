import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          DVlogs
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/writers"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Writers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
