import React, { useState } from "react";
import Logo from './Images/Logo.png';
import { FiAlignJustify } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav fixed top-0 left-0 w-full z-50    ">
      <div className="flex md:justify-center justify-between items-center px-[20px] py-2">
        {/* Logo */}
        <div className="logo block md:hidden">
          <img
            className="md:w-[4vw] w-[40px] md:h-[4vw] h-[40px] rounded-full"
            src={Logo}
            alt="Logo"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center border border-none rounded-full bg-black bg-opacity-50 backdrop-blur-lg">
          {["home", "about", "work", "projects"].map((item, index) => (
            <a
              key={index}
              href={`#${item}`} // Link to section with IDs
              className="md:text-[20px] text-[14px] text-white capitalize font-semibold border-2 border-none cursor-pointer hover:bg-white hover:text-black mix-blend-difference hover:bg-opacity-80 hover:rounded-full px-4 py-2 transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <IoCloseSharp
              className="text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FiAlignJustify
              className="text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[70px] left-0 w-full bg-slate-200 z-40 shadow-lg">
          <div className="flex flex-col items-center py-4">
            {["home", "About", "Skills", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`} // Link to section with IDs
                className="text-[16px] capitalize font-semibold hover:underline text-slate-600 px-4 py-2 rounded-lg hover:bg-zinc-600 hover:text-white transition-all w-full text-center"
                onClick={toggleMenu} // Close menu on click
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
