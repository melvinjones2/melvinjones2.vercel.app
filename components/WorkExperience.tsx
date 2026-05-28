import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-0 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl z-1 justify-center">
        Experience
      </h3>

      {/* experience cards */}
      <div className="w-screen flex space-x-10 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/0 scrollbar-thumb-[#0a2af7]/80">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;