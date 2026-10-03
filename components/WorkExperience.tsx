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
      className="h-dvh flex relative overflow-hidden flex-col text-left w-full pt-28 pb-14 justify-center items-center"
    >
      <h3 className="sectionTitle z-1">
        Experience
      </h3>

      {/* experience cards */}
      <div className="w-full max-h-full min-h-0 flex items-stretch gap-6 sm:gap-10 px-4 sm:px-10 py-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/0 scrollbar-thumb-[#0a2af7]/80">
      {experiences.map((experience) => (
        <ExperienceCard key={experience._id} experience={experience} />
      ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;