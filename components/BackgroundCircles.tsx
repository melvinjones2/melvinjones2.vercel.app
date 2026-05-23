import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
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
      <div className="absolute border border-[#bd1414] rounded-full h-[250px] w-[250px] mt-52 animate-ping" />
      <div className="absolute rounded-full border border-[#0a2af7] h-[510px] w-[510px] mt-52 animate-pulse" />
      <div className="absolute border border-[#61c721] rounded-full h-[480px] w-[480px] mt-52 animate-ping" />
      <div className="absolute border border-[#FFFFFF] rounded-full h-[700px] w-[700px] mt-52 animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;
