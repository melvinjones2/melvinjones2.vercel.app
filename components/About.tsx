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
        className="flex flex-col relative sm:h-screen text-center md:text-left md:flex-row max-w-7xl md:px-5 xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
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
        className="space-y-5 pb-0 md:pb-0 flex-shrink-0 w-50 h-50 rounded-full object-cover md:rounded-lg md:mt-0 sm:w-60 sm:h-60 md:w-64 md:h-95 xl:w-[400px] xl:h-[550px] justify-center"
      />

      <div className="space-y-2 md:space-y-3 pt-5 px-5 md:px-10">
        <h4 className="px-3 md:px-0 text-2xl md:text-4xl font-semibold">
            Here is a {""} 
            <span className="underline decoration-[#0a2af7]/50">little</span>{" "}
            background
        </h4>
        {/* Add if long description is required...
        overflow-y-scroll scrollbar-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0a2af7]/80 */}
        <p className="text-md md:px-0 md:text-lg lg:text-xl leading-snug text-base tracking-tight md:tracking-normal overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0a2af7]/80 max-h-70 sm:max-h-65 lg:max-h-70 xl:max-h-75">
            {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}