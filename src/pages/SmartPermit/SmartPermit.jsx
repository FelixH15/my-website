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
      <div className="flex flex-row gap-32">
        <div
          className="flex flex-col gap-10 w-2/5"
          style={{
            position: "sticky",
            top: "40px",
            alignSelf: "flex-start",
          }}
        >
          <h1
            className="font-bold tracking-tight title"
            style={{ fontSize: "64px" }}
          >
            /SmartPermit
          </h1>

          {/* Project Description Container */}
          <div className="flex flex-col gap-8 projectDescription">
            {/* Project Overview */}
            <div className="flex flex-col gap-3 pb-4 border-b-1">
              <h2
                className="font-bold tracking-tight"
                style={{
                  fontSize: "32px",
                  color: "var(--primary-color)",
                }}
              >
                Project Overview
              </h2>
              <p
                className="text-xl"
                style={{ lineHeight: "36px", letterSpacing: "-0.2px" }}
              >
                Develop pilot system for building permit approval system that is
                faster and more efficient. Perform collaborative design for the
                overall flow of the system; Develop automation function to
                review Building Information Model against International Building
                Code; Contribute in development of application back-end to store
                user inputs structurally; Develop Dashboard function to show
                status and insight of submitted permit;
              </p>
            </div>
            {/* Project Overview */}
            {/* Years */}
            <div className="flex flex-row gap-12 items-center pb-4 border-b-1">
              <h2
                className="w-2/5 font-semibold tracking-tight"
                style={{ color: "var(--primary-color)", fontSize: "32px" }}
              >
                Years
              </h2>
              <p
                className="w-3/5 text-xl"
                style={{ lineHeight: "36px", letterSpacing: "-0.2px" }}
              >
                2023
              </p>
            </div>
            {/* Years */}
            {/* Role */}
            <div className="flex flex-row gap-12 items-center pb-4 border-b-1">
              <h2
                className="w-2/5 font-semibold tracking-tight"
                style={{ color: "var(--primary-color)", fontSize: "32px" }}
              >
                Role
              </h2>
              <p
                className="w-3/5 text-xl"
                style={{ lineHeight: "36px", letterSpacing: "-0.2px" }}
              >
                Front end Developer
              </p>
            </div>
            {/* Role */}
            {/* Tech Stack */}
            <div className="flex flex-row gap-12 pb-4 border-b-1">
              <h2
                className="w-2/5 font-semibold tracking-tight"
                style={{ color: "var(--primary-color)", fontSize: "32px" }}
              >
                Tech Stack
              </h2>
              <div className="w-3/5 flex flex-row gap-3 flex-wrap">
                <Label>HTML</Label>
                <Label>CSS</Label>
                <Label>Javascript</Label>
                <Label>AngularJS</Label>
              </div>
            </div>
            {/* Tech Stack */}
          </div>
          {/* Project Description Container */}
        </div>

        {/* Image */}
        <div
          className="flex flex-col w-3/5 gap-18 image-container"
          ref={imageContainerRef}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`smartPermit${idx + 1}`}
              className={`w-full fade-image image${idx + 1}`}
              style={{ height: "auto", objectFit: "cover" }}
              onLoad={handleImageLoad}
            />
          ))}
          <div className="flex flex-row items-center justify-between button-container">
            <Button
              withImageLeft={true}
              onHandleClick={handleHomeClick}
              withText={false}
              imageLeft={homeIcon}
            />
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
