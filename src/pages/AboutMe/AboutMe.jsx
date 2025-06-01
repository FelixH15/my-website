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
      style={{ padding: "80px 0px", justifyContent: "flex-start" }}
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
          style={{ lineHeight: "183%" }}
        >
          With 3 years of hands-on experience in design and development, I’ve
          had the chance to dive deep into a variety of disciplines—ranging from
          UI/UX design and front-end development to automation and digital
          strategy. Throughout this journey, I’ve worked on crafting
          user-centric solutions and seamless digital experiences that balance
          both aesthetic and function. Whether I’m wireframing interfaces,
          writing clean front-end code, or refining the user journey, my work is
          always rooted in clarity, intention, and a strong respect for the
          details that make good design feel effortless.
          <br /> <br /> But for me, these past three years are just the
          beginning. <br /> <br /> I see every project not as a finished
          achievement, but as a stepping stone toward becoming better
          creatively, technically, and professionally. I actively seek out
          opportunities to challenge myself, experiment with new ideas, and
          explore the technologies shaping the future. Lately, that’s meant
          diving into AI-powered tools, learning more about real-time
          applications, and building passion projects that stretch my creativity
          and problem-solving skills. <br />
          <br /> Outside of formal work, I dedicate time to exploring emerging
          technologies, collaborating with like-minded creatives, and staying
          curious. I believe that meaningful growth happens when we’re open to
          evolving, and I embrace that mindset in everything I do. I’m always
          eager to contribute, to learn from others, and to push the boundaries
          of my knowledge and creativity. <br /> <br /> In a fast-paced industry
          like tech and design, staying still isn’t an option and that’s exactly
          what excites me. Each new challenge is an invitation to grow, each
          collaboration a chance to see from a new perspective, and each idea a
          potential spark for something impactful.
        </p>
      </div>
    </section>
  );
}
