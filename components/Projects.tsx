import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import { Technology } from "@/typings";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-dvh relative flex overflow-hidden flex-col text-left w-full items-center z-0">

      <h3 className="sectionTitle">
        Projects
      </h3>

      {/* Slides must be w-full, not w-screen: 100vw includes the scrollbar width on Windows/Linux */}
      <div className="relative w-full h-full flex overflow-x-auto overflow-y-hidden snap-x z-10 snap-mandatory scrollbar-thin scrollbar-track-gray-400/0 scrollbar-thumb-[#0a2af7]/80">
        {projects?.map((project, i) => (
          <div key={project._id}
            className="w-full h-full flex-shrink-0 snap-center flex flex-col gap-4 items-center justify-center px-5 pt-28 pb-16">
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              className="shrink-0 h-[min(9.5rem,22dvh)] sm:h-[min(12rem,25dvh)] md:h-[min(15rem,30dvh)] lg:h-[min(16rem,30dvh)] w-auto max-w-full object-contain object-center"
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt={project?.title}
            />
            <div className="min-h-0 flex flex-col gap-4 max-w-6xl w-full">
              <h4 className="shrink-0 font-semibold text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl">
                <span className="underline decoration-[#0a2af7]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="shrink-0 flex flex-wrap items-center gap-2 justify-center">
                {project?.technologies.map((technology: Technology) => (
                  <img className="h-8 md:h-10 xl:h-12 w-auto object-contain"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt={technology.title}
                  />
                ))}
              </div>

              <p className="min-h-0 px-1 text-base sm:text-xl text-center overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0a2af7]/80 max-h-75">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#0a2af7]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;