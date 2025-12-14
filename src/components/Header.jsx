import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// Set to false to show full navigation when ready for full launch
const SOFT_LAUNCH = true;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Ministries', path: '/ministries' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-white/95 backdrop-blur-sm py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="Mount Soledad Presbyterian Church"
                className="h-12 md:h-16 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          {!SOFT_LAUNCH && (
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-gray-700 hover:text-primary font-medium transition-colors duration-300 relative group ${
                      isActive ? 'text-primary' : ''
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </>
                  )}
                </NavLink>
              ))}
              <Link to="/give">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Give
                </motion.button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          {!SOFT_LAUNCH && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {!SOFT_LAUNCH && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg px-4 transition-colors duration-300 ${
                    isActive ? 'text-primary bg-gray-50' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/give"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full text-center block mt-3"
            >
              Give
            </Link>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
