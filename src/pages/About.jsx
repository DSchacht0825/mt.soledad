import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedStaff, setSelectedStaff] = useState(null);

  const staffMembers = [
    {
      name: 'Markus',
      role: 'Lead Pastor',
      image: '/Markus.jpg',
      bio: 'Markus has been serving as Lead Pastor at Mount Soledad Presbyterian Church, bringing a passion for biblical teaching and shepherding the congregation. His heart is to help people encounter the transforming love of Jesus and grow as disciples.',
    },
    {
      name: 'Derek',
      role: 'Worship Director',
      image: '/Derek.jpg',
      bio: 'Derek leads our worship ministry with a heart for creating meaningful worship experiences. He is passionate about helping the congregation connect with God through music and creating space for authentic worship.',
    },
    {
      name: 'Carl',
      role: "Children's Director",
      image: '/Carl.jpg',
      bio: 'Carl oversees our children\'s ministry programs, including Kingdom Kids. He is dedicated to helping children discover God\'s love through engaging Bible stories, creative activities, and meaningful relationships.',
    },
    {
      name: 'Krista',
      role: 'Administrator',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
      bio: 'Krista serves as our church administrator, ensuring the smooth operation of our ministry. She coordinates events, manages communications, and supports the staff and congregation with care and efficiency.',
    },
  ];

  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      title: 'Be Accepted',
      description: 'Join a welcoming community of believers who are following Jesus and making a difference in the world',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
      title: 'Experience God',
      description: "Encounter God's holiness and love through authentic worship and heartfelt praise",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-500',
      title: 'Grow Spiritually',
      description: 'Deepen your faith through clear, practical teaching rooted in Scripture',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-orange-500 to-amber-500',
      title: 'Family Focused',
      description: "Engage your whole family with ministries where children and teens are loved and taught God's Word",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: 'from-red-500 to-rose-500',
      title: 'Share Compassion',
      description: 'Serve alongside others as we extend Christian compassion to those in need',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: 'from-indigo-500 to-blue-500',
      title: 'Find Support',
      description: "Access resources, prayer, and guidance to navigate life's challenges with faith",
    },
  ];

  const beliefs = [
    {
      title: 'The Bible',
      description: 'We believe the Bible is the inspired, authoritative Word of God, providing guidance for faith and life.',
    },
    {
      title: 'The Trinity',
      description: 'We worship one God in three persons: Father, Son, and Holy Spirit.',
    },
    {
      title: 'Salvation',
      description: 'We believe salvation is a gift of grace through faith in Jesus Christ alone.',
    },
    {
      title: 'The Church',
      description: 'We are called to be a community of believers, gathering for worship, fellowship, and service.',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Discover who we are, what we believe, and what you can expect when you visit
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Mission
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-primary-light mb-8 italic">
            Rooted in grace, Moved to mission, Open hearted to all
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are a welcoming and inclusive community, centered in God's grace. We extend Jesus's love,
            acceptance, and compassion to everyone. No matter who you are, where you've been, or what
            you've done, you are God's beloved.
          </p>
        </motion.div>
      </section>

      {/* Our Values */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Values
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">
              A Welcoming Community
            </h3>
            <p className="text-gray-600 leading-relaxed text-center">
              We gather in worship and serve together as an encouraging, generous, multigenerational community.
              We welcome all who are curious and open to Christ's love, whatever your life circumstances or spiritual background.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">
              Spiritual Growth
            </h3>
            <p className="text-gray-600 leading-relaxed text-center">
              We are called by God to grow in faith as disciples of Jesus through worship, fellowship, study, and prayer.
              We emphasize humility, reflection, and contemplation to nurture empathy and a profound sense of connection with God and all of humanity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">
              Christ-Centered Mentorship
            </h3>
            <p className="text-gray-600 leading-relaxed text-center">
              We invest in meaningful relationships with young people, providing guidance and encouragement to live
              authentically and faithfully through an enduring personal relationship with Jesus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team serving our church family
          </p>
        </motion.div>

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
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-1">{staff.name}</h3>
                <p className="text-gray-600 mb-4">{staff.role}</p>
                <motion.button
                  onClick={() => setSelectedStaff(staff)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors"
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
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={selectedStaff.image}
                  alt={selectedStaff.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
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

      {/* What to Expect Section */}
      <section className="section-container bg-gray-50" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What to Expect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When you join us on Sundays, here's what you'll experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Beliefs Section */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Beliefs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a Presbyterian church, we hold to historic Christian beliefs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-3">
                {belief.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {belief.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Family Ministry Section */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
            Family Ministry Options
          </h2>
          <p className="text-xl text-center text-primary-light mb-8 font-semibold">
            We love kids and families!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                For Infants & Parents
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Infants are always welcome in our worship service. We also offer a
                parent/infant room at the back of the sanctuary where you can view
                and listen to the service in a comfortable, private setting.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-accent-light/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Kingdom Kids (Ages 3-5th Grade)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Children enjoy engaging Bible stories, creative crafts, and worship
                through song. Sign in your child in the lobby, and they'll head to
                their classroom after the opening worship.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-light/10 to-primary/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Mount Soledad Youth
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our middle and high school ministry, led by Carl Ogden, provides a
                dynamic environment where teens can build friendships, ask questions,
                and grow in their faith journey.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Online Worship
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Can't make it in person? We livestream our services every Sunday on
                YouTube. You can also watch previous sermons and messages anytime.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Plan Your First Visit
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Visit?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We'd love to welcome you this Sunday! Join us for worship at 10:00 AM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-gray-900 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-accent-dark transition-all duration-300"
              >
                Get Directions
              </motion.button>
            </Link>
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-primary-dark transition-all duration-300"
              >
                View Events
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
