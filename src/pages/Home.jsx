import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = 'UC7Thm-75d3F4P6HuFZ-xxAQ';

const Home = () => {
  const videoRef = useRef(null);
  const [latestVideoId, setLatestVideoId] = useState(null);
  const [isLive, setIsLive] = useState(false);

  // Fetch latest video from YouTube channel
  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        // First check for live streams
        const liveResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${YOUTUBE_API_KEY}`
        );
        const liveData = await liveResponse.json();

        if (liveData.items && liveData.items.length > 0) {
          setLatestVideoId(liveData.items[0].id.videoId);
          setIsLive(true);
          return;
        }

        // If no live stream, get latest upload
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&maxResults=1&type=video&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setLatestVideoId(data.items[0].id.videoId);
        }
      } catch (error) {
        console.error('Error fetching YouTube video:', error);
      }
    };

    fetchLatestVideo();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force play and set speed
    const forcePlaySlow = () => {
      video.playbackRate = 0.6;
      video.play().catch(() => {});
    };

    // Set speed immediately
    video.playbackRate = 0.6;

    // Try to play immediately
    forcePlaySlow();

    // Also set on all load events
    video.addEventListener('loadedmetadata', forcePlaySlow);
    video.addEventListener('loadeddata', forcePlaySlow);
    video.addEventListener('canplay', forcePlaySlow);
    video.addEventListener('playing', () => { video.playbackRate = 0.6; });
    video.addEventListener('pause', forcePlaySlow);
    video.addEventListener('ratechange', () => {
      if (video.playbackRate !== 0.25) video.playbackRate = 0.6;
    });

    return () => {
      video.removeEventListener('loadedmetadata', forcePlaySlow);
      video.removeEventListener('loadeddata', forcePlaySlow);
      video.removeEventListener('canplay', forcePlaySlow);
      video.removeEventListener('pause', forcePlaySlow);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-center pb-16 overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Dark overlay - sits ABOVE video to cover any play button */}
          <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>
          <video
            ref={videoRef}
            src="/Final3.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 section-container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white hover:text-gray-900"
                >
                  Learn More
                </motion.button>
              </Link>
              <Link to="/events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 shadow-xl"
                >
                  Upcoming Events
                </motion.button>
              </Link>
            </motion.div>

            {/* Service Time */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-16 inline-block bg-white/15 backdrop-blur-md rounded-2xl px-8 py-6 border-2 border-cyan-400/30 shadow-xl"
            >
              <p className="text-sm uppercase tracking-wide mb-2 text-cyan-300 font-semibold">
                Join Us for Worship
              </p>
              <p className="text-3xl font-bold">Sundays at 10:00 AM</p>
              <p className="text-sm mt-2 text-blue-100">
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

      {/* Santa Breakfast Event */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <img
            src="/santa-breakfast-2025.jpg"
            alt="Breakfast with Santa - December 14, 2024"
            className="w-full rounded-2xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Quick Info Section */}
      <section className="section-container bg-gray-50">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-8 text-center group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              First Time Guests
            </h3>
            <p className="text-gray-600 mb-4">
              We'd love to welcome you! Learn what to expect on your first visit.
            </p>
            <Link to="/about" className="text-primary font-semibold hover:text-primary-light transition-colors">
              Learn More →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-8 text-center group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              Get Involved
            </h3>
            <p className="text-gray-600 mb-4">
              Find a ministry that fits your passions and grow in community.
            </p>
            <Link to="/ministries" className="text-primary font-semibold hover:text-primary-light transition-colors">
              Explore Ministries →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 text-center group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              Give Online
            </h3>
            <p className="text-gray-600 mb-4">
              Support our mission and make a difference in our community.
            </p>
            <Link to="/give" className="text-primary font-semibold hover:text-primary-light transition-colors">
              Give Now →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest Sermon Section */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            This Week's Message
          </h2>
          <p className="text-xl text-gray-600">
            Join us online or in person for inspiring worship and biblical teaching
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* YouTube Video Embed - Auto-fetches latest */}
          <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8 relative">
            {isLive && (
              <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                LIVE NOW
              </div>
            )}
            {latestVideoId ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${latestVideoId}`}
                title="Mount Soledad Presbyterian Church - Latest Sermon"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="animate-pulse">Loading latest sermon...</div>
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.youtube.com/channel/UC7Thm-75d3F4P6HuFZ-xxAQ/live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3"/>
              </svg>
              Watch Live
            </a>
            <a
              href="https://www.youtube.com/channel/UC7Thm-75d3F4P6HuFZ-xxAQ/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              All Sermons
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
