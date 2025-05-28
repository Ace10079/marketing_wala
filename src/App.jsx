import React from "react";
import  Navbar  from "./Navbar";


import Hero from "./Hero";

import CompanyLogos from "../components/Pages/CompanyLogos";

import Testimonials from "../components/Pages/Testimonials";
import ContactUs from "../components/Pages/ContactUs";
import CameraCursor from "../components/Pages/CameraCursor";
import ServicesPage from "../components/Pages/ServicesPage";




function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-transparent absolute top-0 left-0 w-full z-50">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="./icon.PNG"
            alt="Logo"
            className="h-20 w-25"
          />
        </div>

        {/* Navbar */}
        <div className="hidden md:block">
          <Navbar/>
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
    <Hero/>
   <ServicesPage/>
    <CompanyLogos/>
    
   <Testimonials/>
   <ContactUs/>
      </main>
      <CameraCursor/>
    </div>
  );
}

export default App;
