import Hero from "../Hero/Hero";
import Expertise from "../Expertise/Expertise";
import { useEffect, useRef } from "react";
import Experiences from "../Experiences/Experiences";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  const expertiseRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    document.title = "Felix Harris — Front-End Developer & Designer";
  }, []);

  function scrollTo(ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  const navSections = [
    { id: "expertise", label: "Expertise", ref: expertiseRef },
    { id: "experiences", label: "Experiences", ref: experienceRef },
    { id: "projects", label: "Projects", ref: projectRef },
    { id: "about", label: "About", ref: aboutMeRef },
  ];

  return (
    <>
      <Navbar sections={navSections} />
      <section className="container flex flex-col gap-20">
        <Hero
          onHandleScrollSection={() => scrollTo(expertiseRef)}
          onViewWork={() => scrollTo(projectRef)}
        />
        <Expertise expertiseRef={expertiseRef} />
        <Experiences
          experienceRef={experienceRef}
          expertiseRef={expertiseRef}
        />
        <Projects projectRef={projectRef} />
        <AboutMe aboutMeRef={aboutMeRef} />
      </section>
    </>
  );
}
