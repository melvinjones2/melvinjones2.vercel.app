import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo.name}.`,
      `Welcome to My Portfolio!`,
      `I hope you enjoy your visit.`,
      `:)`,
    ],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div className="relative h-dvh flex flex-col space-y-8 items-center justify-center text-center overflow-hidden px-4 z-5">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 sm:h-40 sm:w-40 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt={pageInfo?.name}
      />
      <div className="z-10 w-full">
        <h2 className="text-xs sm:text-sm uppercase text-gray-500 pb-1 tracking-[6px] pl-[6px] sm:tracking-[10px] sm:pl-[10px] md:tracking-[15px] md:pl-[15px] text-center">
          {pageInfo?.role}
        </h2>
        {/* Reserve two lines on phones so the buttons don't jump as the typewriter text wraps */}
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold px-1 min-h-[2lh] sm:min-h-0">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#0a2af7" />
        </h1>
        <nav className="pt-5 z-10 flex flex-wrap justify-center gap-2">
          <Link href="#about" className="heroButton">ABOUT</Link>
          <Link href="#experience" className="heroButton">EXPERIENCE</Link>
          <Link href="#skills" className="heroButton">SKILLS</Link>
          <Link href="#projects" className="heroButton">PROJECTS</Link>
        </nav>
      </div>
    </div>
  );
}
