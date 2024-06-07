// "use client";

import Image from "next/image";

import { Typography } from "./ui/typography";

import myAnswer from "../public/images/my_answer_multi-col.svg";

import "../app/globals.css";

type BannerProps = {};

export function Banner(props: BannerProps) {
  //   const {} = props;
  // max-w-6xl xl:mx-auto
  
  return (
    <section className="block sm:flex sm:flex-row sm:gap-10 xl:gap-28  py-10 sm:py-20 px-5 mt-14">
      <div className="flex flex-col justify-center gap-5">
        <Typography size={"banner"} variant={"banner"}>
          Find better service providers in NZ under 4 minutes.
        </Typography>

        <Typography size={"banner_sub"} variant={"banner_sub"}>
          Compare plans & providers to find best deals for you!
        </Typography>

        <div className="flex flex-row items-center border gap-2 p-2 rounded-md">
          <span className="material-symbols-outlined text-primary text-4xl">
            home_pin
          </span>
          <input
            type="text"
            placeholder="Start typing your address"
            className="outline-none overflow-hidden flex-[1_1_auto]"
          />
          <button className="bg-primary text-white p-2 rounded-md">
            Compare
          </button>
        </div>
      </div>

      <div
        className="hidden sm:block"
        style={{ position: "relative", width: "700px", height: "auto" }}
      >
        <Image
          src={myAnswer}
          alt="Picture of the author"
          sizes="300px"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </section>
  );
}
