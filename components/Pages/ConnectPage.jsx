import React from "react";
import { Instagram, Youtube, Linkedin } from "lucide-react";

export function ConnectPage() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 font-sans text-[#064cda] flex flex-col justify-center items-center ">
      <div className="mx-auto bg-[#f2f8ff] rounded-xl shadow-lg p-6 sm:p-14 text-center max-w-3xl w-full">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 poiret-one-regular">
          Connect With Us
        </h2>

        {/* Intro */}
        <p className="text-gray-700 text-base sm:text-xl leading-relaxed mb-10 mx-auto poppins-regular">
          Where stories meet strategy — follow our creative footprints on your favorite platforms.  
          Join a community passionate about marketing, creativity, and growth.
        </p>

        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-12 poppins-regular">
          <a
            href="https://www.instagram.com/_marketingwala?igsh=NWF3OWVuN2Y1dHo0&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 bg-[#ffeef6] px-4 sm:px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Instagram size={24} className="text-pink-600" />
            <span className="text-base sm:text-lg font-semibold">Instagram</span>
          </a>

          <a
            href="https://youtube.com/@marketingwalaxtra?si=p6Dd5Dl2_QO39-mr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 bg-[#fff3f3] px-4 sm:px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Youtube size={24} className="text-red-600" />
            <span className="text-base sm:text-lg font-semibold">YouTube</span>
          </a>

          <a
            href="https://www.linkedin.com/company/na-creatives/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 bg-[#e0f7ff] px-4 sm:px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Linkedin size={24} className="text-blue-700" />
            <span className="text-base sm:text-lg font-semibold">LinkedIn</span>
          </a>
        </div>

        {/* Motivational Section */}
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#cce0f5] shadow-sm poppins-regular" >
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#064cda]">Let’s Make Your Brand Unforgettable</h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            Whether you're a startup dreaming big or a brand seeking a bold refresh, our creative spark can light your way.
            Follow us, engage with us, and let’s build something extraordinary — one idea at a time.
          </p>
          <blockquote className="italic text-gray-600 text-sm sm:text-base border-l-4 border-[#064cda] pl-4">
            “Marketing Wala isn’t just a brand, it’s a movement for storytellers.”
          </blockquote>
          <p className="mt-2 font-semibold text-[#064cda] text-sm">— The MW Team</p>
        </div>
      </div>
    </section>
  );
}
