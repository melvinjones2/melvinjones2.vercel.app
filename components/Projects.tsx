import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/pages/api/typings";
import { urlFor } from "@/sanity";
import { Technology } from "@/pages/api/typings";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">

      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x z-3 snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0a2af7]/80">
        {projects?.map((project, i) => (
          <div key={i} 
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-10 h-screen pt-15">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              className="max-h-50 xs:max-h-40 sm:max-h-60 md:max-h-65 lg:max-h-70 xl:max-h-75 object-contain object-center"
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
              
            />
            <div className="space-y-4 px-2 max-w-6xl max-w-6xl ">
              <h4 className="text-3xl font-semibold text-center xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
                <span className="underline decoration-[#FFFF]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology: Technology) => (
                  <img className="max-h-8  md:max-h-10 xl:max-h-12 object-contain"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-lg text-center max-h-55 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0a2af7]/80 break-words">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#0a2af7]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
