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
    <div className="py-8 px-4 sm:px-6 font-serif bg-gray-50 text-black">
      {/* Newspaper-style heading */}
      <h2 className="text-center text-3xl font-bold tracking-wider uppercase border-b border-black pb-2 mb-6">
        Our Services
      </h2>

      {/* Service Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {services.map((service) => (
          <button
            key={service}
            onClick={() => setActiveService(service)}
            className={`px-4 py-2 text-sm border border-black font-bold tracking-wide uppercase transition duration-300 ${
              activeService === service
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Media Marquee */}
      <div className="overflow-hidden border-y border-black py-4 mb-6">
        <Marquee pauseOnHover speed={30} gradient={false}>
          <div className="flex gap-4">
            {serviceMedia[activeService].map((media, index) => (
              <div
                key={index}
                className="w-[220px] h-[140px] sm:w-[250px] sm:h-[160px] bg-white border border-black shadow-sm"
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
            <div className="w-4 sm:w-6" />
          </div>
        </Marquee>
      </div>

      {/* Description Box */}
      <div className="max-w-2xl mx-auto border border-black p-4 text-justify text-sm sm:text-base leading-relaxed">
        <p className="first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none">
          {serviceDescriptions[activeService]}
        </p>
      </div>
    </div>
  );
};

export default ServicesShowcase;
