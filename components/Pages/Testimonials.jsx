import React from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Williams",
    role: "Marketing Manager",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Marketing Wala transformed our online presence! Their strategy doubled our leads in just 3 months.",
  },
  {
    name: "John Smith",
    role: "CEO, TechStart",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Highly professional and result-oriented team. Their campaigns really boosted our ROI.",
  },
  {
    name: "Emily Johnson",
    role: "Content Creator",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Creative, fast, and always on point. Working with Marketing Wala was a great experience.",
  },
  {
    name: "Michael Brown",
    role: "Startup Founder",
    photo: "https://randomuser.me/api/portraits/men/56.jpg",
    text: "They understood our vision perfectly and delivered amazing results. Highly recommended!",
  },
];

const repeatedTestimonials = [...testimonials, ...testimonials];

export default function TestimonialCarousel() {
  const controls = useAnimation();

  return (
    <section className="overflow-hidden bg-white py-14 border-y-2 border-black font-serif">
      <h2 className="text-3xl md:text-4xl text-center font-extrabold uppercase mb-10 border-b-2 border-black max-w-fit mx-auto px-6 py-2">
        What Our Clients Say
      </h2>

      <motion.div
        className="flex w-max gap-6 px-4"
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
            className="flex-shrink-0 w-80 bg-white border border-black rounded-md p-6 shadow-[2px_2px_0_#000] hover:shadow-[4px_4px_0_#000] transition-all duration-300"
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
            <div className="flex items-center space-x-4 mb-3">
              <img
                src={photo}
                alt={name}
                className="w-14 h-14 rounded-full border border-black"
              />
              <div>
                <p className="text-lg font-bold">{name}</p>
                <p className="text-xs italic text-gray-600">{role}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-800">{text}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
