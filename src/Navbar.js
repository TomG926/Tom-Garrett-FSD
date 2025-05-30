// src/Navbar.js
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { name: 'Contact', href: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 animate-slide-down ${
      isScrolled 
        ? 'bg-neutral-900/90 backdrop-blur-md shadow-material' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className={`text-2xl font-bold transition-colors ${
                isScrolled 
                  ? 'text-primary-400 hover:text-primary-300' 
                  : 'text-transparent hover:text-white/50'
              }`}
            >
              Tom Garrett
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-64}
                activeClass="text-primary-400 bg-neutral-800/50"
                spy={true}
                className={`px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer animate-fade-in ${
                  isScrolled 
                    ? 'text-neutral-200 hover:text-primary-300 hover:bg-neutral-800/50' 
                    : 'text-transparent hover:text-white/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className={`hover:text-primary-400 focus:outline-none focus:text-primary-400 transition-colors ${
                isScrolled ? 'text-neutral-200' : 'text-transparent'
              }`}
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
        <div className="md:hidden bg-neutral-900/95 backdrop-blur-md shadow-material animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={() => setIsOpen(false)}
                activeClass="text-primary-400 bg-neutral-800/50"
                spy={true}
                className="block px-4 py-3 rounded-lg text-base font-medium text-neutral-200 hover:text-primary-300 hover:bg-neutral-800/50 transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
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