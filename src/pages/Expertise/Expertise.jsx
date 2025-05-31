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
import useInView from "../../components/util/useInView";
import { useState, useEffect } from "react";

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
  const [ref, isInView] = useInView();
  const [hasBeenInView, setHasBeenInView] = useState(false);
  useEffect(() => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true); // Ensure animation only runs once
    }
  }, [isInView, hasBeenInView]);

  return (
    <section
      className="snap-section gap-8"
      style={{ paddingTop: "80px", justifyContent: "flex-start" }}
      ref={expertiseRef}
    >
      {/* Application Developer */}
      <div
        className={`flex flex-col gap-3 w-2/2 ${styles.developerContainer} ${
          hasBeenInView ? `${styles.section} ${styles.animate}` : styles.section
        } p-4 relative`}
        ref={ref}
      >
        <div className="flex flex-row items-center gap-2">
          <h3 className={`text-3xl font-semibold ${styles.expertiseTitle}`}>
            Front End Developer
          </h3>
          <Lottie
            className={styles.iconAnimation}
            style={{
              width: "56px",
            }}
            animationData={codeAnimation}
            loop={true}
            autoplay={true} // Lottie animation always runs
          />
        </div>
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
            <p className="text-base font-normal" style={{ lineHeight: "36px" }}>
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
        <div className="flex flex-row gap-2">
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
        className={`flex flex-col items-end gap-2 w-2/2 p-4 ${
          styles.designerContainer
        } ${
          hasBeenInView ? `${styles.section} ${styles.animate}` : styles.section
        } relative`}
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
          <h3 className="text-3xl font-semibold z-10">Designer</h3>
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
              className="text-base font-normal text-right relative mr-6.5"
              style={{ lineHeight: "36px" }}
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
