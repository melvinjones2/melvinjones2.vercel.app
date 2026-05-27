import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-0 flex-shrink-0 w-[400px] h-[465px] md:w-[600px] md:h-[550px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden mt-10">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-[170px] xl:h-[170px] object-contain object-center overflow-hidden object-center" // add object-cover so all images are even in size once more experience is obtained
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">
          {experience?.company}
        </p>
        <div className="flex space-x-2 my-2">
          {/* Change each img tag to Image later for better performance*/}
          {experience?.technologies.map(technology => (
            <img
              key={technology._id}
              className="h-12 w-12 rounded-full"
              src={urlFor(technology?.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-1 text-gray-500 my-1">
          {experience?.dateStarted ? new Date(experience.dateStarted).toDateString() : ""} - {" "}
          {experience?.dateEnded ? new Date(experience.dateEnded).toDateString() : "Present"}
        </p>

        <ul className="px-5 md:px-10 list-disc space-y-1 pr-5 text-justify ml-0 text-sm md:text-lg pl-5 max-h-45 overflow-y-scroll scrollbar-thin scrollbar-track-gray scrollbar-thumb-[#0a2af7]/80 break-words">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
