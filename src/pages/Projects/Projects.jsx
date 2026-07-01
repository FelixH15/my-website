import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import arrowRight from "../../assets/arrowRight.svg";
import smartAttendanceThumb from "../../assets/smartAttendance/dashboard.png";
import genAIThumb from "../../assets/genAI/home.png";
import smartPermitThumb from "../../assets/smartPermit/home.png";
import styles from "./Projects.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const projectArr = [
  {
    type: "smartAttendance",
    date: "2025",
    thumbnail: smartAttendanceThumb,
    title: "Smart Attendance System Web Application",
    workType: "Web Development",
    description:
      "A web-based application designed for both users and administrators. Users can submit absence requests via the mobile interface, while administrators monitor and manage absences through a comprehensive dashboard on the desktop platform.",
  },
  {
    type: "genAIPlatform",
    date: "2024",
    thumbnail: genAIThumb,
    title: "GenAI Web Platform",
    workType: "Web Development",
    description:
      "A flexible Generative AI platform that empowers users to choose from multiple AI engines and personalize their experience by selecting custom personas. Whether for productivity, creativity, or conversation, users can tailor the AI to match their unique needs and tone.",
  },
  {
    type: "smartPermit",
    date: "2023",
    thumbnail: smartPermitThumb,
    title: "Smart Permit System Web Application",
    workType: "Web Development",
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
        <SectionHeader
          label="Projects"
          className={`w-1/3 projectText ${styles.projectTitle}`}
        />
        <div
          className={`flex flex-col gap-14 w-2/3 projectList ${styles.contentContainer}`}
        >
          {projectArr.map((project, idx) => (
            <div
              key={project.type}
              className={`cursor-pointer ${styles.projectCard}`}
              onClick={() => handleProjectClick(project.type)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <div className={styles.thumbWrap}>
                <LazyLoadImage
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  effect="opacity"
                  className={styles.thumb}
                />
                <span className={`label ${styles.dateBadge}`}>{project.date}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHeadRow}>
                  <h2 className={styles.cardTitle}>{project.title}</h2>
                  <span className={styles.workTag}>
                    {project.workType}
                    <img
                      src={arrowRight}
                      ref={(el) => (arrowRefs.current[idx] = el)}
                      className={styles.arrow}
                      alt=""
                    />
                  </span>
                </div>
                <p className={`bodyText text-base ${styles.cardDesc}`}>
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
