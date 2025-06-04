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
    <section className="bg-white py-16 font-sans text-[#064cda] relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl text-center font-bold mb-12 tracking-tight">
        What Our Clients Say
      </h2>

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
                src={photo}
                alt={name}
                className="w-14 h-14 rounded-full border-2 border-[#064cda]"
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
    </section>
  );
}
