import React from "react";

function Navbar() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 text-xl font-bold">
        <button>About Us</button>
        <button>Services</button>
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default Navbar;
