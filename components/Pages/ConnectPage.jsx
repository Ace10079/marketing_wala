import React from "react";
import { Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

export function ConnectPage() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 font-sans text-[#064cda] flex flex-col justify-center items-center">
      <div className="mx-auto bg-[#f2f8ff] rounded-xl shadow-lg p-6 sm:p-14 text-center max-w-3xl w-full">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
          Connect With Us
        </h2>

        {/* Intro */}
        <p className="text-gray-700 text-base sm:text-xl leading-relaxed mb-10 mx-auto">
          Where stories meet strategy — follow our creative footprints on your favorite platforms.  
          Join a community passionate about marketing, creativity, and growth.
        </p>

        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 bg-[#ffeef6] px-4 sm:px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Instagram size={24} className="text-pink-600" />
            <span className="text-base sm:text-lg font-semibold">Instagram</span>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 bg-[#fff3f3] px-4 sm:px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Youtube size={24} className="text-red-600" />
            <span className="text-base sm:text-lg font-semibold">YouTube</span>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 bg-[#e1f0ff] px-4 sm:px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Twitter size={24} className="text-blue-500" />
            <span className="text-base sm:text-lg font-semibold">Twitter</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 bg-[#e0f7ff] px-4 sm:px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Linkedin size={24} className="text-blue-700" />
            <span className="text-base sm:text-lg font-semibold">LinkedIn</span>
          </a>
        </div>

        {/* Newsletter subscription */}
        <div className="mb-12 max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-[#064cda]">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Subscribe to our newsletter for the latest marketing insights and tips delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#064cda] text-sm sm:text-base"
              required
            />
            <button
              type="submit"
              className="bg-[#064cda] text-white px-6 py-2 rounded-md hover:bg-[#053bb5] transition-colors duration-300 text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Testimonials / Quotes */}
        <div className="border-t border-[#cce0f5] pt-8">
          <blockquote className="italic text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            “Marketing Wala’s content has transformed how I approach branding — insightful, inspiring, and actionable.”
          </blockquote>
          <p className="font-semibold text-[#064cda] text-sm sm:text-base">— Anjali S., Marketing Manager</p>
        </div>

        {/* Footer */}
        <div className="border-t border-[#cce0f5] pt-6 mt-10">
          <p className="text-sm text-gray-500 italic">
            © {new Date().getFullYear()} Marketing Wala — Where every scroll tells a story.
          </p>
        </div>
      </div>
    </section>
  );
}
