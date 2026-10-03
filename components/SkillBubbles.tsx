import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity';
import { Skill } from '@/typings';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function SkillBubbles({ directionLeft, skill }: Props) {
  // Touch screens have no hover, so tapping toggles the proficiency overlay instead.
  const [showProgress, setShowProgress] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setShowProgress((v) => !v)}
      onBlur={() => setShowProgress(false)}
      aria-label={`${skill?.title}: ${skill.progress}%`}
      className="group relative flex cursor-pointer rounded-full"
    >
      <motion.img
        // Offset must stay small: an icon pushed fully off-screen never reports as "in view" on narrow phones
        initial={{ x: directionLeft ? -30 : 30, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`rounded-full border-2 border-gray-500 object-cover size-16 sm:size-20 filter group-hover:grayscale transition duration-300 ease-in-out transform-gpu overflow-hidden ${showProgress ? "grayscale" : ""}`}
        src={urlFor(skill?.image).url()}
        alt=""
      />
      <div className={`absolute inset-0 transition duration-300 ease-in-out bg-white rounded-full z-10 group-hover:opacity-80 ${showProgress ? "opacity-80" : "opacity-0"}`}>
        <div className="flex items-center justify-center h-full">
          <p className="text-lg sm:text-xl md:text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </button>
  );
}

export default SkillBubbles;
