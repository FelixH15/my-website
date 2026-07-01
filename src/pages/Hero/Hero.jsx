import Lottie from "lottie-react";
import scrollDownAnimation from "../../assets/scrollDown.json";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import cvFile from "../../assets/cv-ats-felix.pdf";
import styles from "./Hero.module.css";

export default function Hero({ onHandleScrollSection, onViewWork, heroRef }) {
  return (
    <section className="snap-section" ref={heroRef}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.nameContainer}>
        <h1 className={styles.heroTitle}>Felix Harris</h1>
        <div className={styles.typeWrap}>
          <p className={`text-2xl ${styles.typing1}`}>
            I&apos;m a Front End Developer and a Designer.
          </p>
        </div>
        <p className={styles.subline}>
          I turn complex ideas into intuitive, high-craft digital products.{" "}
          <br />
          Blending engineering with design.
        </p>

        <div className={styles.ctaRow}>
          <button className={styles.primaryCta} onClick={onViewWork}>
            View my work
          </button>
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryCta}
          >
            Resume
          </a>
          <div className={styles.socials}>
            <a
              href="https://github.com/FelixH15"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Felix Harris on GitHub"
              className={styles.socialLink}
            >
              <img src={github} alt="" className={styles.socialIcon} />
            </a>
            <a
              href="https://www.linkedin.com/in/felixharriss/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Felix Harris on LinkedIn"
              className={styles.socialLink}
            >
              <img src={linkedin} alt="" className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>

      <Lottie
        className={styles.scrollCue}
        animationData={scrollDownAnimation}
        loop={true}
        autoplay={true}
        onClick={onHandleScrollSection}
        aria-label="Scroll to expertise"
      />
    </section>
  );
}
