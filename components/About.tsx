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
      className="relative flex flex-col h-screen md:text-left md:flex-row max-w-7xl px-10 justify-center gap-y-6 md:gap-x-16 mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] justify-center text-gray-500 text-2xl">
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
        className="flex-shrink-0 w-48 h-48 rounded-full object-cover sm:w-60 sm:h-60 md:w-64 md:h-80 xl:w-[350px] xl:h-[480px] md:rounded-lg"
      />

      <div className="space-y-2 md:space-y-3 lg:px-10 text-center md:text-left">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a {""}
          <span className="underline decoration-[#0a2af7]/50">little</span>{" "}
          background
        </h4>
        {/* Add if long description is required...
        overflow-y-scroll scrollbar-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0a2af7]/80 */}
        <p className="text-md md:text-lg lg:text-xl leading-snug text-base tracking-tight md:tracking-normal overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0a2af7]/80 max-h-70 sm:max-h-65 lg:max-h-70 xl:max-h-75">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}