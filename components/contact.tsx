// "use client";

import Image from "next/image";

import { Typography } from "./ui/typography";

import myAnswer from "../public/images/my_answer.svg";

import "../app/globals.css";
import { Button } from "./ui/button";

type ContactProps = {};

export function Contact(props: ContactProps) {
  //   const {} = props;

  return (
    <section className="flex flex-col py-16">
      <Typography size="h1" className="text-center">
        Contact us
      </Typography>

      <div className="p-5 flex flex-col sm:flex-row gap-5 max-w-6xl xl:mx-auto">
        <div className="flex flex-col gap-5 flex-[1_1_50%]">
          <Typography className="p-0 lg:pr-28">
            Whether you are a consumer with a query relating to one of our
            websites or a service provider looking to partner with NZ Compare to
            generate customers, we would love to hear from you. Please get in
            touch and a member of the team will be happy to help.
          </Typography>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <span className="material-symbols-outlined text-primary text-2xl">
                location_on
              </span>
              <Typography>
                Level 1, 25 Exmouth Street, Eden Terrace, Auckland 1021
              </Typography>
            </div>
            <div className="flex gap-2 items-center">
              <span className="material-symbols-outlined text-primary text-2xl">
                call
              </span>
              <Typography>
                <a href="tel:+6440987654">+64 4 098 7654</a>
              </Typography>
            </div>
            <div className="flex gap-2 items-center">
              <span className="material-symbols-outlined text-primary text-2xl">
                alternate_email
              </span>
              <Typography>
                <a href="mailto: contact@brand.com">contact@brand.com</a>
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex-[1_1_50%]">
          <form className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label>
                <Typography>Name</Typography>
              </label>
              <input
                type="text"
                className="outline-none bg-slate-200 py-2 px-4 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label>
                <Typography>Email</Typography>
              </label>
              <input
                type="email"
                className="outline-none bg-slate-200 py-2 px-4 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label>
                <Typography>Message</Typography>
              </label>
              <textarea
                className="outline-none bg-slate-200 py-2 px-4 rounded"
                rows={5}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
