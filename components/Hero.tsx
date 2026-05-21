import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";
import { PageInfo } from "@/pages/api/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo.name}`,
      `Welcome to My Portfolio!`,
      `I hope you enjoy your visit!`,
      `:)`,
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-40 w-40 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
        width={128}
        height={128}
      />
      <div className="z-10">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#0a2af7" />
        </h1>
      </div>
      <div className="pt-5">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#Skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}
