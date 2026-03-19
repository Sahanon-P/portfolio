export const revalidate = 60; // revalidate every 60 seconds

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Research from "@/components/sections/Research";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { getExperiences, getProjects, getResearch } from "@/lib/api";

export default async function Home() {
  const [projects, experiences, research] = await Promise.all([
    getProjects(),
    getExperiences(),
    getResearch(),
  ])
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience experience={experiences} />
        <Research research={research} />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
