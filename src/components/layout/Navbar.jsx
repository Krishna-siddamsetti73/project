import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Medical Tourism', path: '/medical-tourism' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-around items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.img
            src="src\components\pics\make a move logo without tagline.png"
            alt="Make a Move Logo"
            initial={{ opacity: 0, x: -20}}
            animate={{ opacity: 1, x: 0}}
            transition={{ duration: 0.5}}
            className="h-20 w-20 object-contain"
          />
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            <span className={`font-serif ${scrolled ? 'text-red-500' : 'text-white text-shadow'}`}>
              Make a Move
            </span>
          </motion.div> */}
        </Link>

        {/* Desktop Navigation */}
        <motion.ul 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-8"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === link.path 
                    ? 'text-secondary-500' 
                    : scrolled 
                      ? 'text-neutral-800 hover:text-primary-500' 
                      : 'text-white hover:text-accent-500 text-shadow'
                }`}
              >
                {link.name}
                
              </Link>
            </li>
          ))}
           <Link to="/" className="flex items-center space-x-2">
          <div className="h-15 w-15 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            {/* Placeholder content, e.g., initials or icon */}
             <motion.img
            src="src\components\pics\profile.png"
            alt="Profile"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-10 w-10 rounded-full object-contain"
          />
          </div>
         
        </Link>
        </motion.ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className={`p-2 focus:outline-none ${
              scrolled ? 'text-neutral-800' : 'text-white'
            }`}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          display: isOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white shadow-lg overflow-hidden"
      >
        <ul className="container mx-auto px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path}
                className={`block py-2 font-medium transition-colors duration-300 ${
                  location.pathname === link.path 
                    ? 'text-secondary-500' 
                    : 'text-neutral-800 hover:text-primary-500'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
};

export default Navbar;