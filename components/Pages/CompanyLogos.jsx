import React from "react";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
];

export default function CompanyLogos() {
  return (
    <div className="w-full overflow-hidden py-12 px-4 bg-gray-50 font-serif text-black border-y border-black">
      <h2 className="text-center text-3xl uppercase font-bold tracking-widest border-b border-black pb-2 mb-10">
        Companies We've Worked With
      </h2>
      <div className="relative">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company ${index}`}
              className="h-14 w-auto object-contain grayscale contrast-125 opacity-90 border border-black p-2 bg-white shadow-sm"
            />
          ))}
          {/* Clone for looping */}
          {logos.map((logo, index) => (
            <img
              key={`clone-${index}`}
              src={logo}
              alt={`Company clone ${index}`}
              className="h-14 w-auto object-contain grayscale contrast-125 opacity-90 border border-black p-2 bg-white shadow-sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
