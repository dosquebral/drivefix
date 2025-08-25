import React from "react";
import Heading from "../components/Heading";
import Card from "../components/Card";

import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";

import { motion } from "framer-motion";

const Works = () => {
  return (
    <section id="works" className="py-12 px-6 sm:px-10 lg:px-16">
      <div className="flex-center flex-col gap-10">
        <Heading subtitle="OUR WORK" title="Latest projects we have done" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card image={work1} title="ENGINE REPAIR" subtitle="AUTO REPAIR" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card
              image={work2}
              title="CAR TYRE CHANGE"
              subtitle="AUTO REPAIR"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card image={work3} title="BATTERY ADJUST" subtitle="AUTO REPAIR" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Works;
