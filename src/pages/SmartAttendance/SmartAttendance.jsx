import { useEffect, useRef, useState } from "react";
import styles from "./SmartAttendance.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import homeIcon from "../../assets/home.png";
import Label from "../../components/util/Label/Label";
import adminLogin from "../../assets/smartAttendance/adminLogin.png";
import adminDashboard from "../../assets/smartAttendance/dashboard.png";
import detailDashboard from "../../assets/smartAttendance/detailDashboard.png";
import userHome from "../../assets/smartAttendance/userHome.png";
import Button from "../../components/util/Button/Button";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const images = [adminLogin, adminDashboard, detailDashboard, userHome];

export default function SmartAttendance() {
  const navigate = useNavigate();
  const imageContainerRef = useRef(null);

  const [imageContainerHeight, setImageContainerHeight] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(0);

  function handleImageLoad() {
    setImageLoaded((count) => count + 1);
  }

  useEffect(() => {
    if (imageLoaded === images.length) {
      // All images loaded, now run GSAP and refresh triggers
      ScrollTrigger.refresh();
    }
  }, [imageLoaded]);

  useEffect(() => {
    if (imageContainerRef.current) {
      setImageContainerHeight(imageContainerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useGSAP(() => {
    ScrollTrigger.refresh();
    gsap.fromTo(
      ".title",
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      }
    );

    gsap.fromTo(
      ".projectDescription",
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      }
    );

    gsap.fromTo(
      [".image1", ".image2"],
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    gsap.set(".fade-image:not(.image1)", { opacity: 0, y: 40 });

    gsap.utils.toArray(".fade-image").forEach((img, i, arr) => {
      if (i === 0 || i === 1) return; // Skip the first image as it's already animated
      const prevImg = arr[i - 1];
      gsap.fromTo(
        img,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: prevImg,
            start: "20px center",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.fromTo(
      ".button-container",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".image-container",
          start: "bottom bottom",
          toggleActions: "play none none none",
          delay: 0.6,
        },
      }
    );
  });

  function handleHomeClick() {
    navigate("/");
  }

  function handlekNextClick() {
    navigate("/genAIPlatform");
  }

  return (
    <section
      className={`${styles.detailProjectContainer}`}
      style={{ minHeight: `${imageContainerHeight}` }}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
        <div
          className={`flex flex-col gap-10 w-full lg:w-2/5 ${styles.sidebar}`}
        >
          <h1
            className="display tracking-tight title"
            style={{ fontSize: "clamp(40px, 8vw, 64px)" }}
          >
            <span className={styles.slash}>/</span>SmartAttendance
          </h1>

          {/* Project Description Container */}
          <div className={`projectDescription ${styles.metaCard}`}>
            <div className={styles.metaBlock}>
              <h2 className={styles.overviewTitle}>Project Overview</h2>
              <p className={`bodyText ${styles.overviewText}`}>
                Smart Attendance System is an absence system tailored for staff
                and admin users to streamline and digitalize attendance
                processes. My role in this project as a front end developer is
                to collaborate with my team and develop an intuitive user
                interfaces that allow staff to check in using selfies and
                geolocation, as well as submit leave and permit requests. Also,
                building a real-time admin dashboards for tracking daily and
                monthly attendance, and managing approval workflows for leave
                and permits, ensuring operational efficiency and a smooth user
                experience across the platform.
              </p>
            </div>
            <div className={`${styles.metaBlock} ${styles.metaRow}`}>
              <span className="label">Year</span>
              <span className={styles.metaValue}>2025</span>
            </div>
            <div className={`${styles.metaBlock} ${styles.metaRow}`}>
              <span className="label">Role</span>
              <span className={styles.metaValue}>Front End Developer</span>
            </div>
            <div className={`${styles.metaBlock} ${styles.metaRow}`}>
              <span className="label">Tech Stack</span>
              <div className={styles.stackWrap}>
                <Label>HTML</Label>
                <Label>CSS</Label>
                <Label>Javascript</Label>
                <Label>ReactJS</Label>
                <Label>Tailwind</Label>
                <Label>Vercel</Label>
              </div>
            </div>
          </div>
          {/* Project Description Container */}
        </div>

        {/* Image */}
        <div
          className="flex flex-col w-full lg:w-3/5 gap-18 image-container"
          ref={imageContainerRef}
        >
          {images.map((src, idx) => (
            <div key={idx} className={`fade-image image${idx + 1}`}>
              <div className={styles.frame}>
                <div className={styles.frameBar}>
                  <span />
                  <span />
                  <span />
                </div>
                <LazyLoadImage
                  src={src}
                  alt={`Smart Attendance screenshot ${idx + 1}`}
                  className={styles.frameImg}
                  effect="opacity"
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
          ))}
          <div className="flex flex-row items-center justify-between button-container">
            <button
              type="button"
              aria-label="Back to home"
              onClick={handleHomeClick}
              className={styles.homeBtn}
            >
              <img src={homeIcon} alt="" className={styles.homeIconImg} />
            </button>
            <div className="flex flex-row items-center gap-3">
              <Button withImageRight={true} onHandleClick={handlekNextClick}>
                Next
              </Button>
            </div>
          </div>
        </div>
        {/* Image */}
      </div>
    </section>
  );
}
