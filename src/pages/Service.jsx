import React from "react";
import servicesCar from "../assets/services-car.png";
import brakeIcon from "../assets/brake.png";
import engineIcon from "../assets/engine.png";
import batteryIcon from "../assets/battery.png";

import Heading from "../components/Heading";

import { motion } from "framer-motion";

const Service = () => {
  return (
    <section id="services" className="min-h-screen py-12 px-6 sm:px-8 lg:px-16">
      <div className="flex-center flex-col gap-10">
        <Heading
          subtitle="OUR SERVICES"
          title="We Provide Great Care for Your Vehicle"
        />

        <div>
          <img
            src={servicesCar}
            alt="services car"
            className="w-full max-w-xl mx-auto"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <motion.div
            className="w-full sm:max-w-xs space-y-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={brakeIcon}
              alt="brake icon"
              className="mx-auto h-16 sm:h-20"
            />
            <h4 className="text-md sm:text-xl font-semibold">Brake Repair</h4>
            <p className="text-text text-sm sm:text-base">
              Stay safe on the road with professional brake inspection, repair,
              and replacement services.
            </p>
          </motion.div>

          <motion.div
            className="w-full sm:max-w-xs space-y-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src={engineIcon}
              alt="engine icon"
              className="mx-auto h-16 sm:h-20"
            />
            <h4 className="text-md sm:text-xl font-semibold">Engine Repair</h4>
            <p className="text-text text-sm sm:text-base">
              Restore your car’s power and performance with expert engine
              diagnostics and repairs.
            </p>
          </motion.div>

          <motion.div
            className="w-full sm:max-w-xs space-y-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={batteryIcon}
              alt="battery icon"
              className="mx-auto h-16 sm:h-20"
            />
            <h4 className="text-md sm:text-xl font-semibold">Battery Repair</h4>
            <p className="text-text text-sm sm:text-base">
              Fast battery testing, replacement, and charging solutions to keep
              you moving.
            </p>
          </motion.div>
        </div>

        {/* Button */}
        <div className="btn mt-6">
          <a href="#services">VIEW ALL SERVICES</a>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#e3e3e3"
              className="sm:h-6 sm:w-6"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Service;
