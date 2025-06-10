import React from "react";

function AboutUs() {
  return (
    <div className="bg-white text-[#064cda] min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl px-8 sm:px-16 py-12 border border-[#064cda] relative overflow-hidden">
        {/* Decorative Blue Blob */}
        <div className="absolute -top-16 -right-20 w-96 h-96 bg-[#064cda] rounded-full opacity-10 blur-3xl z-0" />
        <div className="relative z-10">

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 tracking-tight text-[#064cda] poiret-one-regular">
            About <span className="text-black">Marketing Wala</span>
          </h1>

          {/* Real Story - Separated Paragraphs */}
          <div className="space-y-6 text-lg sm:text-xl text-black leading-relaxed mb-10 poppins-regular">
            <p>
              We’re just two friends who traded our 9-to-5 comfort for the chaos of chasing a dream — and that dream became <strong className="text-[#064cda]">Marketingwala</strong>.
            </p>
            <p>
              No investors, no shortcuts — just endless nights, chai-fueled brainstorms, and a belief that we could build something real.
            </p>
            <p>
              For the past two years, we’ve been figuring it out one campaign at a time — growing brands, learning from failures, and never backing down.
            </p>
            <p>
              We’re still in the making, but our goal is clear: to deliver creative, honest, and budget-friendly marketing that actually works.
            </p>
            <p>
              We’ve been where most brands start — and that’s exactly why we know how to help you grow.
            </p>
          </div>

          {/* Hindi Punchlines */}
          <div className="bg-[#f2f8ff] border-l-4 border-[#064cda] p-6 rounded-xl shadow-sm mb-10">
            <p className="mb-3 text-xl sm:text-2xl font-semibold text-[#064cda]">
              “Jab marketing mein dimag lagao, toh marketing wala yaad aao!”
            </p>
            <p className="mb-3 text-lg sm:text-xl text-black">
              “Bina marketing ke business hai aise, jaise chai bina adrak ke!”
            </p>
            <p className="text-lg sm:text-xl text-black">
              “Humara formula simple hai — thoda idea + thoda junoon = bada campaign!”
            </p>
          </div>

          {/* Location Footer */}
          <p className="text-center text-sm sm:text-base font-medium text-gray-700 tracking-wide">
            <span className="mr-2">📍</span> Built from scratch in Mumbai — the city that never sleeps, and neither do our ideas!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
