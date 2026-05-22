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
    className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#F7AB0A] rounded-full h-[240px] w-[240px] mt-52 animate-ping" />
      <div className="absolute rounded-full border border-[#bd1414] h-[480px] w-[480px] mt-52 animate-pulse" />
      <div className="absolute border border-[#61c721] rounded-full h-[480px] w-[480px] mt-52 animate-ping" />
      <div className="absolute border border-[#034278] rounded-full h-[700px] w-[700px] mt-52 animate-ping" />
      <div className="absolute border border-[#ffffff] rounded-full h-[700px] w-[700px] mt-52 animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;
