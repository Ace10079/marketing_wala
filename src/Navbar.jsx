import React from "react";

function Navbar() {
  return (
    <nav className="font-serif uppercase tracking-widest font-bold text-black">
      <ul className="flex space-x-10 border-b-4 border-black pb-2">
        <li>
          <button className="hover:bg-black hover:text-white px-3 py-1 transition-colors duration-300 rounded">
            About Us
          </button>
        </li>
        <li>
          <button className="hover:bg-black hover:text-white px-3 py-1 transition-colors duration-300 rounded">
            Services
          </button>
        </li>
        <li>
          <button className="hover:bg-black hover:text-white px-3 py-1 transition-colors duration-300 rounded">
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
