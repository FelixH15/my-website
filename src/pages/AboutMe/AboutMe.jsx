import styles from "./AboutMe.module.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe({ aboutMeRef }) {
  useGSAP(() => {
    gsap.fromTo(
      ".aboutMeContainer",
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutMeRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".aboutMeParagraph",
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutMeRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <section
      className="snap-section"
      style={{ justifyContent: "flex-start" }}
      ref={aboutMeRef}
    >
      <div className="flex flex-row justify-between items-start w-2/2">
        <div
          className={`flex flex-col gap-6 w-1/3 aboutMeContainer ${styles.aboutMeContainer}`}
        >
          <p className={`text-4xl font-medium`}>/AboutMe</p>
          <div className="flex flex-col gap-2">
            <a
              href="https://github.com/FelixH15"
              className="flex flex-row gap-2 items-center"
            >
              <img src={github} alt="github-logo" className="w-8" />
              <p
                className="font-normal tracking-tight"
                style={{ lineHeight: "120.98%" }}
              >
                felixH15
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/felixharriss/"
              className="flex flex-row gap-2 items-center"
            >
              <img src={linkedin} alt="linked-logo" className="w-8" />
              <p
                className="font-normal tracking-tight"
                style={{ lineHeight: "120.98%" }}
              >
                felixharriss
              </p>
            </a>
          </div>
        </div>
        <p
          className="w-2/3 pl-6 text-xl tracking-tight aboutMeParagraph"
          style={{ lineHeight: "183%", marginBottom: "80px" }}
        >
          With 3 years of hands-on experience in digital product development,
          I’ve cultivated a deep technical foundation across front-end
          engineering, UI/UX design, automation, and digital systems strategy.
          My core drive lies in building scalable, user-focused applications
          that are not just functional, but forward-thinking. I thrive in
          turning complex ideas into real-world solutions whether it’s
          architecting intuitive interfaces, implementing efficient codebases,
          or streamlining processes through automation. <br /> <br />
          But at the heart of it, I’m a technologist. I’m genuinely passionate
          about where technology is going, especially in the realms of
          application development, blockchain, and AI. These aren’t just
          buzzwords to me—they’re areas I actively explore, build with, and aim
          to master. I’m currently focused on deepening my skills in real-time
          web applications, decentralized solutions, and AI-powered experiences.
          I enjoy building side projects that test boundaries and let me
          experiment with bleeding-edge tools and architectures.
          <br /> <br />
          To me, every project is a chance to grow technically, creatively, and
          professionally. I don’t just want to contribute to the future of
          tech—I want to build it. I stay curious, stay hands-on, and surround
          myself with people who push ideas forward. I believe in learning by
          doing, in building with purpose, and in the power of code to shape the
          way we live and interact.
          <br /> <br />
          In a rapidly evolving landscape, I’m not here to stay comfortable. I’m
          here to engineer impact, explore possibilities, and be part of what’s
          next.
        </p>
      </div>
    </section>
  );
}
