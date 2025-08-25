import React from "react";
import aboutImg from "../assets/about.png";
import aboutImgMobile from "../assets/about-mobile.jpg";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-dark-blue min-h-[500px] p-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" text-white flex flex-col justify-center gap-4 px-12 py-12">
          <h3 className="text-white">ABOUT US</h3>
          <h2 className="text-white">
            WE’RE COMMITTED TO <br /> QUALITY SERVICE
          </h2>
          <p className="text-white text-left">
            At DriveFix, our certified mechanics deliver reliable auto care with
            quality parts and transparent pricing. From routine maintenance to
            major repairs, we keep your vehicle safe, dependable, and
            road-ready.
          </p>

          <div className="grid grid-cols-2 gap-4 text-center">
            <motion.div className="stats-card">
              <h4 className="text-white text-4xl">7K+</h4>
              <h5>Happy Clients</h5>
            </motion.div>
            <div className="stats-card">
              <h4 className="text-white text-4xl">22+</h4>
              <h5>Instruments</h5>
            </div>
            <div className="stats-card">
              <h4 className="text-white text-4xl">50+</h4>
              <h5>Years in market</h5>
            </div>
            <div className="stats-card">
              <h4 className="text-white text-4xl">99%</h4>
              <h5>Projects completed</h5>
            </div>
          </div>
        </div>

        <img
          src={aboutImgMobile}
          alt="about mobile"
          className="block md:hidden w-full object-contain"
        />
        <img
          src={aboutImg}
          alt="about desktop"
          className="hidden md:block w-full object-contain"
        />
      </div>
    </section>
  );
};

export default About;
