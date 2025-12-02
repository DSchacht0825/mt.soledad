import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Ministries = () => {

  const ministries = [
    {
      title: 'Children',
      subtitle: 'Kingdom Kids',
      description:
        "Our children's ministry provides a fun, engaging environment where kids ages 3 through 5th grade discover God's love through Bible stories, creative crafts, worship songs, and meaningful activities. Each week, our dedicated volunteers create age-appropriate lessons that help children build a strong foundation of faith.",
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1886',
      color: 'from-blue-500 to-cyan-500',
      schedule: 'Sundays during worship (after opening)',
      location: 'Preschool Building',
    },
    {
      title: 'Youth',
      subtitle: 'Mount Soledad Youth',
      description:
        'Mount Soledad Youth is our middle and high school ministry led by Carl Ogden. We create a safe, welcoming space where teenagers can ask tough questions, build authentic friendships, serve together, and experience God in powerful ways. Through weekly gatherings, special events, and service projects, we help students navigate their faith journey.',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070',
      color: 'from-purple-500 to-pink-500',
      schedule: 'Check calendar for current schedule',
      location: 'Youth Room',
    },
    {
      title: 'Small Groups',
      subtitle: 'Life Together',
      description:
        "Small groups are where church becomes family. Join a group to study Scripture together, pray for one another, celebrate life's joys, and support each other through challenges. Our groups meet throughout the week in various locations, making it easy to find one that fits your schedule and life stage.",
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070',
      color: 'from-amber-500 to-orange-500',
      schedule: 'Various times throughout the week',
      location: 'Multiple locations',
    },
    {
      title: 'Prayer Ministry',
      subtitle: 'Interceding Together',
      description:
        "Our prayer team meets regularly to lift up our church family, community, and world in prayer. Whether you're looking for prayer support or want to join us in interceding for others, this ministry provides a powerful opportunity to see God work through prayer. We also offer confidential prayer after services.",
      image: '/prayer.jpg',
      color: 'from-green-500 to-emerald-500',
      schedule: 'Wednesdays 6:00 PM - 8:00 PM',
      location: 'Youth Room',
    },
  ];

  return (
    <>
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
            Our Ministries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Discover opportunities to connect, grow, and serve in community
          </motion.p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="section-container bg-white">
        <div className="space-y-16">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="card group overflow-hidden">
                  <div className="relative h-96 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${ministry.color} opacity-60 z-10 group-hover:opacity-70 transition-opacity duration-300`}
                    ></div>
                    <img
                      src={ministry.image}
                      alt={ministry.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white">
                      <h3 className="text-4xl font-bold mb-2">{ministry.title}</h3>
                      <p className="text-xl font-semibold opacity-90">
                        {ministry.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {ministry.description}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">When:</p>
                      <p className="text-gray-600">{ministry.schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Where:</p>
                      <p className="text-gray-600">{ministry.location}</p>
                    </div>
                  </div>
                </div>
                <Link to="/contact">
                  <button className="btn-primary hover:scale-105 transition-transform duration-200">
                    Get Involved
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-container bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Find Your Place to Serve
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Every ministry needs volunteers who are passionate about making a
            difference. Whether you're great with kids, love to pray, or want to
            build community, there's a place for you.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-accent text-gray-900 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-accent-dark hover:scale-105 transition-all duration-300">
              Contact Us to Learn More
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Ministries;
