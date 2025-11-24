import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-light/85 to-primary/90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073"
          alt="Church Community"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 section-container text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to<br />
            Mount Soledad Presbyterian
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We are here to invite, equip and send for more people to experience
            life-transforming relationships with Jesus!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-gray-900 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-accent-dark"
            >
              Learn More
            </motion.a>
            <motion.a
              href="#events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 shadow-xl"
            >
              Upcoming Events
            </motion.a>
          </motion.div>

          {/* Service Time */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-16 inline-block bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20"
          >
            <p className="text-sm uppercase tracking-wide mb-2 text-accent-light">
              Join Us for Worship
            </p>
            <p className="text-3xl font-bold">Sundays at 10:00 AM</p>
            <p className="text-sm mt-2 text-gray-100">
              6551 Soledad Mountain Rd., La Jolla, CA
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-white rounded-full mt-2"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
