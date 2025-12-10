import { useState, useEffect, useRef } from 'react';

const LazyMap = ({ height = 300, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.8!2d-117.2459!3d32.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc01c5d05e8b7b%3A0x8b8b8b8b8b8b8b8b!2sMount%20Soledad%20Presbyterian%20Church!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Start loading 200px before visible
        threshold: 0
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative bg-gray-200 ${className}`}
      style={{ height }}
    >
      {!isVisible ? (
        // Placeholder before map loads
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm">Loading map...</p>
          </div>
        </div>
      ) : (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <div className="text-center text-gray-500">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                <p className="text-sm">Loading map...</p>
              </div>
            </div>
          )}
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mount Soledad Presbyterian Church Location"
            onLoad={() => setIsLoaded(true)}
          />
        </>
      )}
    </div>
  );
};

export default LazyMap;
