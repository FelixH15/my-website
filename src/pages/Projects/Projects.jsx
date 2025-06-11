import { useNavigate } from "react-router-dom";
import arrowRight from "../../assets/arrowRight.svg";
import styles from "./Projects.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const projectArr = [
  {
    type: "smartAttendance",
    date: "2025",
    title: "Building a Smart Attendance System Web Application",
    company: "Webling",
    description:
      "A web-based application designed for both users and administrators. Users can submit absence requests via the mobile interface, while administrators monitor and manage absences through a comprehensive dashboard on the desktop platform.",
  },
  {
    type: "genAIPlatform",
    date: "2024",
    title: "Building a GenAI Web Platform",
    company: "PT. IBM Indonesia",
    description:
      "A flexible Generative AI platform that empowers users to choose from multiple AI engines and personalize their experience by selecting custom personas. Whether for productivity, creativity, or conversation, users can tailor the AI to match their unique needs and tone.",
  },
  {
    type: "smartPermit",
    date: "2023",
    title: "Building a Smart Permit System Web Application",
    company: "PT. Jasa Teknologi Informasi IBM",
    description:
      "A web-based application for building permit requests. Users can submit their registration, and the system automatically evaluates and scores each request based on key parameters, helping streamline the approval process with data-driven decisions.",
  },
];

export default function Projects({ projectRef }) {
  const navigate = useNavigate();
  const arrowRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      ".projectText",
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".projectList",
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  function handleProjectClick(type) {
    navigate(`/${type}`);
  }

  function handleMouseEnter(idx) {
    gsap.fromTo(
      arrowRefs.current[idx],
      { x: 0, y: 0 },
      {
        x: 4,
        y: -4,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }

  function handleMouseLeave(idx) {
    gsap.fromTo(
      arrowRefs.current[idx],
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
      ref={projectRef}
    >
      <div
        className={`flex flex-row justify-between items-start w-2/2 ${styles.projectContainer}`}
      >
        <h1
          className={`text-4xl font-medium w-1/3 projectText ${styles.projectTitle}`}
        >
          /Projects
        </h1>
        <div
          className={`flex flex-col gap-14 w-2/3 projectList ${styles.contentContainer}`}
        >
          {projectArr.map((project, idx) => (
            <div
              key={project.type}
              className={`flex flex-row gap-5 p-6 cursor-pointer rounded-xl w-2/2 ${styles.projectCard}`}
              onClick={() => handleProjectClick(project.type)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <p className="font-light text-base">{project.date}</p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3">
                  <h2
                    className={`font-bold text-xl ${styles.cardTitle}`}
                    style={{ lineHeight: "128%", letterSpacing: "-0.6px" }}
                  >
                    {project.title + " ·"}{" "}
                    <span className="inline-block">
                      <h2 className="flex gap-1">
                        {project.company}
                        <img
                          src={arrowRight}
                          ref={(el) => (arrowRefs.current[idx] = el)}
                          className={`w-3 ${styles.arrow}`}
                          alt="arrow-right"
                        />
                      </h2>
                    </span>
                  </h2>
                </div>
                <p
                  className="text-sm font-normal"
                  style={{
                    lineHeight: "183%",
                    letterSpacing: "-0.42px",
                  }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
