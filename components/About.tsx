import React from 'react'
import { motion } from 'framer-motion';
import Image from "next/image";
import aboutPic from "../public/dog-butterfly-4102437754.gif";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 1.5, }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={aboutPic.src}
        className="-mb-24 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-5 px-0 md:px-10 font-semibold">
        <h4 className="text-4xl font-semibold">
            Here is a {""} 
            <span className="underline decoration-[#0a2af7]/50">little</span>{" "}
            background
        </h4>
        <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            voluptate, doloremque, dolores, dolorum doloremque dolores dolorum
            doloremque dolores dolorum doloremque dolores dolorum doloremque
            dolores dolorum doloremque dolores dolorum doloremque dolores
            dolorum doloremque dolores dolorum doloremque dolores dolorum
            doloremque dolores dolorum doloremque dolores dolorum doloremque
            dolores dolorum doloremque dolores dolorum doloremque dolores
            dolorum doloremque dolores dolorum doloremque dolores dolorum
            doloremque dolores dolorum doloremque dolores dolorum doloremque
            dolores dolorum doloremque dolores dolorum doloremque dolores
            dolorum doloremque dolores dolorum doloremque dolores dolorum
            doloremque dolores dolorum doloremque dolores dolorum.
        </p>
      </div>
    </motion.div>
  );
}