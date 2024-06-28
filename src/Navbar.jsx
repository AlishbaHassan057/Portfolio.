import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-[100%] text-center p-4 bg-[#2B4368] z-[2222222] flex items-center justify-between ${
          menuOpen ? "menu-open" : ""
        }`}
      >
        <div className="w-[32%] text-[2rem] text-white  font-bold">
          <a href="#" className="">
            Portfolio.
          </a>
        </div>
        <div
          className={`flex ${
            menuOpen ? "flex-col" : "hidden"
          } md:flex md:flex-row`}
        >
          <nav
            className={`flex justify-around items-center self-center w-[30%] px-[5rem] ${
              menuOpen ? "flex-col" : ""
            }`}
          >
            <a
              href="#"
              className="text-white text-lg font-medium ml-8 transition-opacity opacity-0 animate-slideTop"
              style={{ "--i": 1 }}
            >
              Home
            </a>
            <a
              href="#"
              className="text-white text-lg font-medium ml-8 transition-opacity opacity-0 animate-slideTop"
              style={{ "--i": 2 }}
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-lg font-medium ml-8 transition-opacity opacity-0 animate-slideTop"
              style={{ "--i": 3 }}
            >
              Expertise
            </a>
            <a
              href="#"
              className="text-white text-lg font-medium ml-8 transition-opacity opacity-0 animate-slideTop"
              style={{ "--i": 4 }}
            >
              Projects
            </a>
            <a
              href="#"
              className="text-white text-lg font-medium ml-8 transition-opacity opacity-0 animate-slideTop"
              style={{ "--i": 5 }}
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="md:hidden p-2 cursor-pointer mr-4" onClick={toggleMenu}>
          <div
            className={`w-6 h-1 bg-black mb-1 transition-transform ${
              menuOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-black mb-1 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-black transition-transform ${
              menuOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
