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

  const onMenuIconClick = () => {
    if (navIconRef.current) {
      const el = navIconRef.current as HTMLDivElement;
      el.classList.toggle("open");
    }
  };

  return (
    <nav className="bg-primary h-14 max-h-14 fixed top-0 left-0 w-full z-[99]">
      <div className="flex items-center justify-center sm:justify-between h-full max-w-6xl xl:mx-auto px-5">
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
      </div>

      <div
        id="nav-icon3"
        ref={navIconRef}
        role="button"
        onClick={onMenuIconClick}
        className="hidden"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
