import styles from "./Experiences.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import scrollTrigger from "gsap/ScrollTrigger";
import arrowRight from "../../assets/arrowRight.svg";
import cvFile from "../../assets/cv-ats-felix.pdf";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { useRef } from "react";
gsap.registerPlugin(scrollTrigger);
gsap.registerPlugin(useGSAP);

const experiencesArr = [
  {
    title: "Application Developer",
    company: "PT. IBM Indonesia",
    date: "Jun 2024 — Present",
    current: true,
    description:
      "Developing an AI platform using AngularJS, where I collaborated closely with developers and designers to ensure the platform met business requirements. My focus was on creating a responsive and efficient user interface, working as part of a team to deliver a high-quality product that aligned with the company’s goals",
  },
  {
    title: "Application Developer",
    company: "PT. Jasa Teknologi Informasi IBM",
    date: "May 2022 — Jun 2024",
    description:
      "Designed and developed internal applications using AngularJS, creating user-friendly interfaces with a strong focus on UI/UX design using Figma. I worked closely with other developers to ensure that our applications met stakeholder expectations and requirements, delivering high-quality solutions aligned with business goals.",
  },
  {
    title: "Quality Assurance Intern",
    company: "PT. Global Loyalty Indonesia",
    date: "Sep 2021 — Mar 2022",
    description:
      "As a Quality Assurance Intern, I was responsible for supporting the QA team in reviewing and analyzing system specifications to ensure alignment with project requirements. I contributed to developing effective strategies and test plans, as well as executing automation tests to maintain high product quality. My role involved creating detailed logs to document testing phases and defects for both websites and mobile applications, reporting bugs and errors to the development team for resolution. Additionally, I assisted in conducting post-release and post-implementation testing to verify the stability and functionality of the delivered solutions.",
  },
  {
    title: "Robotic Process Automation Intern",
    company: "PT. Quanta Coretech Indonesia",
    date: "Feb 2021 — Jul 2021",
    description:
      "Responsible for the design, development, and implementation of Robotic Process Automation (RPA) solutions using Automation Anywhere and UIPath. Tasks include analyzing and resolving issues related to RPA processes, ensuring smooth functionality and performance. Additionally, responsibilities involve controlling and monitoring RPA workflows to maintain efficiency and effectiveness in automated processes.",
  },
];

function Experiences({ experienceRef, expertiseRef }) {
  const stickyContainerRef = useRef(null);
  const experienceContainerRef = useRef(null);
  const arrowRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      stickyContainerRef.current,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: expertiseRef.current,
          start: "bottom 60%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".exp-entry",
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: expertiseRef.current,
          start: "bottom 60%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  function handleMouseEnter() {
    gsap.fromTo(
      arrowRef.current,
      { x: 0, y: 0 },
      {
        x: 4,
        y: -4,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }

  function handleMouseLeave() {
    gsap.fromTo(
      arrowRef.current,
      { x: 4, y: -4 },
      {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }
  return (
    <section
      className="pt-20"
      style={{ justifyContent: "flex-start" }}
      ref={experienceRef}
    >
      <div
        className={`flex flex-row items-start w-2/2 justify-between ${styles.experienceSection}`}
      >
        <div
          className={`flex flex-col gap-5 w-1/3 ${styles.stickyContainer}`}
          ref={stickyContainerRef}
        >
          <SectionHeader label="Experiences" />
          <div
            className={`flex flex-row gap-2 cursor-pointer ${styles.resumeContainer}`}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
          >
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-base tracking-tight font-semibold`}
            >
              View my full resume
            </a>
            <img src={arrowRight} alt="" ref={arrowRef} />
          </div>
        </div>

        <div
          className={`w-2/3 ${styles.timeline}`}
          ref={experienceContainerRef}
        >
          {experiencesArr.map((experience) => (
            <article
              key={`${experience.company}-${experience.date}`}
              className={`exp-entry ${styles.entry} ${
                experience.current ? styles.current : ""
              }`}
            >
              <span className={styles.node} aria-hidden="true" />
              <div className={styles.entryHead}>
                <span className="label">{experience.date}</span>
                {experience.current && (
                  <span className={styles.nowPill}>Now</span>
                )}
              </div>
              <h3 className={`display ${styles.role}`}>{experience.title}</h3>
              <p className={styles.company}>{experience.company}</p>
              <p className={`bodyText ${styles.desc}`}>
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
