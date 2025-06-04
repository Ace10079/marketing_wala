import React from "react";
import Navbar from "./Navbar";

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
  return (
    <div className="min-h-screen flex flex-col">
     

      {/* Main Content */}
      <main className="">
  <Hero />
  <ServicesPage />
  <CompanyLogos />
  <Features />
  <AboutUs />
  <Testimonials />
  <FAQPage />
  <ConnectPage />
  <ContactUs />
</main>

      <CameraCursor />
    </div>
  );
}

export default App;
