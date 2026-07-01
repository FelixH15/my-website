import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "/FLX.svg";
import cvFile from "../../assets/cv-ats-felix.pdf";
import useMagnetic from "../../hooks/useMagnetic";

export default function Navbar({ sections = [] }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const resumeRef = useMagnetic(0.4);

  // Glass treatment + scroll progress
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const nodes = sections.map((s) => s.ref?.current).filter(Boolean);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const match = sections.find((s) => s.ref.current === visible.target);
          if (match) setActive(match.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [sections]);

  function handleNav(section) {
    setMenuOpen(false);
    section.ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav} aria-label="Primary">
        <button
          className={styles.brand}
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Back to top"
        >
          <img src={logo} alt="Felix Harris logo" className={styles.logo} />
        </button>

        <ul className={styles.links}>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={`${styles.link} ${
                  active === section.id ? styles.linkActive : ""
                }`}
                aria-current={active === section.id ? "true" : undefined}
                onClick={() => handleNav(section)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a
            ref={resumeRef}
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resume}
          >
            Resume
          </a>
          <button
            className={styles.burger}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`${styles.burgerBar} ${menuOpen ? styles.barTop : ""}`}
            />
            <span
              className={`${styles.burgerBar} ${menuOpen ? styles.barMid : ""}`}
            />
            <span
              className={`${styles.burgerBar} ${menuOpen ? styles.barBot : ""}`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""} z-9999999`}
      >
        {sections.map((section) => (
          <button
            key={section.id}
            className={`${styles.mobileLink} ${
              active === section.id ? styles.linkActive : ""
            }`}
            onClick={() => handleNav(section)}
          >
            {section.label}
          </button>
        ))}
        <a
          href={cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileResume}
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </a>
      </div>
    </header>
  );
}
