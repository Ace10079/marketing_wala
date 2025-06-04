import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

const services = ['Design', 'Content Creation', 'Social Media Marketing', 'Consultation'];

const serviceDescriptions = {
  Design: "We create stunning visuals, brand identities, and assets tailored for your brand's story.",
  'Content Creation': "From scripting to shooting and editing, we craft engaging content that resonates.",
  'Social Media Marketing': "We strategize, schedule, and scale your brand across social platforms.",
  Consultation: "Our experts guide your brand with insights, strategy, and creative direction.",
};

const serviceMedia = {
  Design: [
    { type: 'image', src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop' },
    { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop' },
  ],
  'Content Creation': [
    { type: 'image', src: 'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop' },
    { type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop' },
  ],
  'Social Media Marketing': [
    { type: 'image', src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop' },
    { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop' },
  ],
  Consultation: [
    { type: 'image', src: 'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop' },
    { type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop' },
  ],
};

const ServicesShowcase = () => {
  const [activeService, setActiveService] = useState('Design');

  return (
    <div className="py-12 px-4 sm:px-8 bg-white text-gray-800 font-sans">
      {/* Heading */}
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
            {serviceMedia[activeService].map((media, index) => (
              <div
                key={index}
                className="w-[240px] h-[150px] sm:w-[280px] sm:h-[170px] bg-white rounded-lg overflow-hidden shadow-md border"
              >
                {media.type === 'image' ? (
                  <img
                    src={media.src}
                    alt={`media-${index}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={media.src}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-0">
        <p className="text-base sm:text-lg leading-relaxed text-gray-600">
          {serviceDescriptions[activeService]}
        </p>
      </div>
    </div>
  );
};

export default ServicesShowcase;
