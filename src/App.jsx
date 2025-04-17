import React from "react";
import { Navbar } from "./Navbar";
import { GridBackgroundDemo } from "./GridBackgroundDemo";
import { AppleCardsCarouselDemo } from "./AppleCardsCarouselDemo";
import { CarouselDemo } from "./CarouselDemo";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";
import MakeHimHappy from "../components/ui/MakeHimHappy";
import GiftBoxWithPullString from "./GiftBoxWithPullString";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-transparent absolute top-0 left-0 w-full z-50">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="./IMG_3157.JPG"
            alt="Logo"
            className="h-20 w-20 object-cover "
          />
        </div>

        {/* Navbar */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Contact Us */}
      
        {/* Mobile Menu Button (Optional) */}
        <div className="md:hidden">
          {/* You can hook this to a dropdown or drawer later */}
          <button className="text-black focus:outline-none">☰</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="">
        <GridBackgroundDemo />
        <AppleCardsCarouselDemo/>
        <CarouselDemo/>
        <AnimatedTestimonialsDemo/>
      </main>
    </div>
  );
}

export default App;
