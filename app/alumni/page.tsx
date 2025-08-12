import { SparklesCore } from "@/components/ui/Sparkles";
import { TypewriterEffect } from "@/components/ui/TypeWriterEffect";
import React from "react";

const words = [
  {
    text: "Our",
  },
  {
    text: "Alumni",
    className: "text-green-200",
  },
];

const alum = [
  {
    name: "Marina Du",
    year: "'23",
    title: "Former Education, Recruiting, Outreach Chair",
    description: "Goldman Sachs Investment Banking",
    imgSrc: "Marina-Du.png",
  },
  {
    name: "Jackson Largen",
    year: "'23",
    title: "Former President",
    description: "William Blair Investment Banking",
    imgSrc: "Jackson-Largen.png",
  },
  {
    name: "Syon Khosla",
    year: "'23",
    title: "Former Portfolio Manager",
    description: "Piper Sandler Investment Banking",
    imgSrc: "Syon-Khosla.png",
  },
  {
    name: "Chloe Chung",
    year: "'22",
    title: "Former Analyst",
    description: "Goldman Sachs Investment Banking",
    imgSrc: "Chloe-Chung.png",
  },
  {
    name: "Lara Mikhail",
    year: "'22",
    title: "Former President",
    description: "Private Equity at JP Morgan Asset Management",
    imgSrc: "Lara-Mikhail.png",
  },
  {
    name: "Davis Lister",
    year: "'22",
    title: "Former President",
    description: "Goldman Sachs Global Markets",
    imgSrc: "Davis-Lister.png",
  },
  {
    name: "Melissa Cui",
    year: "'22",
    title: "Former President",
    description: "Goldman Sachs Investment Banking",
    imgSrc: "Melissa-Cui.png",
  },
  {
    name: "Marin Furuyama",
    year: "'22",
    title: "Former ESG Chair",
    description: "Citi Bank Treasury and Trade Solutions",
    imgSrc: "Marin-Furuyama.png",
  },
  {
    name: "Sarang Mani",
    year: "‘21",
    title: "Former President",
    description: "Goldman Sachs Investment Banking",
    imgSrc: "Sarang-Mani.png",
  },
  {
    name: "Annabelle Hutchinson",
    year: "'21",
    title: "Former ESG Chair",
    description: "JP Morgan Investment Banking",
    imgSrc: "Annabelle-Hutchinson.png",
  },
  {
    name: "Arden Orwicz",
    year: "'21",
    title: "Former Healthcare Analyst",
    description: "JP Morgan Asset Management",
    imgSrc: "Arden-Orwicz.png",
  },
  {
    name: "Anatoly Brevnov",
    year: "'21",
    title: "Former TMT Analyst",
    description: "McKinsey Digital Business Consulting",
    imgSrc: "Anatoly-Brevnov.png",
  },
  {
    name: "Richard Huang",
    year: "'20",
    title: "Former President",
    description: "PJ Solomon - M&A Investment Banking Analyst",
    imgSrc: "Richard-Huang.png",
  },
  {
    name: "Devyn Collado",
    year: "'20",
    title: "Former Outreach Chair",
    description: "Accenture - Management Consulting Analyst",
    imgSrc: "Devyn-Collado.png",
  },
  {
    name: "Ryan Pade",
    year: "'20",
    title: "Former TMT Analyst",
    description: "Credit Suisse - TMT Investment Banking Analyst",
    imgSrc: "Ryan-Pade.png",
  },
  {
    name: "Georgia Fox",
    year: "'20",
    title: "Former Portfolio Manager",
    description: "Morgan Stanley - Wealth Management Analyst",
    imgSrc: "Georgia-Fox.png",
  },
  {
    name: "Amy Xu",
    year: "'20",
    title: "Former Energy & Utilities Analyst",
    description: "Credit Suisse - Risk Analyst ",
    imgSrc: "Amy-Xu.png",
  },
  {
    name: "Amanda Weiss",
    year: "'19",
    title: "Former President",
    description: "Goldman Sachs - TMT Investment Banking Analyst",
    imgSrc: "Amanda-Weiss.png",
  },
  {
    name: "Edwin Farley",
    year: "'19",
    title: "Former President",
    description: "Goldman Sachs - Securities Strats Analyst",
    imgSrc: "Edwin-Farley.png",
  },
  {
    name: "Anton Malin",
    year: "'19",
    title: "Former ESG Chair",
    description: "McKinsey & Co. - Business Analyst",
    imgSrc: "Anton-Malin.png",
  },
  {
    name: "Alexa Clark",
    year: "'19",
    title: "Former ESG Chair",
    description: "Bain & Co. - Associate Consultant",
    imgSrc: "Alexa-Clark.png",
  },
  {
    name: "Penelope Shao",
    year: "'19",
    title: "Former Education & Recruiting Chair",
    description:
      "Goldman Sachs - Investment Grade Syndicate Investment Banking Analyst",
    imgSrc: "Penelope-Shao.png",
  },
  {
    name: "Palak Goel",
    year: "'19",
    title: "Former ESG Chair",
    description: "Microsoft - Program Manager",
    imgSrc: "Palak-Goel.png",
  },
  {
    name: "James Grossman",
    year: "'18",
    title: "Former President",
    description: "Barclays - Consumer & Retail Investment Banking Analyst",
    imgSrc: "James-Grossman.png",
  },
  {
    name: "Conor Eckert",
    year: "'18",
    title: "Former Education & Recruiting Chair",
    description: "Barclays - Healthcare Investment Banking Analyst",
    imgSrc: "Conor-Eckert.png",
  },
  {
    name: "Douglas Saper",
    year: "'18",
    title: "Former TMT Analyst",
    description: "Moelis & Co.- M&A/Restructuring  Investment Banking Analyst",
    imgSrc: "Douglas-Saper.png",
  },
  {
    name: "Susan Liu",
    year: "'18",
    title: "Former Education & Recruiting Chair",
    description: "Pinterest - Software Engineer",
    imgSrc: "Susan-Liu.png",
  },
  {
    name: "Linde Chen",
    year: "'18",
    title: "Former ESG Chair",
    description: "IBM - Data Scientist & Associate Consultant",
    imgSrc: "Linde-Chen.png",
  },
  {
    name: "Ethan Frieder",
    year: "'18",
    title: "Former Portfolio Manager",
    description: "Harris Williams & Co - TMT Investment Banking Analyst",
    imgSrc: "Ethan-Frieder.png",
  },
  {
    name: "Andrew Sheinfeld",
    year: "'17",
    title: "Former President",
    description: "Point72 - Research Analyst",
    imgSrc: "Andrew-Sheinfeld.png",
  },
  {
    name: "Stephen Kim",
    year: "'17",
    title: "Former President",
    description: "BC Partners - Private Equity Associate",
    imgSrc: "Stephen-Kim.png",
  },
  {
    name: "Taylor Casey",
    year: "'17",
    title: "Former Finance Chair",
    description: "Baird - Investment Banking Analyst",
    imgSrc: "Taylor-Casey.png",
  },
  {
    name: "Guillermo Grimaldo",
    year: "'17",
    title: "Former Education & Recruiting Chair",
    description: "William Blair - Tech Investment Banking Analyst",
    imgSrc: "Guillermo-Grimaldo.png",
  },
  {
    name: "Ekaterina Knyazkova",
    year: "'17",
    title: "Former President",
    description: "J.P. Morgan - Pharma Equity Research Analyst",
    imgSrc: "Ekaterina-Knyazkova.png",
  },
  {
    name: "Stephen Skubina",
    year: "'17",
    title: "Former ESG Chair",
    description: "Morgan Stanley - Corporate Derivatives Analyst",
    imgSrc: "Stephen-Skubina.png",
  },
  {
    name: "Paul Cichocki",
    year: "'17",
    title: "Former Portfolio Manager",
    description: "EY Parthenon- Private Equity Associate Consultant",
    imgSrc: "Paul-Cichocki.png",
  },
  {
    name: "Sophie Purdom",
    year: "'16",
    title: "Former President",
    description: "Bain & Co. - Associate Consultant",
    imgSrc: "Sophie-Purdom.png",
  },
  {
    name: "Nicole Shimer",
    year: "'16",
    title: "Former President",
    description: "Insight Venture Partners - Investments Analyst",
    imgSrc: "Nicole-Shimer.png",
  },
  {
    name: "Kian Ivey",
    year: "'16",
    title: "Former Finance Chair",
    description: "Ares Management - Alternative Credit Associate",
    imgSrc: "Kian-Ivey.png",
  },
];

const remainingTwo = [
  {
    name: "Kailani Acosta",
    year: "'16",
    title: "Former ESG Chair",
    description: "PHD Candidate at Columbia University ",
    imgSrc: "Kailani-Acosta.png",
  },
  {
    name: "Spencer Traver",
    year: "'15",
    title: "Former President",
    description: "Starwood Capital Group - Acquisitions Associate",
    imgSrc: "Spencer-Traver.png",
  },
];

const alumni = () => {
  return (
    <div className="bg-black-100" data-aos="fade-up">
      <div className="h-[30rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <TypewriterEffect
          words={words}
          className="lg:text-6xl md:text-4xl sm:text-3xl text-3xl mt-80 font-bold text-center text-white relative z-20"
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
        {alum.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            data-aos="fade-up"
          >
            {/* Default case content */}
            <div className="items-center">
              <img
                src={member.imgSrc}
                className="rounded-xl h-[300px] w-[220px] object-cover border-2 border-white"
                alt={member.name}
              />
            </div>
            <h1 className="md:text-xl mt-5 text-center font-mono text-green-300">
              {member.name} <span className="text-pink-100">{member.year}</span>
            </h1>
            <p className="text-center font-mono text-green-100 mb-3 lg:text-xl max-w-full">
              {member.title}
            </p>
            <p className="text-center font-mono text-pink-100 mb-5">
              {member.description}
            </p>
          </div>
        ))}
      </div>

      <div
        className="grid grid-cols-2 gap-8 justify-items-center ml-10 mr-10 pb-10"
        data-aos="fade-up"
      >
        {remainingTwo.map((member, index) => (
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
              {member.name} <span className="text-pink-100">{member.year}</span>
            </h1>
            <p className="text-center font-mono text-green-100 mb-3 lg:text-xl max-w-full">
              {member.title}
            </p>
            <p className="text-center font-mono text-pink-100 mb-[25px]">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default alumni;
