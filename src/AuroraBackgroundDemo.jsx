"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="flex flex-col md:flex-row gap-10 items-start w-full max-w-5xl">
          {/* Left Text Section */}
          <div className="text-white space-y-4">
            <p className="text-3xl">Big ideas start with small talks — over coffee or calls. We’re all ears.</p>
            <p className="font-semibold text-2xl">GET IN TOUCH WITH US</p>
            <p>📩 hello@marketingwala.in</p>
            <p>
              Ready to turn your brand into a buzz-worthy name? Let’s craft strategies that
              actually work. Book your free consultation today.
            </p>
            <p className="font-bold text-2xl">Let’s Get Marketing, Wala Style!</p>
          </div>

          {/* Right Form Section */}
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-neutral-800 dark:text-white mb-4">
              Let’s Get in Touch
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-1 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="What's on your mind?"
                  className="w-full mt-1 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition duration-200"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
