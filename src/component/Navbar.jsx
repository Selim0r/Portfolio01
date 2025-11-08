import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">MD. SELIM REZA</h1>

        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-700 flex flex-col items-center py-3">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="py-2 hover:text-cyan-400"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
