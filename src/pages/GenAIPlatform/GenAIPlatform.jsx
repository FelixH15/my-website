import styles from "./GenAIPlatform.module.css";
import { useEffect, useRef, useState } from "react";
import homeIcon from "../../assets/home.png";
import Label from "../../components/util/Label/Label";
import home from "../../assets/genAI/home.png";
import newChat from "../../assets/genAI/newChat.png";
import chatRoom from "../../assets/genAI/chatRoom.png";
import Button from "../../components/util/Button/Button";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LazyLoadImage } from "react-lazy-load-image-component";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const images = [home, newChat, chatRoom];
export default function GenAIPlatform() {
  const navigate = useNavigate();
  const imageContainerRef = useRef(null);

  const [imageContainerHeight, setImageContainerHeight] = useState(0);

  useEffect(() => {
    if (imageContainerRef.current) {
      setImageContainerHeight(imageContainerRef.current.offsetHeight);
    }

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
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
            start: "center center",
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
    navigate("/smartAttendance");
  }

  function handlekNextClick() {
    navigate("/smartPermit");
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
            /GenAIPlatform
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
                Developing an AI platform solution for enterprise-level
                applications by translating complex designs into intuitive and
                user-friendly interfaces. Responsible for creating responsive
                and engaging user interfaces while collaborating closely with
                cross-functional teams to ensure seamless integration and
                efficient functionality across the platform.
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
                2024
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
                <Label>Python</Label>
                <Label>Langchain</Label>
                <Label>Genai</Label>
                <Label>Gemini API</Label>
                <Label>OpenAI API</Label>
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
            <LazyLoadImage
              key={idx}
              src={src}
              alt={`SmartAttendance${idx + 1}`}
              className={`w-full fade-image image${idx + 1}`}
              effect="opacity"
              width="100%"
              style={{ objectFit: "cover" }}
            />
          ))}
          <div className="flex flex-row items-center justify-between button-container">
            <img
              src={homeIcon}
              alt="home-jpg"
              style={{
                backgroundColor: "#2a2b2d",
                padding: "18px",
                borderRadius: "100%",
              }}
              onClick={handleHomeClick}
              className={`cursor-pointer ${styles.homeIcon}`}
            />
            <div className="flex flex-row items-center gap-18">
              <Button withImageLeft={true} onHandleClick={handleBackClick}>
                Back
              </Button>
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
