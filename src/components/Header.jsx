import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Set to false to show full navigation when ready for full launch
const SOFT_LAUNCH = false;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'Leadership', path: '/leadership' },
        { name: 'Sermons', path: 'https://www.youtube.com/playlist?list=PLQOYCKRqz75Ca-QHE34xs2OGe7vWujHkp', external: true },
        { name: 'Pastoral Search', path: '/pastoral-search' },
        { name: 'Why We Give', path: '/why-we-give' },
      ]
    },
    { name: 'Ministries', path: '/ministries' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  const isAboutActive = location.pathname === '/about' || location.pathname === '/leadership' || location.pathname === '/pastoral-search' || location.pathname === '/why-we-give';

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
          <div className="hidden md:flex items-center space-x-8" ref={dropdownRef}>
            {!SOFT_LAUNCH && navLinks.map((link) => (
              link.dropdown ? (
                // Dropdown menu item
                <div key={link.name} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                    className={`text-gray-700 hover:text-primary font-medium transition-colors duration-300 relative group flex items-center gap-1 ${
                      isAboutActive ? 'text-primary' : ''
                    }`}
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isAboutActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </button>

                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                      >
                        {link.dropdown.map((subLink) => (
                          subLink.external ? (
                            <a
                              key={subLink.name}
                              href={subLink.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
                            >
                              {subLink.name}
                            </a>
                          ) : (
                            <NavLink
                              key={subLink.name}
                              to={subLink.path}
                              onClick={() => setOpenDropdown(null)}
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 ${
                                  isActive ? 'text-primary bg-gray-50' : ''
                                }`
                              }
                            >
                              {subLink.name}
                            </NavLink>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                // Regular menu item
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
              )
            ))}
            <a href="https://mountsoledadchurch.churchcenter.com/giving" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Give
              </motion.button>
            </a>
          </div>

          {/* Mobile Give Button (soft launch) or Menu Button (full launch) */}
          {SOFT_LAUNCH ? (
            <a href="https://mountsoledadchurch.churchcenter.com/giving" target="_blank" rel="noopener noreferrer" className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Give
              </motion.button>
            </a>
          ) : (
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
              link.dropdown ? (
                // Mobile dropdown
                <div key={link.name}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                    className={`w-full flex justify-between items-center py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg px-4 transition-colors duration-300 ${
                      isAboutActive ? 'text-primary bg-gray-50' : ''
                    }`}
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4"
                      >
                        {link.dropdown.map((subLink) => (
                          subLink.external ? (
                            <a
                              key={subLink.name}
                              href={subLink.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg px-4 transition-colors duration-300"
                            >
                              {subLink.name}
                            </a>
                          ) : (
                            <NavLink
                              key={subLink.name}
                              to={subLink.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={({ isActive }) =>
                                `block py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg px-4 transition-colors duration-300 ${
                                  isActive ? 'text-primary bg-gray-50' : ''
                                }`
                              }
                            >
                              {subLink.name}
                            </NavLink>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
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
              )
            ))}
            <a
              href="https://mountsoledadchurch.churchcenter.com/giving"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full text-center block mt-3"
            >
              Give
            </a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
