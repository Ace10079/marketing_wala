"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function SuccessHighlight() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.3,     // Trigger when 30% of the component is visible
  });

  return (
    <div
      ref={ref}
      className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-12 py-16 gap-10 bg-white dark:bg-neutral-900"
    >
      {/* Left: Instagram Video */}
      <div className="w-full md:w-1/2">
        <div className="aspect-w-9 aspect-h-16 w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1&playlist=tgbNymZ7vqY"
            title="Sample Video"
            allow="autoplay; loop; muted"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Right: Animated Numbers */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Viral Creation
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          This Instagram video created by our team went viral and achieved:
        </p>
        <div className="text-5xl font-bold text-purple-600">
          {inView ? <CountUp end={600000} duration={3} separator="," /> : "0"}+
        </div>
        <p className="text-xl mt-2 text-gray-700 dark:text-gray-400">Views on Instagram</p>
      </div>
    </div>
  );
}
