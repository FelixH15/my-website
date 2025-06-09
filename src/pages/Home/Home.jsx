import Hero from "../Hero/Hero";
import Expertise from "../Expertise/Expertise";
import { useRef } from "react";
import Experiences from "../Experiences/Experiences";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
export default function Home() {
  const expertiseRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const aboutMeRef = useRef(null);

  function handleScrollSection() {
    expertiseRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section
      className="container flex flex-col gap-20"
      style={{ width: "55%" }}
    >
      <Hero onHandleScrollSection={handleScrollSection} />
      <Expertise expertiseRef={expertiseRef} />
      <Experiences experienceRef={experienceRef} expertiseRef={expertiseRef} />
      <Projects projectRef={projectRef} />
      <AboutMe aboutMeRef={aboutMeRef} />
    </section>
  );
}
