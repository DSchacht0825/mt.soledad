import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Ministries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const ministries = [
    {
      title: 'Children',
      subtitle: 'Kingdom Kids',
      description:
        'A fun and engaging program for ages 3-5th grade featuring Bible stories, crafts, music, and activities that help children grow in their faith.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1886',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Youth',
      subtitle: 'Mount Soledad Youth',
      description:
        'Our middle and high school ministry, led by Carl Ogden, creates a space where teenagers can build authentic friendships and grow in their relationship with Christ.',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Small Groups',
      subtitle: 'Connect & Grow',
      description:
        'Join a small group to build meaningful relationships, study God\'s Word together, and support one another in faith and life.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070',
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Prayer',
      subtitle: 'Pray Together',
      description:
        'Our prayer ministry meets weekly to intercede for our church family, community, and world. Join us in seeking God\'s will through prayer.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="ministries" className="section-container bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Our Ministries
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover opportunities to connect, grow, and serve
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ministries.map((ministry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="card group"
          >
            <div className="relative h-64 overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${ministry.color} opacity-60 z-10 group-hover:opacity-70 transition-opacity duration-300`}
              ></div>
              <img
                src={ministry.image}
                alt={ministry.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-1">{ministry.title}</h3>
                <p className="text-lg font-semibold opacity-90">
                  {ministry.subtitle}
                </p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                {ministry.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                className="text-primary font-semibold inline-flex items-center group-hover:text-primary-light transition-colors"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 text-center rounded-2xl p-12 text-white"
        style={{ background: 'linear-gradient(to right, #00527A, #2B81AB)' }}
      >
        <h3 className="text-3xl font-bold mb-4">
          Ready to Get Involved?
        </h3>
        <p className="text-xl mb-8 opacity-90">
          We'd love to help you find the perfect ministry to connect with
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-accent text-gray-900 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-accent-dark transition-all duration-300"
        >
          Contact Us
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Ministries;
