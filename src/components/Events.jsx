import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [date, setDate] = useState(new Date());

  const upcomingEvents = [
    {
      title: 'Discovery Bible Study',
      day: 'Sunday',
      time: '9:00 AM - 9:50 AM',
      location: 'Worship Center',
      recurring: 'Weekly',
      color: 'bg-blue-500',
    },
    {
      title: 'Sunday Worship Service',
      day: 'Sunday',
      time: '10:00 AM - 11:00 AM',
      location: 'Main Sanctuary',
      recurring: 'Weekly',
      color: 'bg-primary',
    },
    {
      title: 'Monday Night Small Group',
      day: 'Monday',
      time: '5:30 PM - 7:00 PM',
      location: 'Sunset Room',
      recurring: 'Weekly',
      color: 'bg-amber-500',
    },
    {
      title: 'Prayer Group',
      day: 'Wednesday',
      time: '6:00 PM - 8:00 PM',
      location: 'Youth Room',
      recurring: 'Weekly',
      color: 'bg-green-500',
    },
  ];

  return (
    <section id="events" className="section-container bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Upcoming Events
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join us for worship, fellowship, and growth
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-8"
        >
          <h3 className="text-2xl font-bold text-primary mb-6">Calendar</h3>
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
            `}</style>
            <Calendar onChange={setDate} value={date} />
          </div>
        </motion.div>

        {/* Events List */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-primary mb-6">
            Weekly Schedule
          </h3>
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="card p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`${event.color} w-2 h-full rounded-full`}></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-gray-900">
                      {event.title}
                    </h4>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                      {event.recurring}
                    </span>
                  </div>
                  <div className="space-y-1 text-gray-600">
                    <p className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-primary"
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
                        className="w-5 h-5 mr-2 text-primary"
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
                        className="w-5 h-5 mr-2 text-primary"
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
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Live Stream CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 text-center bg-primary rounded-2xl p-12 text-white"
      >
        <h3 className="text-3xl font-bold mb-4">Watch Services Online</h3>
        <p className="text-xl mb-8 opacity-90">
          Can't join us in person? We stream live every Sunday on YouTube
        </p>
        <motion.a
          href="https://www.youtube.com/@mountsoledad"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          Watch on YouTube
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Events;
