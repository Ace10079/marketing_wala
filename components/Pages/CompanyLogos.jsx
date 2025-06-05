import React, { useEffect, useState } from "react";

export default function CompanyLogos() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://marketing-wala-backend.onrender.com/api/logos")
      .then((res) => res.json())
      .then((data) => {
        setLogos(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading logos...</p>;

  if (!logos.length) return <p>No logos found.</p>;

  return (
    <div className="w-full overflow-hidden py-12 px-4 bg-gradient-to-r from-yellow-50 via-white to-pink-50 font-serif text-gray-800 border-y-2 border-gray-300">
      <h2 className="text-center text-3xl uppercase font-bold tracking-widest border-b-2 border-gray-300 pb-2 mb-10">
        Companies We've Worked With
      </h2>
      <div className="relative">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
          {logos.map((logo, index) => (
            <img
              key={logo._id}
              src={`https://marketing-wala-backend.onrender.com${logo.src}`}  // full path to image
              alt={`Company ${index}`}
              className="h-30 w-auto object-contain bg-white p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
          {/* Clone for looping */}
          {logos.map((logo, index) => (
            <img
              key={`clone-${logo._id}`}
              src={`https://marketing-wala-backend.onrender.com${logo.src}`}
              alt={`Company clone ${index}`}
              className="h-30 w-auto object-contain bg-white p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
