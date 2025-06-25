import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4 justify-center">
        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
        <li><Link to="/signin" className="hover:text-blue-300">Sign In</Link></li>
        <li><Link to="/signup" className="hover:text-blue-300">Sign Up</Link></li>
        <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-blue-300">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;