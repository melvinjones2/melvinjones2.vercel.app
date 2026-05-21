import React from 'react'
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: any; // Replace 'any' with the actual type for pageInfo
};

export default function About({ pageInfo }: Props) {
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
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-24 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-70 md:h-100 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-5 px-0 md:px-10 font-semibold">
        <h4 className="text-4xl font-semibold">
            Here is a {""} 
            <span className="underline decoration-[#0a2af7]/50">little</span>{" "}
            background
        </h4>
        <p className="text-base">
            {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}