// "use client";

import Image from "next/image";

import { Typography } from "./ui/typography";

import myAnswer from "../public/images/my_answer.svg";

import "../app/globals.css";

type FooterProps = {};

export function Footer(props: FooterProps) {
  //   const {} = props;

  return (
    <section className="flex flex-col sm:flex-row justify-around gap-5 sm:gap-0 p-10 bg-slate-200">
      <div>
        <span className="font-bold">BRAND</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 sm:gap-16">
        <div>
          <Typography size="h4">Services</Typography>
          <Typography>Broadband</Typography>
          <Typography>Power</Typography>
          <Typography>Travel Insurance</Typography>
          <Typography>Car Insurance</Typography>
          <Typography>Mobile</Typography>
        </div>

        <div>
          <Typography size="h4">About company</Typography>
          <Typography>About</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Terms & Conditions</Typography>
        </div>

        <div>
          <Typography size="h4">Our partners</Typography>
          <Typography>Glimp</Typography>
          <Typography>Zippifi</Typography>
          <Typography>Life Insurance NZ</Typography>
          <Typography>Mobile Plans NZ</Typography>
        </div>
      </div>
    </section>
  );
}
