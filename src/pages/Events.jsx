import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SEO from '../components/SEO';

const Events = () => {
  const [date, setDate] = useState(new Date());

  // Map day names to day numbers (0 = Sunday, 1 = Monday, etc.)
  const dayMap = {
    'Sunday': 0,
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6,
  };

  const upcomingEvents = [
    {
      title: "Men's Bible Study",
      day: 'Saturday',
      dayNum: 6,
      time: '8:00 AM',
      location: 'Fellowship Hall',
      recurring: 'Weekly',
      color: 'bg-indigo-500',
      description: 'Men gather for fellowship, coffee, and in-depth Bible study. All men are welcome!',
    },
    {
      title: 'Discovery Bible Study',
      day: 'Sunday',
      dayNum: 0,
      time: '9:00 AM - 9:50 AM',
      location: 'Worship Center',
      recurring: 'Weekly',
      color: 'bg-blue-500',
      description: 'Join us for an in-depth study of Scripture before our worship service. A great way to start your Sunday!',
    },
    {
      title: 'Sunday Worship Service',
      day: 'Sunday',
      dayNum: 0,
      time: '10:00 AM - 11:00 AM',
      location: 'Main Sanctuary',
      recurring: 'Weekly',
      color: 'bg-primary',
      description: 'Our main worship service featuring contemporary worship, biblical teaching, and community.',
    },
    {
      title: 'Monday Night Small Group',
      day: 'Monday',
      dayNum: 1,
      time: '5:30 PM - 7:00 PM',
      location: 'Sunset Room',
      recurring: 'Weekly',
      color: 'bg-amber-500',
      description: 'Connect with others in community, share life together, and grow in faith through discussion and prayer.',
    },
    {
      title: 'Prayer Group',
      day: 'Wednesday',
      dayNum: 3,
      time: '6:00 PM - 8:00 PM',
      location: 'Youth Room',
      recurring: 'Weekly',
      color: 'bg-green-500',
      description: 'Gather with others to intercede for our church, community, and world. All are welcome!',
    },
  ];

  // Get events for selected date
  const getEventsForDate = (selectedDate) => {
    const dayOfWeek = selectedDate.getDay();
    return upcomingEvents.filter(event => event.dayNum === dayOfWeek);
  };

  const selectedDateEvents = getEventsForDate(date);

  // Check if a date has events (for calendar tile styling)
  const tileClassName = ({ date: tileDate, view }) => {
    if (view === 'month') {
      const dayOfWeek = tileDate.getDay();
      const hasEvents = upcomingEvents.some(event => event.dayNum === dayOfWeek);
      if (hasEvents) {
        return 'has-events';
      }
    }
    return null;
  };

  return (
    <>
      <SEO
        title="Events & Service Times | Mount Soledad Presbyterian Church"
        description="View upcoming events and Sunday service times at Mount Soledad Presbyterian Church in La Jolla. Sunday worship at 10 AM, Bible study, prayer meetings, and community gatherings throughout the week."
        canonical="https://www.mountsoledad.org/events"
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
            Events & Calendar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Join us for worship, fellowship, and opportunities to grow
          </motion.p>
        </div>
      </section>

      {/* Calendar and Events Section */}
      <section className="section-container bg-gradient-to-b from-gray-50 to-white">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Calendar */}
          <div className="card p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">Calendar</h2>
            <div className="calendar-container">
              <style>{`
                .react-calendar {
                  width: 100%;
                  border: none;
                  font-family: inherit;
                  line-height: 1.5em;
                }
                .react-calendar__tile {
                  padding: 1.2em 0.5em;
                  border-radius: 0.5rem;
                  transition: all 0.3s ease;
                }
                .react-calendar__tile:enabled:hover,
                .react-calendar__tile:enabled:focus {
                  background-color: #2B81AB;
                  color: white;
                }
                .react-calendar__tile--now {
                  background: #FEE59A;
                  font-weight: bold;
                }
                .react-calendar__tile--active {
                  background: #00527A !important;
                  color: white;
                }
                .react-calendar__navigation button {
                  font-size: 1.2em;
                  padding: 0.8em;
                  font-weight: bold;
                  color: #00527A;
                }
                .react-calendar__navigation button:enabled:hover,
                .react-calendar__navigation button:enabled:focus {
                  background-color: #2B81AB;
                  color: white;
                  border-radius: 0.5rem;
                }
                .react-calendar__month-view__weekdays {
                  font-weight: bold;
                  color: #00527A;
                  text-transform: uppercase;
                  font-size: 0.9em;
                }
                .react-calendar__tile.has-events {
                  position: relative;
                }
                .react-calendar__tile.has-events::after {
                  content: '';
                  position: absolute;
                  bottom: 6px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 6px;
                  height: 6px;
                  background-color: #00527A;
                  border-radius: 50%;
                }
                .react-calendar__tile--active.has-events::after {
                  background-color: #FEE59A;
                }
              `}</style>
              <Calendar
                onChange={setDate}
                value={date}
                tileClassName={tileClassName}
              />
            </div>
          </div>

          {/* Selected Date Info */}
          <div className="card p-8 bg-gradient-to-br from-primary/5 to-primary-light/5">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {date.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
              })}
            </h3>

            <AnimatePresence mode="wait">
              {selectedDateEvents.length > 0 ? (
                <motion.div
                  key={date.toDateString()}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {selectedDateEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-4 shadow-md border-l-4"
                      style={{ borderColor: event.color.replace('bg-', '').includes('primary') ? '#00527A' : undefined }}
                    >
                      <div className={`w-3 h-3 ${event.color} rounded-full absolute -left-1.5 top-4`}></div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.time}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-events"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-center py-8"
                >
                  <div className="text-6xl mb-4">📅</div>
                  <p className="text-gray-600 mb-2">
                    No scheduled events on this day.
                  </p>
                  <p className="text-sm text-gray-500">
                    Check out our weekly schedule below or contact us for special events.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Weekly Schedule */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Weekly Schedule
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="card p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${event.color} w-2 h-full rounded-full flex-shrink-0`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {event.title}
                      </h3>
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                        {event.recurring}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-primary flex-shrink-0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.day}s
                      </p>
                      <p className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-primary flex-shrink-0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </p>
                      <p className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-primary flex-shrink-0"
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
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Stream CTA */}
      <section className="section-container bg-primary text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Watch Services Online
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Can't join us in person? We livestream our worship services every
            Sunday at 10:00 AM on YouTube. You can also watch past sermons anytime.
          </p>
          <a
            href="https://www.youtube.com/@mountsoledad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-accent text-gray-900 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-accent-dark hover:scale-105 transition-all duration-300"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch on YouTube
          </a>
        </div>
      </section>
    </>
  );
};

export default Events;
