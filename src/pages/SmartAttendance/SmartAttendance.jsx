import styles from "./SmartAttendance.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrowBack from "../../assets/arrowBack.png";
import Label from "../../components/util/Label/Label";
import adminLogin from "../../assets/smartAttendance/adminLogin.png";
import adminDashboard from "../../assets/smartAttendance/dashboard.png";
import detailDashboard from "../../assets/smartAttendance/detailDashboard.png";
import userHome from "../../assets/smartAttendance/userHome.png";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const images = [adminLogin, adminDashboard, detailDashboard, userHome];

export default function SmartAttendance() {
  useGSAP(() => {
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

    gsap.utils.toArray(".fade-image").forEach((img, i) => {
      gsap.fromTo(
        `.image${i + 1 + 1}`,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 5%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  });

  return (
    <section className={`${styles.detailProjectContainer}`}>
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
            /SmartAttendance
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
            {/* Project Overview */}
            {/* Years */}
            <div className="flex flex-row gap-12 items-center pb-4 border-b-1">
              <h2
                className="w-[113px] font-semibold tracking-tight"
                style={{ color: "var(--primary-color)", fontSize: "32px" }}
              >
                Years
              </h2>
              <p
                className="text-xl"
                style={{ lineHeight: "36px", letterSpacing: "-0.2px" }}
              >
                2025
              </p>
            </div>
            {/* Years */}
            {/* Role */}
            <div className="flex flex-row gap-12 items-center pb-4 border-b-1">
              <h2
                className="w-[113px] font-semibold tracking-tight"
                style={{ color: "var(--primary-color)", fontSize: "32px" }}
              >
                Role
              </h2>
              <p
                className="text-xl"
                style={{ lineHeight: "36px", letterSpacing: "-0.2px" }}
              >
                Front end Developer
              </p>
            </div>
            {/* Role */}
            {/* Tech Stack */}
            <div className="flex flex-row gap-12 items-center pb-4 border-b-1">
              <h2
                className="w-[113px] font-semibold tracking-tight"
                style={{ color: "var(--primary-color)", fontSize: "32px" }}
              >
                Tech Stack
              </h2>
              <div className="flex flex-row gap-3 flex-wrap">
                <Label>HTML</Label>
                <Label>CSS</Label>
                <Label>Javascript</Label>
                <Label>ReactJS</Label>
                <Label>Tailwind</Label>
                <Label>Vercel</Label>
              </div>
            </div>
            {/* Tech Stack */}
          </div>
          {/* Project Description Container */}
        </div>

        {/* Image */}
        <div className="flex flex-col w-3/5 gap-18">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`SmartAttendance${idx + 1}`}
              className={`w-full fade-image image${idx + 1}`}
              style={{ height: "100%", objectFit: "cover" }}
            />
          ))}
          <div>
            {" "}
            <img src={arrowBack} alt="" /> <p>test</p>
          </div>
        </div>
        {/* Image */}
      </div>
    </section>
  );
}
