import type { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { HomeIcon } from "@heroicons/react/24/outline";
import { sanityClient } from "../sanity"; 
import { groq } from "next-sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

// Use the NextPage type for the Home component
const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0a2af7]/80"
    >
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero Section */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      {<section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>}

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <footer className="sticky bottom-4 w-full">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <footer className="sticky bottom-5 w-full cursor-pointer">
              <div className="flex items-center justify-center">
              <HomeIcon className="h-10 w-10 pb-0.2 hover:grayscale-100 text-white" />
              </div>
            </footer>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Standard queries
  const pageInfo: PageInfo = await sanityClient.fetch(groq`*[_type == "pageInfo"][0]`);
  const skills: Skill[] = await sanityClient.fetch(groq`*[_type == "skill"]`);
  const socials: Social[] = await sanityClient.fetch(groq`*[_type == "social"]`);
  
  // Expanded queries: Notice the { ..., technologies[]-> } 
  // This pulls the actual image data for the nested arrays so the UI doesn't crash!
  const experiences: Experience[] = await sanityClient.fetch(
    groq`*[_type == "experience"] {
      ...,
      technologies[]->
    }`
  );
  
  const projects: Project[] = await sanityClient.fetch(
    groq`*[_type == "project"] {
      ...,
      technologies[]->
    }`
  );
    
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 10,
  };
}