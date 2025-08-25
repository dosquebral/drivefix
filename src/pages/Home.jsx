import heroBg from "../assets/hero-bg.png";
import banner from "../assets/banner.png";
import Navbar from "../components/Navbar";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      style={{ backgroundImage: `url(${heroBg})` }}
      className="bg-cover bg-center min-h-screen overflow-hidden p-0"
    >
      <div className="pt-6">
        <Navbar />
      </div>

      <div className="relative text-white text-center sm:text-left flex flex-col justify-center max-w-6xl mx-auto h-[85vh]  px-10 sm:px-0 my-5 sm:my-0">
        <div className="max-w-lg">
          <motion.div
            className="flex items-center justify-center sm:justify-start gap-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="bg-primary w-10 h-1 rounded-full block"></span>
            <p className="text-xs font-chakra font-semibold tracking-wide">
              We Have Talented Engineers & Mechanics
            </p>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-heading font-chakra font-bold leading-tight mt-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            AUTO MAINTENANCE <br /> & REPAIR SERVICES
          </motion.h1>

          <motion.p
            className="text-sm font-chakra leading-snug sm:leading-tight mt-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Our skilled engineers and mechanics deliver{" "}
            <br className="hidden sm:block" /> reliable car maintenance and
            repairs.
          </motion.p>

          <div className="btn items-center gap-2 mt-4">
            <a href="#services">OUR SERVICES</a>
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

        <div className="mt-6 sm:mt-0 sm:absolute sm:top-15 sm:-right-40 md:-right-60 z-10 flex justify-center sm:block">
          <motion.img
            src={banner}
            alt="Banner"
            className="h-50 sm:h-72 md:h-[400px] lg:h-[80vh] object-contain"
            initial={{ opacity: 0.9, x: 100 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              x: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.8, ease: "easeOut" },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
