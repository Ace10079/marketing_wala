import React, { useState } from "react";
import Hero from "./Hero";
import CompanyLogos from "../components/Pages/CompanyLogos";
import Testimonials from "../components/Pages/Testimonials";
import ContactUs from "../components/Pages/ContactUs";
import CameraCursor from "../components/Pages/CameraCursor";
import ServicesPage from "../components/Pages/ServicesPage";
import Features from "../components/Pages/Features";
import { FAQPage } from "../components/Pages/FAQPage";
import { ConnectPage } from "../components/Pages/ConnectPage";
import AboutUs from "../components/Pages/AboutUs";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative scroll-smooth">
      {/* Transparent Navbar */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 bg-transparent">
        <img src="./icon.PNG" alt="Logo" className="h-15 md:h-20 w-auto" />

        <nav className="hidden md:flex space-x-8 font-bold text-black drop-shadow-md text-xl knewave-regular">
          <a href="#about" className="hover:text-blue-300 transition">About</a>
          <a href="#services" className="hover:text-blue-300 transition">Services</a>
          <a href="#contact" className="hover:text-blue-300 transition">Contact Us</a>
        </nav>

        <div className="md:hidden relative">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-black text-3xl focus:outline-none"
          >
            ☰
          </button>
          {mobileMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-black/70 text-white rounded-md shadow-lg py-2 z-50 flex flex-col animate-slideIn">
              <a
                href="#about"
                className="px-4 py-2 hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="px-4 py-2 hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="px-4 py-2 hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          )}
        </div>

        {/* Animation keyframes */}
        <style>{`
          @keyframes slideIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideIn {
            animation: slideIn 0.3s ease-out forwards;
          }
        `}</style>
      </header>

      {/* Main Content */}
      <main>
        <Hero />

        <section id="services" className="scroll-mt-24">
          <ServicesPage />
        </section>

        <CompanyLogos />
        <Features />

        <section id="about" className="scroll-mt-24">
          <AboutUs />
        </section>

      
        <FAQPage />
        <ConnectPage />

        <section id="contact" className="scroll-mt-24">
          <ContactUs />
        </section>
      </main>

      <CameraCursor />
    </div>
  );
}

export default App;
