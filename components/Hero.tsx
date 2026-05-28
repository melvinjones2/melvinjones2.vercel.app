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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-5">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-40 w-40 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      />
      <div className="z-10">
        <h2 className="text-sm uppercase text-gray-500 pb-1 tracking-[10px] md:tracking-[15px] text-center justify-center">
          {pageInfo?.role}
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#0a2af7" />
        </h1>
        <div className="pt-5 z-10">
          <Link href="#about">
            <button className="heroButton">ABOUT</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">EXPERIENCE</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">SKILLS</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">PROJECTS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
