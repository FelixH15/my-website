import Hero from "../Hero/Hero";
import Expertise from "../Expertise/Expertise";
import { useRef } from "react";
import Experiences from "../Experiences/Experiences";
export default function Home() {
  const expertiseRef = useRef(null);

  function handleScrollSection() {
    expertiseRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section className="container">
      <Hero onHandleScrollSection={handleScrollSection} />
      <Expertise expertiseRef={expertiseRef} />
      <Experiences />
    </section>
  );
}
