import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import axios from 'axios';

const ServicesShowcase = () => {
  const [services, setServices] = useState([]);             // list of service names
  const [activeService, setActiveService] = useState(null); // currently selected service name
  const [serviceData, setServiceData] = useState(null);     // object { description, media }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all service names on mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const res = await axios.get('https://marketing-wala-backend.onrender.com/api/services');
        // Extract names from services array
        const names = res.data.map(s => s.name);
        setServices(names);
        setActiveService(names[0] || null);
        setLoading(false);
      } catch (err) {
        setError('Failed to load services');
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Fetch details (description + media) when activeService changes
  useEffect(() => {
    if (!activeService) return;
    const fetchServiceDetails = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://marketing-wala-backend.onrender.com/api/services/${activeService}`);
        setServiceData(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load service details');
        setLoading(false);
      }
    };
    fetchServiceDetails();
  }, [activeService]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!activeService || !serviceData) return <p className="text-center mt-20">No service selected</p>;

  return (
    <div className="py-12 px-4 sm:px-8 bg-white text-gray-800 font-sans">
      <h2 className="text-center text-4xl font-semibold mb-10">What We Offer</h2>

      {/* Service Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {services.map((service) => (
          <button
            key={service}
            onClick={() => setActiveService(service)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition duration-300 ${
              activeService === service
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-400 hover:border-black hover:bg-gray-100'
            }`}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Media Carousel */}
      <div className="overflow-hidden border-t border-b border-gray-200 py-5 mb-10">
        <Marquee pauseOnHover speed={40} gradient={false}>
          <div className="flex gap-6 px-2">
            {serviceData.media.length > 0 ? (
              serviceData.media.map((media, index) => (
                <div
                  key={index}
                  className="w-[180px] h-[260px] sm:w-[200px] sm:h-[300px] bg-white rounded-lg overflow-hidden shadow-md border"
                >
                  {media.type === 'image' ? (
                    <img
                      src={`https://marketing-wala-backend.onrender.com${media.src}`}
                      alt={`media-${index}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={`https://marketing-wala-backend.onrender.com${media.src}`}
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500 px-4">No media available for this service.</p>
            )}
          </div>
        </Marquee>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-0">
        <p className="text-base sm:text-lg leading-relaxed text-gray-600">{serviceData.description}</p>
      </div>
    </div>
  );
};

export default ServicesShowcase;
