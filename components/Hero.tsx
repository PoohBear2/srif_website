import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { IoAccessibilityOutline } from "react-icons/io5";
import { SparklesCore } from "./ui/Sparkles";
import { WavyBackground } from "./ui/Wavy";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 
        md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
      </div>
      <div>
        <Spotlight
          className="top-10 left-full h-[80vh]
          w-[50vw]"
          fill="green"
        />
      </div>
      <div>
        <Spotlight
          className="top-28 left-80
        h-[80vh] w-[50vh]"
          fill="pink"
        />
      </div>
      <div>
        <Spotlight className="-top-40" fill="white" />
      </div>

      <div>
        <Spotlight className="-top-40 left-0" fill="green" />
      </div>

      <div>
        <Spotlight className="left-40" fill="green" />
      </div>
      <div>
        <Spotlight className="right-30" fill="green" />
      </div>
      <div>
        <Spotlight className="right-30" fill="blue" />
      </div>
      <div>
        <Spotlight className="right-30" fill="white" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100
       bg-white  dark:bg-grid-white/[0.05] 
       bg-grid-black/[0.2] flex items-center 
       justify-center relative"
      >
        <div
          className="absolute pointer-events-none 
        inset-0 flex items-center justify-center 
        dark:bg-black-100 bg-white 
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        ></div>

        <div
          className="flex justify-center relative 
        my-20 z-10"
        >
          <div
            className="max-w-[89vw] md:max-w-2xl
          lg:max-w-[60vw] flex flex-col items-center
          justify-center"
          >
            <h2
              className="uppercase tracking-widest
            text-xs text-center text-blue-100 max-w-80
            "
            >
              
            </h2>

            <TextGenerateEffect
              className="text-center text-[40px]
                md:text-5xl lg:text-6xl"
              words="Brown's Socially Responsible Investmnet Fund"
            />

            <p
              className="text-center md:tracking-wider
            mb-4 text-sm md:text-lg lg:text-2xl"
            >
              Meet the People!
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="#about">
                <MagicButton
                  title="Analysts"
                  icon={<IoAccessibilityOutline />}
                />
              </a>
              <a href="#about">
                <MagicButton
                  title="Executive Board"
                  icon={<IoAccessibilityOutline />}
                />
              </a>
              <a href="#about">
                <MagicButton title="Alumni" icon={<IoAccessibilityOutline />} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
