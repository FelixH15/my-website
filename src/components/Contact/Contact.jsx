import styles from "./Contact.module.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

export default function Contact({ contactRef }) {
  return (
    <section
      className={`pt-20 ${styles.contact}`}
      style={{ justifyContent: "flex-start" }}
      ref={contactRef}
    >
      <SectionHeader index="05" label="Contact" />
      <div className={styles.inner}>
        <h2 className={`display ${styles.headline}`}>
          Let&apos;s build something <span className={styles.accent}>great.</span>
        </h2>
        <p className={styles.sub}>
          Open to new opportunities, collaborations, and ambitious ideas. If
          you&apos;re building something meaningful, let&apos;s talk.
        </p>
        <div className={styles.ctaRow}>
          <a
            href="https://www.linkedin.com/in/felixharriss/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCta}
          >
            <img src={linkedin} alt="" className={styles.icon} />
            Connect on LinkedIn
          </a>
          <a
            href="https://github.com/FelixH15"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryCta}
          >
            <img src={github} alt="" className={styles.icon} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
