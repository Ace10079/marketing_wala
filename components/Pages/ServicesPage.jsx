import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

const services = ['Design', 'Content Creation', 'Social Media Marketing', 'Consultation'];

const serviceMedia = {
  Design: [
    { type: 'image', src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ],
  'Content Creation': [
    { type: 'image', src: 'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ],
  'Social Media Marketing': [
    { type: 'image', src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ],
  Consultation: [
    { type: 'image', src: 'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ],
};

const ServicesShowcase = () => {
  const [activeService, setActiveService] = useState('Design');

  return (
    <div className="py-8 px-4 sm:px-6">
      {/* Service "Navbar" Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {services.map((service) => (
          <button
            key={service}
            onClick={() => setActiveService(service)}
            className={`px-3 py-2 text-sm font-semibold rounded-full transition duration-300 ${
              activeService === service
                ? 'bg-black text-white'
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Media Cards Marquee */}
      <div className="overflow-hidden">
      <Marquee pauseOnHover speed={40} gradient={false}>
  <div className="flex gap-4">
    {serviceMedia[activeService].map((media, index) => (
      <div
        key={index}
        className="w-[220px] h-[130px] sm:w-[250px] sm:h-[160px] rounded-xl overflow-hidden shadow-md bg-white"
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
    {/* Spacer to create gap between loops */}
    <div className="w-4 sm:w-6" />
  </div>
</Marquee>

      </div>
    </div>
  );
};

export default ServicesShowcase;
