// "use client";

import { Typography } from "./ui/typography";

import compareInMin from "../public/images/compare-in-min-multi-c.svg";
import needs from "../public/images/needs-multi-c.svg";
import saveMoney from "../public/images/save-money-multi-c.svg";

import "../app/globals.css";
import Image from "next/image";

type BannerProps = {};

export function ComparisonMadeEasy(props: BannerProps) {
  //   const {} = props;

  const items = [
    {
      title: "What are your needs?",
      description:
        "Let us know what you're looking for and your needs. We'll then search 100s of products to find the ones that are best for you. Research and compare companies all in one place. Right here.",
      image: needs,
      alt: "img-1",
    },
    {
      title: "Compare in minutes",
      description:
        "Let us know what you're looking for and your needs. We'll then search 100s of products to find the ones that are best for you. Research and compare companies all in one place. Right here.",
      image: compareInMin,
      alt: "img-1",
    },
    {
      title: "Switch and Save",
      description:
        "Let us know what you're looking for and your needs. We'll then search 100s of products to find the ones that are best for you. Research and compare companies all in one place. Right here.",
      image: saveMoney,
      alt: "img-1",
    },
  ];

  return (
    <section className="flex flex-col gap-5 py-16 overflow-hidden">
      <Typography size="h1" className="text-center">
        Comparison Made Easy
      </Typography>
      <div className="flex flex-col sm:flex-row gap-10 lg:gap-20 max-w-6xl xl:mx-auto overflow-auto p-5">
        {items.map((item, i) => {
          return (
            <div
              key={`comparison-${i}`}
              className="flex flex-col items-center gap-5"
            >
              <Image src={item.image} alt={item.alt} />
              <div className="flex flex-col flex-1 justify-between items-center gap-1">
                <Typography size={"h3"} className="text-center">
                  {item.title}
                </Typography>
                <Typography className="text-justify">
                  {item.description}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
