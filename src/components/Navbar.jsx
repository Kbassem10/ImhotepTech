import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentPage = 'home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getNavLinkClass = (page) => {
    const baseClass = "transition-colors duration-300 hover:underline";
    return currentPage === page 
      ? `text-secondary hover:text-secondary ${baseClass}`
      : `text-gray-300 hover:text-secondary ${baseClass}`;
  };

  return (
    <nav className="w-full bg-primary/90 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 max-w-full">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-white flex items-center space-x-2 group">
            <span className="bg-secondary text-primary p-1 rounded transform group-hover:rotate-12 transition-transform duration-300">
              IT
            </span>
            <span className="group-hover:text-secondary transition-colors duration-300">
              Imhotep Tech
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/libraries" className={getNavLinkClass('libraries')}>
              Libraries / APIs
            </Link>
            <Link to="/about-me" className={getNavLinkClass('about-me')}>
              The Founder
            </Link>
            <Link to="/social-media" className={getNavLinkClass('social-media')}>
              Social Media
            </Link>
          </div>
          
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Link to="/libraries" className={getNavLinkClass('libraries')} onClick={toggleMobileMenu}>
                Libraries / APIs
              </Link>
              <Link to="/about-me" className={getNavLinkClass('about-me')} onClick={toggleMobileMenu}>
                The Founder
              </Link>
              <Link to="/social-media" className={getNavLinkClass('social-media')} onClick={toggleMobileMenu}>
                Social Media
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
