import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          DBlogs
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
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
          {/* <li>
            {/* <Link
              to="/writers"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Writers
            </Link> */}
          </li> */}
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
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
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="hover:text-yellow-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/writers"
                className="hover:text-yellow-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Writers
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
