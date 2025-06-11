import styles from "./Expertise.module.css";
import html from "../../assets/html5.svg";
import css from "../../assets/css3.svg";
import javascript from "../../assets/javascript.svg";
import typescript from "../../assets/typescript.svg";
import angular from "../../assets/angularjs.svg";
import react from "../../assets/react.svg";
import java from "../../assets/java.svg";
import python from "../../assets/python.svg";
import springboot from "../../assets/springboot.svg";
import codeAnimation from "../../assets/design.json";
import designAnimation from "../../assets/Designer.json";
import notion from "../../assets/notion.svg";
import figma from "../../assets/figma.svg";
import canva from "../../assets/canva.svg";
import Lottie from "lottie-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const techArr = [
  html,
  css,
  javascript,
  typescript,
  angular,
  react,
  java,
  python,
  springboot,
];

const designArr = [notion, figma, canva];

export default function Expertise({ expertiseRef }) {
  const devRef = useRef(null);
  const designerRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      devRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: expertiseRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      designerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: expertiseRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      className={`${styles.experiseContainer}`}
      style={{ paddingTop: "80px", justifyContent: "flex-start" }}
      ref={expertiseRef}
    >
      {/* Application Developer */}
      <div
        className={`flex flex-col gap-3 w-2/2 ${styles.developerContainer} ${styles.section} p-4 relative`}
        ref={devRef}
      >
        <h2
          className={`inline-block text-3xl font-semibold ${styles.expertiseTitle}`}
        >
          Front End Developer
          <Lottie
            className={styles.iconAnimation}
            style={{
              width: "56px",
            }}
            animationData={codeAnimation}
            loop={true}
            autoplay={true} // Lottie animation always runs
          />
        </h2>

        <div className={`flex flex-col gap-1 ${styles.expertiseDescription}`}>
          <p
            className={`text-base font-normal ${styles.codeTag}`}
            style={{ color: "var(--primary-color)" }}
          >
            {"<p>"}
          </p>
          <div
            className={`flex flex-row gap-3 ${styles.developerText}`}
            style={{ marginLeft: "13px" }}
          >
            <div className={styles.vl}></div>
            <p
              className="text-sm font-normal"
              style={{
                lineHeight: "183%",
                letterSpacing: "-0.42px",
              }}
            >
              Building responsive and dynamic applications, focused on creating
              seamless, interactive experiences that bring ideas to life and
              enhance user engagement. Committed to developing intuitive,
              user-centered solutions that adapt to different devices and
              provide smooth, reliable functionality.
            </p>
          </div>
          <p
            className={`text-base font-normal ${styles.codeTag}`}
            style={{ color: "var(--primary-color)" }}
          >
            {"</p>"}
          </p>
        </div>
        <div className={`flex flex-row gap-2 ${styles.iconContainer}`}>
          {techArr.map((tech) => (
            <img
              className={`${styles.techStack} ${styles.icon}`}
              src={tech}
              alt="tech-stack-logo"
            />
          ))}
        </div>
      </div>
      {/* Application Developer */}

      {/* Designer */}
      <div
        className={`flex flex-col items-end gap-2 w-2/2 p-4 ${styles.designerContainer} ${styles.section} relative`}
        ref={designerRef}
      >
        <div className={`flex flex-row items-center gap-2`}>
          <Lottie
            className={styles.iconAnimation}
            style={{
              width: "56px",
            }}
            animationData={designAnimation}
            loop={true}
            autoplay={true} // Lottie animation always runs
          />
          <h2 className="text-3xl font-semibold z-10">Designer</h2>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div
            className={`flex flex-row items-end gap-3 ${styles.designerText}`}
          >
            <div
              className={styles.box}
              style={{
                width: "16px",
                height: "15px",
                backgroundColor: "white",
                border: "1px solid var(--primary-color)",
                position: "absolute",
                top: "-8px",
                left: "-9px",
              }}
            ></div>
            <div
              className={styles.box}
              style={{
                width: "16px",
                height: "15px",
                backgroundColor: "white",
                border: "1px solid var(--primary-color)",
                position: "absolute",
                top: "-8px",
                right: "-8px",
              }}
            ></div>
            <div
              className={styles.box}
              style={{
                width: "16px",
                height: "15px",
                backgroundColor: "white",
                border: "1px solid var(--primary-color)",
                position: "absolute",
                bottom: "-8px",
                left: "-9px",
              }}
            ></div>
            <div
              className={styles.box}
              style={{
                width: "16px",
                height: "15px",
                backgroundColor: "white",
                border: "1px solid var(--primary-color)",
                position: "absolute",
                bottom: "-8px",
                right: "-8px",
              }}
            ></div>
            <p
              className="text-sm font-normal text-right relative"
              style={{
                lineHeight: "183%",
                letterSpacing: "-0.42px",
              }}
            >
              Specializing in UI/UX design with a focus on usability, and
              user-centered experiences. Passionate about creating intuitive
              layouts, seamless user flows, and visually engaging interfaces
              that balance creativity with functionality. Dedicated to
              delivering innovative, user-friendly digital products that leave a
              lasting impression.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          {designArr.map((design) => (
            <img
              className={`${styles.techStack} ${styles.icon}`}
              src={design}
              alt="tech-stack-logo"
            />
          ))}
        </div>
      </div>
      {/* Designer */}
    </section>
  );
}
