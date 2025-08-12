"use client";

import React from "react";
import { LampContainer } from "./ui/Lamp";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-b from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl mb-0"
        ></motion.h1>
      </LampContainer>

      <div className="grid grid-cols-3 h-screen">
        <div></div>

        <div className="flex justify-center">
          <motion.div
            className="bg-white w-[1px] h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
          />
          <div className="bg-white w-[1px] h-full"></div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default AboutUs;
