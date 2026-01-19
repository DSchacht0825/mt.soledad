import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SEO from '../components/SEO';

const Leadership = () => {
  const [selectedStaff, setSelectedStaff] = useState(null);

  const staffMembers = [
    {
      name: 'Rev. Dr. Markus Watson',
      role: 'Interim Pastor',
      image: '/Markus.jpg',
      bio: 'Rev. Dr. Markus Watson has served in ministry for over 25 years and joined Mount Soledad Presbyterian Church as interim pastor in 2022. He holds a Doctor of Ministry with a focus on missional leadership from Fuller Theological Seminary and brings a deep commitment to helping people and churches discover how God is inviting them to join in God\'s mission. Markus is the host of the Spiritual Life and Leadership podcast and author of Beyond Thingification: Helping Your Church Engage in God\'s Mission, both of which reflect his passion for helping ministry leaders cultivate healthy inner lives for the sake of God\'s mission. When he\'s not preaching or writing, you\'ll likely find him near the ocean—one of the perks of ministry in San Diego. Markus and his wife Robin have three children—two in college and one at home—and he\'s a lifelong Star Wars fan who maintains that the only Star Wars he\'ll ever need is the original trilogy (even though some of the new stuff is actually pretty good).',
    },
    {
      name: 'Derek',
      role: 'Worship Director',
      image: '/Derek.jpg',
      bio: 'Derek leads our worship ministry with a heart for creating meaningful worship experiences. He is passionate about helping the congregation connect with God through music and creating space for authentic worship.',
    },
    {
      name: 'Carl',
      role: 'Christian Education Director',
      image: '/Carl.jpg',
      bio: 'Carl works bi-vocationally, spending his days as an electrical engineer and his evenings and weekends at Mount Soledad. He has a passion for connecting with young people and showing them the beauty of the Christian faith. He completed a master\'s degree in Ministry Leadership at Wheaton College in 2024. He and his wife Christy have two adult sons. One is married and lives in Chicago. The other lives in Del Mar and works as an ER nurse.',
    },
    {
      name: 'Krista',
      role: 'Church Administrator',
      image: null,
      bio: 'Krista serves as our church administrator, ensuring the smooth operation of our ministry. She coordinates events, manages communications, and supports the staff and congregation with care and efficiency.',
    },
  ];

  return (
    <>
      <SEO
        title="Leadership | Meet Our Team | Mount Soledad Presbyterian Church"
        description="Meet the dedicated leadership team at Mount Soledad Presbyterian Church in La Jolla, San Diego. Learn about our pastors and staff who serve our congregation."
        canonical="https://www.mountsoledad.org/leadership"
      />

      {/* Page Hero */}
      <section className="relative py-32 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/mt.soledad.jpg')" }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="section-container text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Leadership
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Meet the dedicated team serving our church family
          </motion.p>
        </div>
      </section>

      {/* Staff Section */}
      <section className="section-container bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {staffMembers.map((staff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden">
                {staff.image ? (
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col items-center justify-center">
                    <svg className="w-20 h-20 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-gray-500 text-sm font-medium">Photo Coming Soon</p>
                  </div>
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-1">{staff.name}</h3>
                <p className="text-gray-600 mb-4">{staff.role}</p>
                <motion.button
                  onClick={() => setSelectedStaff(staff)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
                >
                  View Bio
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedStaff && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStaff(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-64 flex-shrink-0 overflow-hidden">
                {selectedStaff.image ? (
                  <img
                    src={selectedStaff.image}
                    alt={selectedStaff.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col items-center justify-center">
                    <svg className="w-24 h-24 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-gray-500 font-medium">Photo Coming Soon</p>
                  </div>
                )}
              </div>
              <div className="p-6 overflow-y-auto">
                <h3 className="text-2xl font-bold text-primary mb-1">{selectedStaff.name}</h3>
                <p className="text-primary-light font-semibold mb-4">{selectedStaff.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{selectedStaff.bio}</p>
                <motion.button
                  onClick={() => setSelectedStaff(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Leadership;
