import React from "react";


const Footer = () => {
  return (
    <footer className="bg-[#064cda] text-neutral-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          {/* Replace with your actual logo path */}
          <img src="/IMG_3157.JPG" alt="Marketing Wala" className="w-20 h-20" />
          <span className="text-xl font-semibold">Marketing Wala</span>
        </div>

        {/* Address or Info */}
        <div className="text-sm text-center md:text-left">
          <p>Marketing Wala HQ</p>
          <p>123 Brew Street, Chennai, India</p>
          <p>📩 hello@marketingwala.in</p>
        </div>

        {/* Rights */}
        <div className="text-sm text-center md:text-right">
          <p>© {new Date().getFullYear()} Marketing Wala.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
