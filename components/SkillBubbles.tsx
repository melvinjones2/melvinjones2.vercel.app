import React from 'react'
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity';
import { Skill } from '@/typings';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function SkillBubbles({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-full border-2 border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out transform-gpu overflow-hidden"
        src={urlFor(skill?.image).url()}
        alt=""
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </div>
  );
}

export default SkillBubbles;