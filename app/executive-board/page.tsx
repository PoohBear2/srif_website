"use client";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { SparklesCore } from "@/components/ui/Sparkles";
import { TypewriterEffect } from "@/components/ui/TypeWriterEffect";
import { GrLinkedin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import AOS from "aos";

const words = [
  {
    text: "The",
  },
  {
    text: "Executive",
    className: "text-green-200",
  },
  {
    text: "Board",
    className: "text-blue",
  },
];

const boardMembers = [
  {
    name: "Charles Nguyen",
    year: "'25",
    title: "Education and Recruiting Chair, Director of Tech",
    description: "Incoming Guggenheim TMT",
    imgSrc: "Charles-Nguyen.png",
    linkedin: "https://www.linkedin.com/in/charlesn1210/",
    email: "mailto:charles_nguyen@brown.edu",
  },
  {
    name: "Adit Kadakla",
    year: "'25",
    title: "Senior Advisor",
    description: "Software Development Intern Cognizant Technologies",
    imgSrc: "Adit-Kadakla.png",
    linkedin: "https://www.linkedin.com/in/adit-kadakia-b668a3157/",
    email: "mailto:adit_kadakia@brown.edu",
  },
  {
    name: "Daijin Dorsey-Reyes",
    year: "'26",
    title: "Portfolio Manager",
    description: "EY-Parthenon Macro Strategy '24, Incoming Blackrock '25",
    imgSrc: "DDR.png",
    linkedin:
      "https://www.linkedin.com/in/daijin-dorsey-reyes-693613198/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "mailto:Daijinace@gmail.com",
  },
  {
    name: "Catherine Jia",
    year: "'26",
    title: "Education and Recruiting Chair, Director of Engagement",
    description: "Health & Human Biology, Applied Mathematics - Economics",
    imgSrc: "CJ.png",
    linkedin: "https://www.linkedin.com/in/catherine-jia-68a920216/",
    email: "mailto:catherine_jia@brown.edu",
  },
  {
    name: "David Person",
    year: "'26",
    title: "Industrials Sector Head",
    description: "Marblegate '24",
    imgSrc: "David-Person.png",
    linkedin: "https://www.linkedin.com/in/david-person-046247268/",
    email: "mailto:david_person@brown.edu",
  },
  {
    name: "Katrina Sun",
    year: "'26",
    title: "Technology, Media, and Telecom Sector Head",
    description: "Business Development Intern at Porte Inc.",
    imgSrc: "Katrina-Sun.png",
    linkedin: "https://www.linkedin.com/in/katrina-sun-289912184/",
    email: "mailto:katrina_sun@brown.edu",
  },
  {
    name: "Tanay Subramanian",
    year: "'26",
    title: "Consumer and Retail Sector Head",
    description: "Axiom Health SWE '23, Capital One Data Science '24",
    imgSrc: "Tanay-Subramanian.png",
    linkedin: "https://www.linkedin.com/in/tanay-subramanian/",
    email: "mailto:tanay_subramanian@brown.edu",
  },
  {
    name: "Shana Xia",
    year: "'26",
    title: "Education and Recruiting Chair",
    description:
      "Bank of America GCM '24, Miami HEAT Strategy & Product Intern '23",
    imgSrc: "Shana-Xia.png",
    linkedin: "https://www.linkedin.com/in/shana-xia/",
    email: "mailto:shana_xia@brown.edu",
  },
  {
    name: "Vivian Chiu",
    year: "'27",
    title: "Healthcare Sector Head",
    description: "Parcrest Advisors Investment Banking Fall '24",
    imgSrc: "Vivian-Chiu.png",
    linkedin: "https://www.linkedin.com/in/vivian-chiu0409/",
    email: "mailto:si-wai_chiu@brown.edu",
  },
  {
    name: "Russell Chiu",
    year: "'27",
    title: "Energy and Utilities Sector Head",
    description: "Forgepoint Capital '24, Incoming The Riverside Company '25",
    imgSrc: "Russell-Chiu.png",
    linkedin: "https://www.linkedin.com/in/russell-chiu-180424295/",
    email: "mailto:russell_chiu@brown.edu",
  },
  {
    name: "Grace Yang",
    year: "'27",
    title: "Financials and RE Sector Head",
    description: "NIO Capital '24",
    imgSrc: "Grace-Yang.png",
    linkedin: "https://www.linkedin.com/in/grace-yang-9120ba271/",
    email: "mailto:grace_yang@brown.edu",
  },
  {
    name: "Max Boyang",
    year: "'27",
    title: "Social Chair",
    description: "Venture Capital Analyst at Tullis Health Investors '24",
    imgSrc: "Max-Boyang.png",
    linkedin: "https://www.linkedin.com/in/max-boyang/",
    email: "mailto:max_boyang@brown.edu",
  },
  {
    name: "Jerry Zhou",
    year: "'28",
    title: "First-Year Representative",
    description:
      "Fermilab '23, Incoming Software/Data Infrastructure Engineer at Statefarm",
    imgSrc: "Jerry-Zhou.png",
    linkedin: "https://www.linkedin.com/in/jerry-zhou-b76a3b225/",
    email: "mailto:jerry_zhou@brown.edu",
  },
];

const presidents = [
  {
    name: "Jefferey Cai",
    year: "'25",
    title: "Co-President",
    description: "Incoming Business Analyst at McKinsey & Company",
    imgSrc: "Jefferey-Cai.png",
    linkedin: "https://www.linkedin.com/in/jefferey-cai-9b4b07189/",
    email: "mailto:jefferey_cai@brown,edu",
  },
  {
    name: "Scott James",
    year: "'25",
    title: "Co-President",
    description: "Incoming Investment Banking Analyst at William Blair",
    imgSrc: "Scott-James.png",
    linkedin: "",
    email: "mailto:",
  },
];

const ExecBoard = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="bg-black-100">
      {/* Header Section */}
      <div
        className="h-[30rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md"
        data-aos="fade-up"
      >
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

      <div
        data-aos="fade-up"
        className="grid grid-cols-2 gap-8 mt-60 justify-items-center"
      >
        {presidents.map((member, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="col-span-1 flex flex-col items-center mt-16"
          >
            {/* Special case content for index === 12 */}
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
            <div className="flex justify-center items-center gap-4 mt-5">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <GrLinkedin className="text-3xl" />
              </a>
              <a
                href={member.email}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <MdEmail className="text-3xl" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-3 gap-8 mt-40 justify-items-center">
        {boardMembers.map((member, index) =>
          index === 12 ? (
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
              <div className="flex justify-center items-center gap-4 mt-auto mb-20">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12"
                >
                  <GrLinkedin className="text-3xl" />
                </a>
                <a
                  href={member.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12"
                >
                  <MdEmail className="text-3xl" />
                </a>
              </div>
            </div>
          ) : (
            <div
              data-aos="fade-up"
              key={index}
              className="flex flex-col items-center"
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
                {member.name}{" "}
                <span className="text-pink-100">{member.year}</span>
              </h1>
              <p className="text-center font-mono text-green-100 mb-3 lg:text-xl max-w-full">
                {member.title}
              </p>
              <p className="text-center font-mono text-pink-100 mb-5">
                {member.description}
              </p>
              <div className="flex justify-center items-center gap-4 mt-auto mb-20">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12"
                >
                  <GrLinkedin className="text-3xl" />
                </a>
                <a
                  href={member.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12"
                >
                  <MdEmail className="text-3xl" />
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ExecBoard;
