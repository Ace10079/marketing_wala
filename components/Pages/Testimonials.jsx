import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";

const API = "https://marketing-wala-backend.onrender.com/api/testimonials";

export default function TestimonialCarousel() {
  const controls = useAnimation();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(API);
        setTestimonials(res.data);
      } catch (err) {
        console.error("Failed to fetch testimonials", err);
      }
    };

    fetchTestimonials();
  }, []);

  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-white py-16 font-sans text-[#064cda] relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl text-center font-bold mb-12 tracking-tight">
        What Our Clients Say
      </h2>

      {testimonials.length === 0 ? (
        <p className="text-center text-gray-500">No testimonials yet.</p>
      ) : (
        <motion.div
          className="flex w-max gap-8 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {repeatedTestimonials.map(({ name, role, photo, text }, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-[#f8faff] rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300"
              onMouseEnter={() => controls.stop()}
              onMouseLeave={() =>
                controls.start({
                  x: ["0%", "-50%"],
                  transition: {
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 40,
                      ease: "linear",
                    },
                  },
                })
              }
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={
                    photo?.startsWith("/uploads/")
                      ? `https://marketing-wala-backend.onrender.com${photo}`
                      : photo
                  }
                  alt={name}
                  className="w-14 h-14 rounded-full border-2 border-[#064cda] object-cover"
                />
                <div>
                  <p className="text-lg font-semibold text-black">{name}</p>
                  <p className="text-sm text-gray-500 italic">{role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">{text}</p>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
