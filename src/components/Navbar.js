import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // install if not yet: npm install lucide-react

export default function Navbar({ title, mode, ToggleMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`w-full shadow-md ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to="/" className="text-xl font-bold text-blue-700">
          {title}
        </Link>

        {/* Right: Hamburger Icon (mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Links (hidden on mobile) */}
        <ul className="hidden lg:flex gap-6 items-center">
          <li>
            <Link to="/" className="hover:underline hover:text-blue-500 font-medium">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline hover:text-blue-500 font-medium">About Us</Link>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-sm font-medium">{mode === 'light' ? 'Light' : 'Dark'} Mode</span>
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
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-3">
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" className="hover:underline hover:text-blue-500 font-medium" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline hover:text-blue-500 font-medium" onClick={toggleMenu}>About Us</Link>
            </li>
            <li className="flex items-center justify-between">
              <span>{mode === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
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
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  ToggleMode: PropTypes.func.isRequired,
};
