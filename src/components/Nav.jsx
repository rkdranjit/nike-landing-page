import React, { useState, useEffect } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when screen resizes above 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-white">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-gray-700 hover:text-black transition-all duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>

        {/* Mobile Navigation */}
        <ul
          className={`absolute top-16 right-5 bg-white shadow-lg rounded-lg p-5 flex flex-col gap-5 transition-all duration-300 ${
            menuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-gray-700 hover:text-black transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
