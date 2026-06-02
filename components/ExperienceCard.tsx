import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[340px] sm:w-[380px] h-[480px] md:w-[500px] md:h-[500px] xl:w-[900px] xl:h-[500px] snap-center bg-[#292929] p-5 sm:p-10 sm:hover:opacity-100 sm:opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-[170px] xl:h-[170px] object-contain object-center overflow-hidden"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="w-full px-0 sm:px-5">
        <h4 className="text-4xl font-light text-center sm:text-left">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl pt-1 text-center sm:text-left">
          {experience?.company}
        </p>
        <div className="flex space-x-2 my-2 justify-center sm:justify-start">
          {experience?.technologies.map(technology => (
            <img
              key={technology._id}
              className="h-8 w-8 md:h-12 md:w-12 rounded-full"
              src={urlFor(technology?.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-1 text-gray-500 my-1 text-center sm:text-left">
          {experience?.dateStarted ? new Date(experience.dateStarted).toDateString() : ""} - {" "}
          {experience?.dateEnded ? new Date(experience.dateEnded).toDateString() : "Present"}
        </p>
        {/* overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0a2af7]/80 max-h-55 md:max-h-65 lg:max-h-70 xl:max-h-75 */}
        <ul className="list-disc space-y-1 ml-5 text-md md:text-lg leading-snug">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}