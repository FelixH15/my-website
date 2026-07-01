import styles from "./Footer.module.css";
import logo from "/FLX.svg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

export default function Footer({ sections = [] }) {
  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <button className={styles.brand} onClick={toTop} aria-label="Back to top">
          <img src={logo} alt="Felix Harris logo" className={styles.logo} />
        </button>

        <nav className={styles.links} aria-label="Footer">
          {sections.map((section) => (
            <button
              key={section.id}
              className={styles.link}
              onClick={() =>
                section.ref.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className={styles.socials}>
          <a
            href="https://github.com/FelixH15"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.social}
          >
            <img src={github} alt="" className={styles.socialIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/felixharriss/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.social}
          >
            <img src={linkedin} alt="" className={styles.socialIcon} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className="mono">&copy; 2026 Felix Harris</span>
        <button className={`mono ${styles.toTop}`} onClick={toTop}>
          Back to top &uarr;
        </button>
      </div>
    </footer>
  );
}
