import React from "react";

export default function CompanyLogos() {
  const logos = [
    "./Companies/1.png",
    "./Companies/3.png",
    "./Companies/5.png",
    "./Companies/6.png",
    "./Companies/7.png",
    "./Companies/9.png",
    "./Companies/10.png",
    "./Companies/11.png",
    "./Companies/12.png",
    "./Companies/13.png",  
    "./Companies/15.PNG",
    "./Companies/16.AVIF"
    
    
    // Add more as needed
  ];

  if (!logos.length) return <p>No logos found.</p>;

  return (
    <div className="w-full overflow-hidden py-12 px-4 bg-white font-serif text-gray-800 border-y-2 border-gray-300 poiret-one-regular">
      <h2 className="text-center text-3xl uppercase font-bold tracking-widest border-gray-300 pb-2 mb-12">
        Companies We've Worked With
      </h2>
      <div className="relative">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
          {logos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Company ${index}`}
              className="h-30 w-auto object-contain  p-2 hover:scale-105 transition-transform duration-300"
            />
          ))}
          {logos.map((src, index) => (
            <img
              key={`clone-${index}`}
              src={src}
              alt={`Company clone ${index}`}
              className="h-30 w-auto object-contain  p-2 hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
