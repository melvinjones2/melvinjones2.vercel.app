import React from "react";
import { motion } from "framer-motion";
import SkillBubbles from "./SkillBubbles";
import { Skill as SkillType } from "@/typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row 
    max-w-[2000px] px-4 xl:px-10 min-h-dvh pt-36 pb-16 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="sectionTitle">
        Skills
      </h3>

      <h3 className="absolute inset-x-0 top-25 px-4 text-center uppercase tracking-[2px] sm:tracking-[3px] text-gray-500 text-xs sm:text-sm">
        <span className="can-hover:hidden">Tap</span>
        <span className="hidden can-hover:inline">Hover over</span>
        {" "}a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-3 md:gap-5 justify-center">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <SkillBubbles key={skill._id} skill={skill} />
        ))}

        {skills?.slice( skills.length / 2, skills.length ).map((skill) => (
          <SkillBubbles key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
