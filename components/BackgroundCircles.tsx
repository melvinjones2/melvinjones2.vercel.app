import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({ }: Props) {
  return (
    <motion.div initial={{
      opacity: 1,
    }}
      animate={{
        scale: [1, 2, 4, 3, 1],
        opacity: [0.2, 0.5, 0.8, 0.5, 1.2],
        borderRadius: ["20%", "40%", "50%", "80%", "50%"],
      }}
      transition={{
        duration: 4.5,
      }}
      className="relative flex justify-center items-center z-0"
    >
      <div className="absolute border border-[#bd1414] opacity-50 rounded-full h-[200px] w-[200px] mt-64 md:mt:52 animate-ping"/> <div />
      <div className="absolute border border-[#61c721] opacity-70 rounded-full h-[300px] w-[300px] mt-64 md:mt:52 animate-ping"/> <div />
      <div className="absolute border border-[#FFFFFF] opacity-40 rounded-full h-[500px] w-[500px] mt-64 md:mt:52 animate-ping"/> <div />
      <div className="absolute border border-[#0a2af7] opacity-100 h-[515px] w-[515px] md:h-[585px] md:w-[585px] animate-pulse mt-64 md:mt:52 rounded-full"/> <div />
      <div className="absolute border border-[#0a2af7] opacity-100 rounded-full h-[800px] w-[800px] mt-64 md:mt:52 animate-ping"/> <div />
    </motion.div>
  );
}

export default BackgroundCircles;
