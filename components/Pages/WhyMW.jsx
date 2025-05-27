import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🚀",
    title: "Proven Growth Strategies",
    description:
      "We use data-driven marketing techniques to boost your brand awareness and sales effectively.",
  },
  {
    icon: "🤝",
    title: "Client-Focused Approach",
    description:
      "Your goals are our priority. We tailor marketing campaigns to meet your unique business needs.",
  },
  {
    icon: "💡",
    title: "Creative Content",
    description:
      "Our team creates compelling, engaging content that resonates with your target audience.",
  },
  {
    icon: "📊",
    title: "Performance Tracking",
    description:
      "We monitor every campaign and provide transparent reports so you know exactly how your investment performs.",
  },
];

// Animation variants for cards
const cardVariants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

export default function WhyMW() {
  return (
    <section className=" mx-auto px-6 py-16 bg-gradient-to-br from-white to-gray-100 dark:from-neutral-900 dark:to-neutral-800 shadow-lg">
      <h2 className="text-4xl font-extrabold mb-16 text-center text-gray-900 dark:text-white">
        Why Choose Marketing Wala?
      </h2>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map(({ icon, title, description }, i) => (
          <motion.div
            key={title}
            className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-md cursor-pointer hover:shadow-xl hover:scale-[1.05] transition-transform duration-300 flex flex-col items-center text-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            style={{ willChange: "transform" }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="text-6xl mb-6">{icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
