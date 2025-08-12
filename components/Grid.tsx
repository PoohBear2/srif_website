import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import { cn } from "@/lib/utils";

const Grid = () => {
  return (
    <BentoGrid>
      {items.map(
        ({
          title,
          description,
          className,
          img,
          imgClassName,
          titleClassName,
          id,
          key,
        }) => (
          <BentoGridItem
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            id={id}
            key={id}
          />
        )
      )}
    </BentoGrid>
  );
};

const items = [
  {
    title: "1",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2",
    img: "",
    imgClassName: "",
    titleClassName: "",
    id: 1,
    key: 1,
  },
  {
    className: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
    img: "",
    imgClassName: "",
    titleClassName: "",
    id: 2,
    key: 2,
  },
  {
    title: "3",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
    img: "",
    imgClassName: "",
    titleClassName: "",
    id: 3,
    key: 3,
  },

  {
    title: "4",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
    img: "",
    imgClassName: "",
    titleClassName: "",
    id: 4,
    key: 4,
  },
  {
    title: "6",
    description: "Experience the thrill of bringing ideas to life.",
    className: "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2",
    img: "/b5.svg",
    imgClassName: "",
    titleClassName: "",
    id: 6,
    key: 6,
  },
  {
    title: "5",
    description: "Join the quest for understanding and enlightenment.",
    className: "lg:col-span-1 lg:row-span-1 mg:col-span-1 md:row-span-1",
    img: "",
    imgClassName: "",
    titleClassName: "",
    id: 5,
    key: 5,
  },
];
export default Grid;

/*
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    className: "",
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    className: "",
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    className: "",
  },
*/
