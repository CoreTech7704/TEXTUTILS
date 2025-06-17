import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({ title, mode, ToggleMode }) {
  return (
    <nav className={`w-full shadow-md ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      
      {/* Left Section: Logo + Nav Links */}
      <div className="flex items-center flex-grow">
        <Link to="/" className="text-xl font-bold text-blue-700">
          {title}
        </Link>
        
        {/* Nav Links spaced from logo */}
        <ul className="flex gap-6 ml-10">
          <li>
            <Link to="/" className="hover:underline hover:text-blue-500 font-medium">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline hover:text-blue-500 font-medium">About Us</Link>
          </li>
        </ul>
      </div>

      {/* Right Section: Toggle Mode */}
      <div className="flex items-center space-x-3">
        <span className="text-sm font-medium">{mode === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
        <button
          onClick={ToggleMode}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
            mode === 'dark' ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
              mode === 'dark' ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  ToggleMode: PropTypes.func.isRequired,
};
