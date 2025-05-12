import styles from "./Expertise.module.css";
import pen from "../../assets/pen.svg";
import flow from "../../assets/flow.svg";
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
import Lottie from "lottie-react";
import useInView from "../../components/util/useInView";
import { useState, useEffect, useRef } from "react";

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
      style={{ paddingTop: "100px", justifyContent: "flex-start" }}
      ref={expertiseRef}
    >
      {/* Application Developer */}
      <div
        className={`flex flex-col gap-3 w-2/2 ${styles.expertiseContainer} ${
          hasBeenInView ? `${styles.section} ${styles.animate}` : styles.section
        } p-4 relative`}
        ref={ref}
      >
        <div className="flex flex-row items-center gap-2">
          <Lottie
            style={{
              width: "56px",
            }}
            animationData={codeAnimation}
            loop={true}
            autoplay={true} // Lottie animation always runs
          />
          <h3 className={`text-2xl font-semibold ${styles.expertiseTitle}`}>
            Application Developer
          </h3>
        </div>
        <div className={`flex flex-col gap-1 ${styles.expertiseDescription}`}>
          <p
            className={`text-base font-normal ${styles.codeTag}`}
            style={{ color: "var(--primary-color)" }}
          >
            {"<p>"}
          </p>
          <div
            className="flex flex-col gap-3 pl-4 ml-3.5"
            style={{ borderLeft: "2px solid var(--primary-color)" }}
          >
            <p className="text-base font-normal" style={{ lineHeight: "36px" }}>
              Building responsive and dynamic applications, focused on creating
              seamless, interactive experiences that bring ideas to life and
              enhance user engagement. Committed to developing intuitive,
              user-centered solutions that adapt to different devices and
              provide smooth, reliable functionality.
            </p>
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
          <p
            className={`text-base font-normal ${styles.codeTag}`}
            style={{ color: "var(--primary-color)" }}
          >
            {"</p>"}
          </p>
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
          <h3 className="text-2xl font-semibold z-10">Designer</h3>
          <Lottie
            style={{
              width: "56px",
            }}
            animationData={designAnimation}
            loop={true}
            autoplay={true} // Lottie animation always runs
          />
        </div>
        <div className={`flex flex-col items-end gap-1 relative`}>
          <p
            className="text-base font-normal text-right"
            style={{ lineHeight: "36px" }}
          >
            <img
              style={{ left: "-35px", color: "var(--text-color)" }}
              src={pen}
              alt="pen-logo"
              className="absolute"
            />
            Specializing in UI/UX design with a focus on usability, and
            user-centered experiences.
            <span className="flex flex-row justify-end gap-2 pr-2.5">
              Focused on creating intuitive layouts, smooth user flows
              <img src={flow} alt="flow-logo" />
            </span>
            and practical interfaces that enhance user interactions on digital
            products.
          </p>
        </div>
      </div>
      {/* Designer */}
    </section>
  );
}
