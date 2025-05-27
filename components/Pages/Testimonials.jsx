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

// Duplicate testimonials to create a seamless infinite loop
const repeatedTestimonials = [...testimonials, ...testimonials];

export default function TestimonialCarousel() {
  const controls = useAnimation();

  return (
    <section className="overflow-hidden bg-gray-50 dark:bg-neutral-900 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        What Our Clients Say
      </h2>

      <motion.div
        className="flex w-max gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {repeatedTestimonials.map(({ name, role, photo, text }, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() =>
              controls.start({
                x: ["0%", "-50%"],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
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
                className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
              />
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {name}
                </p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">{role}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{text}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
