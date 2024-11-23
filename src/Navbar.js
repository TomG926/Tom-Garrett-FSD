// src/Navbar.js
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Summary', href: 'summary' },
    { name: 'Experience', href: 'experience' },
    { name: 'Skills', href: 'skills' },
    { name: 'Certifications', href: 'certifications' },
    { name: 'Publications', href: 'publications' },
    { name: 'Education', href: 'education' },
    { name: 'Portfolio', href: 'portfolio' }, // New Portfolio Link
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 fixed top-0 w-full z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#hero" className="text-2xl font-bold text-indigo-400">
              Tom Garrett
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-64} // Adjust based on navbar height
                activeClass="text-indigo-400 border-b-2 border-indigo-400"
                spy={true}
                className="ml-6 cursor-pointer text-gray-300 hover:text-indigo-400 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-indigo-400 focus:outline-none focus:text-indigo-400"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={() => setIsOpen(false)}
                activeClass="text-indigo-400"
                spy={true}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-indigo-400 hover:bg-gray-700 transition cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
