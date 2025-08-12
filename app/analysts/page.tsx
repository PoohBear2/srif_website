import { SparklesCore } from "@/components/ui/Sparkles";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/TypeWriterEffect";
import { WavyBackground } from "@/components/ui/Wavy";
import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const words = [
  {
    text: "The",
  },
  {
    text: "Analysts",
    className: "text-green-200",
  },
];

const analyst = [
  {
    name: "Louise Weng",
    year: "'25",
    title: "Consumer and Retail",
    description: "",
    imgSrc: "Default.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Alexandra Tzou",
    year: "'26",
    title: "Consumer and Retail",
    description: "",
    imgSrc: "Default.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Sidhant Sharma",
    year: "'27",
    title: "Consumer and Retail",
    description: "",
    imgSrc: "Default.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Zamora McBride",
    year: "'27",
    title: "Consumer and Retail",
    description: "",
    imgSrc: "Default.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Sam Purcell",
    year: "'27",
    title: "Energy and Utilities",
    description: "",
    imgSrc: "Default.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Yu Lee Chung",
    year: "'25",
    title: "Energy and Utilities",
    description: "",
    imgSrc: "Default.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Angelina Lieberman",
    year: "'27",
    title: "Energy and Utilities",
    description: "Fun Fact: I love to go on long runs and travel!",
    imgSrc: "Angelina-Lieberman.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Russell Chiu",
    year: "'27",
    title: "Energy and Utilities",
    description: "Fun Fact: Former ski racer for 7 years",
    imgSrc: "Russell-Chiu.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Ziyue (Kelly) Yang",
    year: "'26",
    title: "Financials and Real Estate",
    description: "",
    imgSrc: "Default.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Justin Blake",
    year: "'27",
    title: "Financials and Real Estate",
    description: "Fun Fact: I don't eat anything with sauce",
    imgSrc: "Justin-Blake.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Carl Dinshaw",
    year: "'27",
    title: "Financials and Real Estate",
    description: "Fun Fact: I'm the only Cleveland Browns fan from India",
    imgSrc: "Carl-Dinshaw.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Sylvia Cheng",
    year: "'27",
    title: "Financials and Real Estate",
    description: "Fun Fact: I have a twin brother!",
    imgSrc: "Sylvia-Cheng.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Timothy Chirkov",
    year: "'26",
    title: "Healthcare",
    description: "",
    imgSrc: "Default.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Sophia Li",
    year: "'27",
    title: "Healthcare",
    description: "Fun Fact: I'm a huge F1 fan!",
    imgSrc: "Sophia-Li.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Amy Mao",
    year: "'27",
    title: "Healthcare",
    description: "Fun Fact: I sometimes sleep talk and sleep walk!",
    imgSrc: "Amy-Mao.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Ruchika Rashya Bhuyan",
    year: "'27",
    title: "Healthcare",
    description: "Fun Fact: I can speak four languages!",
    imgSrc: "Ruchika-Bhuyan.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Nicholas Gaensler",
    year: "'26",
    title: "Industrials",
    description: "",
    imgSrc: "Default.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Rhea Lambah",
    year: "'26",
    title: "Industrials",
    description: "",
    imgSrc: "Default.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Grace Yang",
    year: "'27",
    title: "Industrials",
    description: "",
    imgSrc: "Default.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Tiffany Kuo",
    year: "'26",
    title: "Industrials",
    description: "Fun Fact: I've lived in 7 different cities!",
    imgSrc: "Tiffany-Kuo.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Kylash Ganesh",
    year: "'26",
    title: "Technology, Media, Telecom",
    description: "",
    imgSrc: "Default.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Mandy Zhang",
    year: "'26",
    title: "Technology, Media, Telecom",
    description: "",
    imgSrc: "Default.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Nick Kanefield",
    year: "'27",
    title: "Technology, Media, Telecom",
    description: "Fun Fact: I love to write essays!",
    imgSrc: "Nicholson-Kanefield.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Mary Ryan",
    year: "'27",
    title: "Technology, Media, Telecom",
    description: "Fun Fact: I love to run and take photos in my free time!",
    imgSrc: "Mary-Ryan.png",
    linkedin: "",
    email: "mailto:",
  },
  {
    name: "Ryan-Lalani",
    year: "'28",
    title: "Energy and Utlities",
    description: "",
    imgSrc: "Ryan-Lalani.png",
    linkedin: "",
    email: "mailto:",
  },
];

const analysts = () => {
  return (
    <div className="bg-black-100">
      <div className="h-[30rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <TypewriterEffect
          words={words}
          className="lg:text-6xl md:text-4xl sm:text-3xl text-3xl mt-80 font-bold text-center relative z-20"
        />

        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black-100 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-80 justify-items-center ml-10 mr-10 pb-10">
        {analyst.map((member, index) =>
          index == 24 ? (
            <div key={index} className="col-span-3 flex flex-col items-center">
              {/* Special case content for index === 12 */}
              <div className="items-center">
                <img
                  src={member.imgSrc}
                  className="rounded-xl h-[300px] w-[220px] object-cover border-2 border-white"
                  alt={member.name}
                />
              </div>
              <h1 className="md:text-xl mt-5 text-center font-mono text-green-300">
                {member.name}{" "}
                <span className="text-pink-100">{member.year}</span>
              </h1>
              <p className="text-center font-mono text-green-100 mb-3 lg:text-xl max-w-full">
                {member.title}
              </p>
              <p className="text-center font-mono text-pink-100 mb-5">
                {member.description}
              </p>
            </div>
          ) : (
            <div key={index} className="flex flex-col items-center">
              {/* Default case content */}
              <div className="items-center">
                <img
                  src={member.imgSrc}
                  className="rounded-xl h-[300px] w-[220px] object-cover border-2 border-white"
                  alt={member.name}
                />
              </div>
              <h1 className="md:text-xl mt-5 text-center font-mono text-green-300">
                {member.name}{" "}
                <span className="text-pink-100">{member.year}</span>
              </h1>
              <p className="text-center font-mono text-green-100 mb-3 lg:text-xl max-w-full">
                {member.title}
              </p>
              <p className="text-center font-mono text-pink-100 mb-5">
                {member.description}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default analysts;
