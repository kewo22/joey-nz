"use client";

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import "../app/globals.css";
import { Typography } from "./ui/typography";

type NavProps = {};

export function Nav(props: NavProps) {
  //   const {} = props;

  const navIconRef = useRef(null);
  const mobileNavRef = useRef(null);

  const onMenuIconClick = () => {
    if (navIconRef.current) {
      const el = navIconRef.current as HTMLDivElement;
      el.classList.toggle("open");
    }
    if(mobileNavRef.current){
      const el = mobileNavRef.current as HTMLDivElement;
      document.querySelector('body')?.classList.toggle('overflow-hidden')
      el.classList.toggle('h-0')
      el.classList.toggle('h-full')
    }
  };

  return (
    <nav className="bg-primary h-14 max-h-14 fixed top-0 left-0 w-full z-[99]">
      <div className="flex items-center justify-between h-full max-w-6xl xl:mx-auto px-5">
        <div>
          <span className="text-white font-bold">BRAND</span>
        </div>

        <ul className="hidden sm:flex flex-row gap-5">
          <li className="p-1 nav-link">
            <Typography className="font-bold">
              <Link href="/">Services</Link>
            </Typography>
          </li>
          <li className="p-1 nav-link">
            <Typography className="font-bold spa">
              <Link href="/">About</Link>
            </Typography>
          </li>
          <li className="p-1 nav-link">
            <Typography className="font-bold spa">
              <Link href="/">Compare</Link>
            </Typography>
          </li>
          <li className="p-1 nav-link">
            <Typography className="font-bold spa">
              <Link href="/">Contact</Link>
            </Typography>
          </li>
        </ul>

        <div
          id="nav-icon3"
          ref={navIconRef}
          role="button"
          onClick={onMenuIconClick}
          className="block sm:hidden"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        className="fixed top-14 right-0 w-full bg-primary z-[99] h-0 overflow-hidden transition-all ease-in-out duration-500"
        ref={mobileNavRef}
      >
        <ul className="flex flex-col items-center h-full gap-5 pt-20">
          <li className="p-1 nav-link">
            <Typography size="h4" className="font-bold">
              <Link href="/">Services</Link>
            </Typography>
          </li>
          <li className="p-1 nav-link">
            <Typography size="h4" className="font-bold">
              <Link href="/">About</Link>
            </Typography>
          </li>
          <li className="p-1 nav-link">
            <Typography size="h4" className="font-bold">
              <Link href="/">Compare</Link>
            </Typography>
          </li>
          <li className="p-1 nav-link">
            <Typography size="h4" className="font-bold">
              <Link href="/">Contact</Link>
            </Typography>
          </li>
        </ul>
      </div>
    </nav>
  );
}
