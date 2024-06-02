// "use client";

import { Typography } from "./ui/typography";

import routerSvg from "../public/images/router-primary-sm.svg";
import electricitySvg from "../public/images/electricity-primary-sm.svg";
import travelSvg from "../public/images/travel-insurance-primary-sm.svg";
import carSvg from "../public/images/car-insurance-primary-sm.svg";
import mobilePlans from "../public/images/mobile-plans-primary-sm.svg";

import "../app/globals.css";
import Image from "next/image";

type BannerProps = {};

export function Services(props: BannerProps) {
  //   const {} = props;

  const services = [
    {
      service: "Broadband",
      image: routerSvg,
      alt: "broadband-img",
    },
    {
      service: "Power",
      image: electricitySvg,
      alt: "power-img",
    },
    {
      service: "Travel Insurance",
      image: travelSvg,
      alt: "travel-img",
    },
    {
      service: "Car Insurance",
      image: carSvg,
      alt: "car-img",
    },
    {
      service: "Mobile Plans",
      image: mobilePlans,
      alt: "mobile-img",
    },
  ];

  return (
    <section className="flex flex-col gap-5 bg-secondary py-16 overflow-hidden">
      <Typography size="h1" className="text-center">
        Our Services
      </Typography>
      <div className="flex flex-row gap-5 max-w-6xl xl:mx-auto overflow-auto p-5">
        {services.map((service, i) => {
          return (
            <div
              key={`service-${i}`}
              className="flex flex-col items-center justify-center min-w-48 w-48 p-8 rounded-md border-2 border-primary gap-5 hover:bg-white transition-all ease-in-out cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.alt}
                priority
                width={54}
                height={54}
              />
              <Typography
                variant="primary"
                className="font-bold uppercase text-center"
              >
                {service.service}
              </Typography>
            </div>
          );
        })}
      </div>
    </section>
  );
}
