import { motion } from 'framer-motion';

const Give = () => {

  const givingOptions = [
    {
      icon: '💳',
      title: 'Online Giving',
      description: 'Give securely online with your credit card, debit card, or bank account. Set up one-time or recurring gifts.',
      features: ['Secure & encrypted', 'Recurring options', 'Instant confirmation'],
    },
    {
      icon: '📧',
      title: 'Mail a Check',
      description: 'Send your check made payable to Mount Soledad Presbyterian Church to: 6551 Soledad Mountain Rd., La Jolla, CA 92037',
      features: ['Tax-deductible', 'Traditional method', 'Secure processing'],
    },
    {
      icon: '🏛️',
      title: 'Give In Person',
      description: 'Place your offering in the collection during Sunday worship service or drop it off at the church office.',
      features: ['During service', 'Office hours', 'Personal touch'],
    },
  ];

  const impactAreas = [
    {
      title: 'Worship & Teaching',
      description: 'Support our weekly worship services, biblical teaching, and pastoral care for our congregation.',
      icon: '🙏',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Children & Youth',
      description: 'Invest in the next generation through Kingdom Kids, Mount Soledad Youth ministry, and family programs.',
      icon: '👨‍👩‍👧‍👦',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Missions & Outreach',
      description: "Extend Christ's love locally and globally through mission work and community outreach programs.",
      icon: '🌍',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Facility & Operations',
      description: 'Maintain our building and grounds as a welcoming space for worship, fellowship, and community service.',
      icon: '⛪',
      color: 'from-amber-500 to-orange-500',
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
            Give
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Thank you for your generosity in supporting our mission to invite, equip,
            and send for more people to experience life-transforming relationships with Jesus
          </motion.p>
        </div>
      </section>

      {/* Why Give Section */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Why We Give
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Giving is an act of worship and obedience to God. When we give, we acknowledge
            that everything we have comes from Him, and we participate in His work of
            transforming lives and communities.
          </p>
          <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8">
            <p className="text-xl italic text-gray-800">
              "Each of you should give what you have decided in your heart to give, not
              reluctantly or under compulsion, for God loves a cheerful giver."
            </p>
            <p className="text-primary font-semibold mt-3">— 2 Corinthians 9:7</p>
          </div>
        </div>

        {/* Impact Areas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">
            Your Impact
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="card overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${area.color}`}></div>
                <div className="p-6">
                  <div className="text-5xl mb-4">{area.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    {area.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giving Options */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Ways to Give
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the giving method that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {givingOptions.map((option, index) => (
            <div
              key={index}
              className="card p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-6xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {option.description}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Online Giving Section */}
      <section className="section-container bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="card p-8 bg-gradient-to-br from-primary to-primary-light text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Give Online Now
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Your secure online gift helps us continue our mission and ministry
            </p>
            <ul className="space-y-3 mb-8 text-left max-w-md mx-auto">
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure, encrypted transactions</span>
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
            <a
              href="https://mountsoledadchurch.churchcenter.com/giving"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-accent text-gray-900 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-accent-dark hover:scale-105 transition-all duration-300"
            >
              Give Securely Online
            </a>
          </div>
        </div>
      </section>

      {/* Mailing Address */}
      <section className="section-container bg-gray-50">
        <div className="max-w-2xl mx-auto text-center card p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Mail Your Gift
          </h3>
          <p className="text-gray-700 mb-4">
            Make checks payable to <strong>Mount Soledad Presbyterian Church</strong>
          </p>
          <div className="bg-gray-50 rounded-lg p-6 inline-block">
            <p className="text-gray-800 font-semibold">
              Mount Soledad Presbyterian Church<br />
              6551 Soledad Mountain Rd.<br />
              La Jolla, CA 92037
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Questions About Giving
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Are my gifts tax-deductible?
              </h4>
              <p className="text-gray-700">
                Yes! Mount Soledad Presbyterian Church is a 501(c)(3) organization. All
                donations are tax-deductible to the extent allowed by law. You'll
                receive a year-end giving statement for your records.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Is online giving secure?
              </h4>
              <p className="text-gray-700">
                Absolutely. We use industry-standard encryption and security measures to
                protect your financial information. Your data is never stored on our
                servers.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Can I give to a specific ministry?
              </h4>
              <p className="text-gray-700">
                Yes! When giving online or by check, you can designate your gift to
                specific ministries like children's ministry, youth programs, missions,
                or building fund.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Give;
