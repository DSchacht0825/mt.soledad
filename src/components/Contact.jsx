import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import LazyMap from './LazyMap';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      details: ['6551 Soledad Mountain Rd.', 'La Jolla, CA 92037'],
      link: 'https://maps.google.com/?q=6551+Soledad+Mountain+Rd+La+Jolla+CA+92037',
      linkText: 'Get Directions',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      details: ['(858) 459-3865'],
      link: 'tel:8584593865',
      linkText: 'Call Us',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: ['info@mountsoledad.org'],
      link: 'mailto:info@mountsoledad.org',
      linkText: 'Email Us',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Service Times',
      details: ['Discovery Bible Study: 9:00 AM', 'Sunday Worship: 10:00 AM'],
      link: '#events',
      linkText: 'View All Events',
    },
  ];

  return (
    <section id="contact" className="section-container bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Contact Us
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We'd love to hear from you. Come visit us or get in touch!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card p-6 text-center hover:scale-105"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {item.title}
            </h3>
            {item.details.map((detail, i) => (
              <p key={i} className="text-gray-600 mb-1">
                {detail}
              </p>
            ))}
            <a
              href={item.link}
              className="inline-block mt-4 text-primary font-semibold hover:text-primary-light transition-colors"
            >
              {item.linkText} →
            </a>
          </motion.div>
        ))}
      </div>

      {/* Map placeholder and giving section */}
      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card overflow-hidden"
        >
          <LazyMap height={384} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          id="give"
          className="card p-8 bg-gradient-to-br from-primary to-primary-light text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Online Giving</h3>
          <p className="text-lg mb-6 opacity-90">
            Thank you for your generosity! Your gifts help us continue our
            mission to invite, equip, and send for more people to experience
            life-transforming relationships with Jesus.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure online donations</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>One-time or recurring gifts</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Tax-deductible contributions</span>
            </li>
          </ul>
          <motion.a
            href="https://mountsoledadchurch.churchcenter.com/giving"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block w-full px-8 py-4 bg-accent text-gray-900 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-accent-dark transition-all duration-300 text-center"
          >
            Give Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
