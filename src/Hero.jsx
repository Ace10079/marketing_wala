import React, { useState } from "react";

function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[url('/bg.JPG')] bg-cover bg-center min-h-screen relative flex flex-col">
      {/* Top-left hand image */}
      <img
        src="./IMG_5586.PNG"
        alt="Hand"
        className="absolute top-0 left-40 h-40 w-auto z-30 animate-bounce-y"
      />

      {/* Top bar: Logo left, Navbar right */}
      <header className="flex justify-between items-center px-6 py-4">
        <img src="./icon.PNG" alt="Logo" className="h-24 w-auto" />

        <nav className="hidden md:flex space-x-8 font-semibold text-black">
          <a
            href="#about"
            className="hover:text-blue-400 hover:rounded-full hover:border hover:border-black px-2 py-1 transition"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-blue-400 hover:rounded-full hover:border hover:border-black px-2 py-1 transition"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 hover:rounded-full hover:border hover:border-black px-2 py-1 transition"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-black text-3xl focus:outline-none"
          >
            ☰
          </button>
          {mobileMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-20 flex flex-col">
              <a
                href="#about"
                className="px-4 py-2 text-black hover:bg-gray-100 hover:rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="px-4 py-2 text-black hover:bg-gray-100 hover:rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-black hover:bg-gray-100 hover:rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Center content */}
      <div className="flex flex-col items-center justify-center text-center px-4 w-full flex-1">
        <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
          <img
            src="./IMG_6731.PNG"
            alt="camera"
            className="h-15 md:h-24 md:w-auto animate-camera-tilt"
          />
          <img
            src="./camera.PNG"
            alt="camera"
            className="h-15 md:h-20 md:w-auto animate-camera-tilt"
          />
        </div>
        <img
          src="./IMG_6730.PNG"
          alt="Text"
          className="md:w-auto h-64"
        />
      </div>

      {/* Mic */}
      <img
        src="./mic.PNG"
        alt="mic"
        className="h-50 w-20 md:w-44 md:h-72 absolute left-0 bottom-0 animate-tilt z-10"
      />

      {/* Girl */}
      <img
        src="./girl.PNG"
        alt="girl"
        className="absolute right-5 bottom-0 h-50 w-30 md:h-60 md:w-50 animate-sway z-10"
      />

      {/* Custom Animations */}
      <style>{`
        @keyframes tilt {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes sway {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(15px); }
        }
        @keyframes bounceY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes cameraTilt {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }

        .animate-tilt {
          animation: tilt 3s ease-in-out infinite;
        }
        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }
        .animate-bounce-y {
          animation: bounceY 3s ease-in-out infinite;
        }
        .animate-camera-tilt {
          animation: cameraTilt 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;
