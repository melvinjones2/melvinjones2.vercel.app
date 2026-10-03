import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "@/typings";

type Props = {
  socials: Social[]
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 pt-[max(0.5rem,env(safe-area-inset-top))] px-2 pb-2 sm:p-5 flex items-center justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row flex-wrap items-center"
      >
        {/* Social Icons */}
        {socials.map((social) => (
        <SocialIcon
          key={social._id}
          url={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="size-10! sm:size-12!"
          fgColor="gray"
          bgColor="transparent"
        />
        ))}
      </motion.div>

      <motion.a
        href="#contact"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row shrink-0 items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          as="span"
          className="size-10! sm:size-12!"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.a>
    </header>
  );
}
