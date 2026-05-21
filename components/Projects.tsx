import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      {/* PROJECT CARDS */}
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0a2af7]/80">
        {projects.map((project, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-40 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://cdn.sanity.io/images/xbn4zmfs/production/ff00c08760983e0e037aaf6ab4e004f4d147276a-383x383.png"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#0a2af7]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                Project description!
              </h4>

              <p className="text-lg text-center md:text-center">
                Project description coming soon Project description coming soon
                Project description coming soon Project description coming soon
                Project description coming soon Project description coming soon
                Project description coming soon Project description coming soon
                Project description coming soon Project description coming soon
                Project description coming soon Project description coming soon
                Project description coming soon Project description coming soon!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#0a2af7]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default Projects;
