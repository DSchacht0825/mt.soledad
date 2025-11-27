import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: '🤝',
      title: 'Be Accepted',
      description: 'By a community of people who are following Jesus & changing the world',
    },
    {
      icon: '🙏',
      title: 'Experience God',
      description: "God's holiness & love through worshiping Him",
    },
    {
      icon: '📖',
      title: 'Grow Spiritually',
      description: 'Stronger through clear teaching from the Bible',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Focused',
      description: "Know that your kids and teenagers are loved & taught God's Word",
    },
    {
      icon: '❤️',
      title: 'Share Compassion',
      description: 'Christian compassion with those in need',
    },
    {
      icon: '💪',
      title: 'Get Resources',
      description: 'The resources you need to meet the challenges of life',
    },
  ];

  return (
    <section id="about" className="section-container bg-gray-50" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Sundays at Mt. Soledad
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Here at Mount Soledad you will...
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card p-8 text-center hover:scale-105"
          >
            <div className="text-6xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Parent Options Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12"
      >
        <h3 className="text-3xl font-bold text-primary mb-6 text-center">
          Parent Options at Mt. Soledad
        </h3>
        <p className="text-xl text-center text-primary-light mb-8 font-semibold">
          We love kids!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-xl p-6">
            <h4 className="text-xl font-bold text-primary mb-3">
              For Infants & Parents
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Infants are always welcome in the service. We also have a
              parent/infant room at the back of the sanctuary where you can view
              and listen to the worship and message.
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent/20 to-accent-light/20 rounded-xl p-6">
            <h4 className="text-xl font-bold text-primary mb-3">
              Kingdom Kids (Ages 3-5th Grade)
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Children experience Kingdom Kids with Bible stories, crafts, and
              songs. You can sign in your child in the lobby, and they'll head
              down to the preschool after worship.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-light/10 to-primary/10 rounded-xl p-6">
            <h4 className="text-xl font-bold text-primary mb-3">
              Mount Soledad Youth
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Our youth group for middle and high schoolers is led by Carl Ogden.
              A dynamic program designed to help teenagers grow in their faith.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-6">
            <h4 className="text-xl font-bold text-primary mb-3">
              Live Streaming
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Can't make it in person? We stream live every Sunday on our YouTube
              channel. You can also watch previous sermons anytime.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block"
          >
            Plan Your Visit
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
