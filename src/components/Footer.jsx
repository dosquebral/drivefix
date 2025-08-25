import React from "react";
import { motion } from "framer-motion";

import footerBg from "../assets/footer-bg.png";
import footerCar from "../assets/footer-car.png";
import logo from "../assets/logo.png";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoMdPin } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
        className="relative min-h-[60vh] lg:h-[80vh] bg-cover bg-center overflow-hidden grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10"
      >
        <div className="relative">
          <motion.img
            src={footerCar}
            alt="footer car"
            className="absolute hidden sm:block -bottom-5 max-w-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-auto items-start py-10 sm:py-16 lg:py-20 px-6 lg:px-0">
          <div className="">
            <img src={logo} alt="footer logo" />
            <p className="text-gray mt-8">
              Quality service from skilled mechanics to keep your vehicle safe,
              reliable, and road-ready.
            </p>
            <div className="space-x-1 mt-4">
              <div className="social-link">
                <FaFacebook className="text-white" />
              </div>
              <div className="social-link">
                <FaInstagram className="text-white" />
              </div>
              <div className="social-link">
                <FaXTwitter className="text-white" />
              </div>
            </div>
          </div>
          <div className="px-0 mt-5 sm:px-6 sm:mt-0 lg:px-10">
            <p className="text-md text-white font-bold">OPENING HOURS</p>
            <div className="mt-6">
              <p className="text-white">Monday - Saturday</p>
              <p className="text-gray text-xs">8:00 AM - 6:00 PM</p>
            </div>
            <div className="mt-2">
              <p className="text-white">Sunday</p>
              <p className="text-gray text-xs">9:00 AM - 3:00 PM</p>
            </div>
          </div>
          <div className="px-0 mt-5 sm:px-4 sm:mt-0 lg:px-5">
            <p className="text-md text-white font-bold">CONTACT INFO</p>
            <div className="flex flex-col gap-3 mt-6">
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <p className="text-gray text-xs hover:text-primary cursor-pointer">
                  +63 912 345 6789
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdMail className="text-primary" />
                <p className="text-gray text-xs hover:text-primary cursor-pointer">
                  info@drivefix.com.ph
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdPin className="text-primary" />
                <p className="text-gray text-xs hover:text-primary cursor-pointer">
                  21 King Street,
                  <br />
                  Manila, Philippines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark-blue-1 text-white text-center py-4">
        <p>
          © {new Date().getFullYear()} DriveFix Philippines. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
