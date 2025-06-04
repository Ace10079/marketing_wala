import React from "react";
import { Instagram, Youtube } from "lucide-react";

export function ConnectPage() {
  return (
    <div className="bg-white py-16 px-4 sm:px-8 font-serif text-black">
      <div className=" mx-auto border-4 border-black p-8 sm:p-12 bg-white shadow-xl relative overflow-hidden">
        {/* Faux Newspaper Heading */}
        <div className="absolute top-0 left-0 w-full border-b-4 border-black">
          <div className="text-center bg-black text-white py-2 text-xl tracking-widest uppercase font-bold">
            The Marketing Wala Daily
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16 text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-widest border-y-4 border-black inline-block py-2 px-4">
            Connect With Us
          </h2>

          <p className="italic text-gray-800 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
            Where stories meet strategy — follow our creative footprints on your favorite platforms.
          </p>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-pink-100 border-2 border-black px-6 py-3 rounded-md hover:bg-pink-200 transition-all duration-300 shadow-md hover:scale-105"
            >
              <Instagram size={28} className="text-pink-600" />
              <span className="text-xl font-bold tracking-wide">Instagram</span>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-red-100 border-2 border-black px-6 py-3 rounded-md hover:bg-red-200 transition-all duration-300 shadow-md hover:scale-105"
            >
              <Youtube size={28} className="text-red-600" />
              <span className="text-xl font-bold tracking-wide">YouTube</span>
            </a>
          </div>

          {/* Decorative Divider */}
          <div className="border-t-2 border-dashed border-black mt-8 pt-4">
            <p className="text-sm italic text-gray-600">
              © {new Date().getFullYear()} Marketing Wala — Where every scroll tells a story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
