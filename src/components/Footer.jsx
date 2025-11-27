import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Ministries', href: '/ministries' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
    { name: 'Give', href: '/give' },
  ];

  const ministries = [
    { name: 'Children', href: '/ministries' },
    { name: 'Youth', href: '/ministries' },
    { name: 'Small Groups', href: '/ministries' },
    { name: 'Prayer', href: '/ministries' },
  ];

  return (
    <footer className="bg-[#00A0C6] text-white relative overflow-hidden">
      {/* Ocean wave pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="currentColor" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Mount Soledad<br />Presbyterian Church
            </h3>
            <p className="text-blue-100 mb-2 leading-relaxed italic">
              Rooted in grace, Moved to mission, Open hearted to all
            </p>
            <p className="text-blue-100/80 text-sm mb-6">
              No matter who you are, where you've been, or what you've done, you are God's beloved.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/mountsoledadchurch/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/mtsoledadpres/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@mountsoledadpresbyterianchurch"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-blue-100 hover:text-cyan-300 transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ministries</h3>
            <ul className="space-y-2">
              {ministries.map((ministry, index) => (
                <li key={index}>
                  <Link
                    to={ministry.href}
                    className="text-blue-100 hover:text-cyan-300 transition-colors duration-300 inline-block"
                  >
                    {ministry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Times</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-cyan-300">Discovery Bible Study</p>
                <p className="text-blue-100">Sundays, 9:00 AM</p>
              </div>
              <div>
                <p className="font-semibold text-cyan-300">Sunday Worship</p>
                <p className="text-blue-100">Sundays, 10:00 AM</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-blue-100">
                  6551 Soledad Mountain Rd.<br />
                  La Jolla, CA 92037
                </p>
                <p className="text-sm text-blue-100 mt-2">
                  (858) 459-3865
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-center">Find Us</h3>
          <div className="text-center mb-4">
            <p className="text-lg text-blue-100">6551 Soledad Mountain Rd, La Jolla, CA 92037</p>
            <a href="tel:8584593865" className="text-xl font-bold text-cyan-300 hover:text-white transition-colors">
              (858) 459-3865
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.8!2d-117.2459!3d32.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc01e5e5555555%3A0x5555555555555555!2s6551%20Soledad%20Mountain%20Rd%2C%20La%20Jolla%2C%20CA%2092037!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mount Soledad Presbyterian Church Location"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-100 text-sm">
              &copy; {currentYear} Mount Soledad Presbyterian Church. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-100 hover:text-cyan-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-100 hover:text-cyan-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
