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
      className="bg-[rgb(36,36,36)] text-white h-dvh snap-y snap-proximity lg:snap-mandatory
    overflow-y-auto overflow-x-hidden overscroll-none z-0 scrollbar-thin scrollbar-track-gray-400/0 scrollbar-thumb-[#0a2af7]/80"
    >
      <Head>
        <title>Melvin Jones - Portfolio</title>
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero Section */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-start">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-start">
        <WorkExperience experiences={experiences} />
      </section>

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

      <footer className="sticky bottom-[max(0.75rem,env(safe-area-inset-bottom))] w-full flex justify-center pointer-events-none">
        <Link href="#hero" aria-label="Back to top" className="pointer-events-auto p-1.5 rounded-full bg-[rgb(36,36,36)]/70 backdrop-blur-sm">
          <HomeIcon className="h-10 w-10 text-white transition-colors hover:text-[#0a2af7]" />
        </Link>
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
    revalidate: 10,
  };
}