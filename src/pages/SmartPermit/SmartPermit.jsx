import styles from "./SmartPermit.module.css";
import { useEffect, useRef, useState } from "react";
import homeIcon from "../../assets/home.png";
import Label from "../../components/util/Label/Label";
import home from "../../assets/smartPermit/home.png";
import login from "../../assets/smartPermit/login.png";
import pbg1 from "../../assets/smartPermit/PBG1.png";
import pbg2 from "../../assets/smartPermit/PBG2.png";
import pbgApprove from "../../assets/smartPermit/pbgApprove.png";
import pbgList from "../../assets/smartPermit/pbgList.png";
import Button from "../../components/util/Button/Button";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LazyLoadImage } from "react-lazy-load-image-component";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const images = [home, login, pbg1, pbg2, pbgApprove, pbgList];
export default function SmartPermit() {
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
    gsap.set(".fade-image:not(.image2)", { opacity: 0, y: 40 });

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
            start: "bottom center",
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

  function handleBackClick() {
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
            <span className={styles.slash}>/</span>SmartPermit
          </h1>

          {/* Project Description Container */}
          <div className={`projectDescription ${styles.metaCard}`}>
            <div className={styles.metaBlock}>
              <h2 className={styles.overviewTitle}>Project Overview</h2>
              <p className={`bodyText ${styles.overviewText}`}>
                Develop pilot system for building permit approval system that is
                faster and more efficient. Perform collaborative design for the
                overall flow of the system; Develop automation function to
                review Building Information Model against International Building
                Code; Contribute in development of application back-end to store
                user inputs structurally; Develop Dashboard function to show
                status and insight of submitted permit;
              </p>
            </div>
            <div className={`${styles.metaBlock} ${styles.metaRow}`}>
              <span className="label">Year</span>
              <span className={styles.metaValue}>2023</span>
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
                <Label>AngularJS</Label>
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
                  alt={`Smart Permit screenshot ${idx + 1}`}
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
              <Button withImageLeft={true} onHandleClick={handleBackClick}>
                Back
              </Button>
            </div>
          </div>
        </div>
        {/* Image */}
      </div>
    </section>
  );
}
