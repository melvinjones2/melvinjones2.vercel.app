import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

// Sanity stores plain dates ("2024-01-01"), which JS parses as UTC midnight;
// formatting in UTC keeps visitors west of GMT from seeing the previous day.
const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[85vw] max-w-[340px] sm:max-w-none sm:w-[380px] md:w-[500px] xl:w-[900px] h-[min(480px,calc(100dvh-13rem))] md:h-[min(500px,calc(100dvh-13rem))] snap-center bg-[#292929] p-5 sm:p-10 can-hover:opacity-50 can-hover:hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        // Must stay partly inside the card (overflow-hidden) or it never reports as "in view"
        initial={{
          y: -40,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-full xl:w-[170px] xl:h-[170px] object-contain object-center overflow-hidden"
        src={urlFor(experience?.companyImage).url()}
        alt={experience?.company}
      />

      <div className="w-full min-h-0 flex-1 flex flex-col px-0 sm:px-5">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-light text-center sm:text-left">{experience?.jobTitle}</h4>
        <p className="font-bold text-xl md:text-2xl pt-1 text-center sm:text-left">
          {experience?.company}
        </p>
        <div className="flex flex-wrap gap-2 my-2 justify-center sm:justify-start">
          {experience?.technologies.map(technology => (
            <img
              key={technology._id}
              className="h-8 w-8 md:h-12 md:w-12 rounded-full"
              src={urlFor(technology?.image).url()}
              alt={technology?.title}
            />
          ))}
        </div>
        <p className="uppercase py-1 text-gray-500 my-1 text-center sm:text-left">
          {experience?.dateStarted ? formatDate(experience.dateStarted) : ""} - {" "}
          {experience?.dateEnded ? formatDate(experience.dateEnded) : "Present"}
        </p>
        <ul className="list-disc space-y-1 pl-5 pr-2 text-base md:text-lg leading-snug min-h-0 overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0a2af7]/80">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
