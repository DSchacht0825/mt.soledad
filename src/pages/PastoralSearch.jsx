import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PastoralSearch = () => {
  const committeeMembers = [
    { name: 'Debby Dang', role: 'Chair' },
    { name: 'Carol Sullivan', role: 'Co-Chair' },
    { name: 'Kathleen Amaya', role: 'Committee Member' },
    { name: 'Amanda Dahlgren', role: 'Committee Member' },
    { name: 'Colleen Kelly', role: 'Committee Member' },
  ];

  return (
    <>
      <SEO
        title="Pastoral Search | Mount Soledad Presbyterian Church"
        description="Learn about Mount Soledad Presbyterian Church's pastoral search process and meet our Pastor Nominating Committee."
        canonical="https://www.mountsoledad.org/pastoral-search"
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
            Pastoral Search
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Join us in prayer as we seek God's guidance for our next pastor
          </motion.p>
        </div>
      </section>

      {/* Committee Update */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Committee Update
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-6">
                The Pastor Nominating Committee (PNC) had 2 members drop out due to prior
                commitments so the congregation approved an additional member, Carol Sullivan, to the PNC.
              </p>
              <p className="leading-relaxed mb-6">
                The salary range for the Pastor position is being determined by the finance committee
                and will be included in the congregation's approval of the budget.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Committee Section */}
      <section className="section-container bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Pastor Nominating Committee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated team leading our pastoral search
            </p>
          </motion.div>

          {/* Leadership Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {committeeMembers.slice(0, 2).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #00527A, #2B81AB)' }}>
                  <span className="text-3xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-lg text-accent font-semibold text-center">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Member Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {committeeMembers.slice(2).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-2 border-primary/20">
                  <span className="text-xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-1 text-center">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-center">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Process */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Our Search Process
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-6">
                We have completed the MDP (job description) in accordance with the information
                gleaned from the Mission Study and input from the members of the PNC. We are
                currently working on the narrative questions that will be included in the job description.
              </p>
              <div className="flex justify-center my-8">
                <a
                  href="/2025_Final MSPC_MissionStudy.pdf"
                  download
                  className="inline-flex items-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download 2025 Mission Study (PDF)
                </a>
              </div>
              <p className="leading-relaxed mb-6">
                Once those are complete they will be sent to Session along with the MDP to be
                approved then posted on the Presbytery website. Once it is posted, potential candidate
                matches will be reviewed by the PNC and those who are determined to potentially be a
                good fit will go through an interview process.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership Call */}
      <section className="section-container bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-accent"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Your Vote Matters</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The final candidate's call to serve at MSPC will need to be approved by a vote by
              church membership. Please consider becoming a member through the next membership class
              in order to be able to participate in that vote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prayer Request */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 to-primary-light/10 rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #00527A, #2B81AB)' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Please Pray With Us</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Please pray for the PNC to be guided by God as they walk through this process.
              Pray for discernment and wisdom as we put together the materials that will lead us
              to the next pastor for MSPC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-container text-white" style={{ background: 'linear-gradient(to right, #00527A, #2B81AB)' }}>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Questions About Our Search?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We'd be happy to answer any questions you have about our pastoral search process.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-gray-900 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-accent-dark transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PastoralSearch;
