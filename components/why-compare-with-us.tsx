// "use client";

import { Typography } from "./ui/typography";

import mobilePlans from "../public/images/mobile-plans-primary-sm.svg";

import "../app/globals.css";
import Image from "next/image";

type BannerProps = {};

export function WhyCompareWithUs(props: BannerProps) {
  //   const {} = props;

  const items = [
    {
      title: "Save time & money",
      description:
        "It only takes a few seconds to compare internet service providers in NZ, products, and plans.",
      image: mobilePlans,
      alt: "img-1",
    },
    {
      title: "Best place to compare",
      description:
        "Our unlimited broadband options are free and online! All you have to do is choose.",
      image: mobilePlans,
      alt: "img-1",
    },
    {
      title: "Partnered with the best",
      description:
        "We work closely with industry leaders in the utilities, finance, and insurance sectors",
      image: mobilePlans,
      alt: "img-1",
    },
    {
      title: "Kiwi trust us",
      description:
        "Featured on stuff, nzherald, Solarcity, Truenet, nbr and many more.",
      image: mobilePlans,
      alt: "img-1",
    },
  ];

  return (
    <section className="flex flex-col gap-5 py-16 overflow-hidden bg-secondary">
      <Typography size="h1" className="text-center">
        Why compare with us ?
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 max-w-6xl xl:mx-auto overflow-auto p-5">
        {items.map((item, i) => {
          return (
            <div key={`why-compare-img-${i}`} className="card1">
              <Typography size="h4">{item.title}</Typography>
              <Typography>{item.description}</Typography>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
