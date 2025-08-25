import React, { useState } from "react";
import logo from "../assets/logo.png";
import hover from "../assets/a-hover.svg";

import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" text-white w-full z-50">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" className="w-28" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="text-sm font-semibold font-chakra flex items-center gap-6">
            <a href="#home" className="group">
              HOME
              <img src={hover} className="nav-img" />
            </a>

            <a href="#about" className="group">
              ABOUT
              <img src={hover} className="nav-img" />
            </a>
            <a href="#services" className="group">
              SERVICES
              <img src={hover} className="nav-img" />
            </a>
            <a href="#works" className="group">
              PROJECTS
              <img src={hover} className="nav-img" />
            </a>
            <a href="#contact" className="group">
              CONTACT
              <img src={hover} className="nav-img" />
            </a>
          </div>

          <div className="btn">
            <a href="">GET A QUOTE</a>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="#e3e3e3"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="md:hidden">
          <IoMenu
            size={28}
            className="cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/40 backdrop-blur-md z-50 flex flex-col p-6 gap-6 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="self-end">
          <IoClose
            size={28}
            className="cursor-pointer mt-4"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="flex-center flex-col gap-5">
          <a href="#home" className="group" onClick={() => setMenuOpen(false)}>
            HOME
            <img src={hover} className="nav-img" />
          </a>
          <a href="#about" className="group" onClick={() => setMenuOpen(false)}>
            ABOUT
            <img src={hover} className="nav-img" />
          </a>
          <a
            href="#services"
            className="group"
            onClick={() => setMenuOpen(false)}
          >
            SERVICES
            <img src={hover} className="nav-img" />
          </a>
          <a href="#works" className="group" onClick={() => setMenuOpen(false)}>
            PROJECTS
            <img src={hover} className="nav-img" />
          </a>
          <a
            href="#contact"
            className="group"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
            <img src={hover} className="nav-img" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
