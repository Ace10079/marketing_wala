import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="bg-neutral-100 text-black  relative flex flex-col items-center px-6 sm:px-12 font-serif">
      {/* Header inside Hero */}
      <header className="flex items-center justify-between w-full py-4 ">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="./3.png" alt="Logo" className="h-15 w-20" />
        </div>

        {/* Navbar */}
        <nav className="hidden md:block">
          <Navbar />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-black focus:outline-none">☰</button>
        </div>
      </header>

      {/* Removed decorative dotted border */}

      {/* Newspaper header content */}
      <div className="relative z-10 text-center max-w-4xl space-y-6 animate-fadeInUp w-full">
        <div className="flex flex-col items-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-wider border-y-4 border-black inline-block px-4 py-1 leading-tight">
            The Marketing Wala
          </h1>

          <h2 className="text-lg sm:text-2xl italic text-gray-800 tracking-wide mt-1 max-w-full px-2 sm:px-0">
            Turning *Thoda sa idea* into **Bada Brand Magic** — Daily!
          </h2>
        </div>

        {/* Catchy Bollywood-style line */}
        <div className="w-full py-8 bg-neutral-100  flex items-center justify-center">
          <p
            className="text-xl sm:text-3xl font-bold italic tracking-wide max-w-4xl text-center px-4 sm:px-0"
            style={{ fontFamily: "'Rubik Marker Hatch', cursive" }}
          >
            "Marketing Wala — jahan har campaign banta hai{" "}
            <span className="text-red-700">Blockbuster Hit!</span> 💥{" "}
            <span className="text-red-600 underline decoration-red-400 decoration-2">
              Dhamaka ideas,
            </span>{" "}
            <span className="text-yellow-700 italic">item number creativity,</span>{" "}
            aur{" "}
            <span className="text-red-800 font-extrabold">
              full paisa vasool
            </span>{" "}
            results!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
