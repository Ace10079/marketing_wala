import React from "react";

function AboutUs() {
  return (
    <div
      className="bg-white text-black min-h-screen relative flex flex-col items-center px-8 sm:px-16 font-serif py-16"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/pw-maze-white.png')",
      }}
    >
      {/* Outer decorative border */}
      <div className="absolute inset-3 border-8 border-black pointer-events-none z-0" />

      {/* Content container */}
      <div className="relative z-10  w-full border-4 border-black bg-[#fefcf7] p-12 shadow-[8px_8px_0_rgba(0,0,0,0.15)]">
        {/* Title */}
        <h1
  className="text-3xl sm:text-6xl font-extrabold uppercase tracking-widest border-b-4 border-black pb-4 mb-10 leading-tight break-words px-2 sm:px-0"
  style={{ fontFamily: "'Rubik Marker Hatch', cursive" }}
>
  About Marketing Wala
</h1>

        {/* Intro paragraph */}
        <p className="text-lg sm:text-xl leading-relaxed mb-8">
          Marketing Wala is a <strong>fast-growing digital marketing agency</strong> based in the bustling heart of <strong>Mumbai</strong>. 
          We specialize in turning <em>thoda sa idea</em> into <em>bada brand magic</em> — with a dash of creativity, a sprinkle of strategy, and a whole lot of passion!
        </p>

        {/* Funny Hindi lines with styling */}
        <div className="bg-gray-100 border-2 border-black p-6 italic text-gray-700 mb-8 relative before:absolute before:content-['“'] before:text-8xl before:text-black before:opacity-10 before:-top-8 before:-left-4">
          <p className="mb-3 text-xl sm:text-2xl font-semibold tracking-wide">
            "Jab marketing mein dimag lagao, toh marketing wala yaad aao!"
          </p>
          <p className="mb-3 text-lg sm:text-xl">
            "Bina marketing ke business hai aise, jaise chai bina adrak ke!"
          </p>
          <p className="text-lg sm:text-xl">
            "Humara formula simple hai — thoda idea + thoda junoon = bada campaign!"
          </p>
        </div>

        {/* Location with classic newspaper style */}
        <p className="uppercase tracking-widest font-bold border-t-4 border-black pt-6 text-sm sm:text-base">
          <span className="mr-2">📍</span> Headquartered in Mumbai — the city that never sleeps, and neither do our marketing ideas!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
