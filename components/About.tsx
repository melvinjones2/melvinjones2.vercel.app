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
      className="relative flex flex-col min-h-dvh md:text-left md:flex-row max-w-7xl px-6 sm:px-10 pt-32 pb-16 justify-center gap-y-6 md:gap-x-16 mx-auto items-center"
    >
      <h3 className="sectionTitle">
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
        alt={pageInfo?.name}
        className="flex-shrink-0 w-40 h-40 rounded-full object-cover sm:w-60 sm:h-60 md:w-70 md:h-90 xl:w-[400px] xl:h-[500px] md:rounded-lg"
      />

      <div className="space-y-2 md:space-y-3 lg:px-10 text-center md:text-left">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a {""}
          <span className="underline decoration-[#0a2af7]/50">little</span>{" "}
          background
        </h4>
        {/* Add if long description is required...
        overflow-y-scroll scrollbar-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0a2af7]/80 */}
        {/* Phones let the text flow and the section grow; a nested scroll box inside the page scroll is hard to use by touch */}
        <p className="text-base md:text-lg lg:text-xl leading-snug md:overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0a2af7]/80 md:max-h-[min(18rem,50dvh)] xl:max-h-[min(19rem,55dvh)]">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}