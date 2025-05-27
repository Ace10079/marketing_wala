import React from "react";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
  // Add more logos as needed
];

export default function CompanyLogos() {
  return (
    <div className="w-full overflow-hidden py-10">
      <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800 ">
        Companies We've Worked With
      </h2>
      <div className="relative">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company ${index}`}
              className="h-12 w-auto object-contain"
            />
          ))}
          {/* Repeat logos for seamless loop */}
          {logos.map((logo, index) => (
            <img
              key={`clone-${index}`}
              src={logo}
              alt={`Company clone ${index}`}
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
