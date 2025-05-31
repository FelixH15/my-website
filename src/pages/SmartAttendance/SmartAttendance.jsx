import styles from "./SmartAttendance.module.css";
import arrowBack from "../../assets/arrowBack.png";
import Label from "../../components/util/Label/Label";

export default function SmartAttendance() {
  return (
    <section
      className={`${styles.detailProjectContainer} flex flex-col gap-10`}
    >
      {/* <div className="flex flex-row gap-8">
        <div
          className="flex flex-row gap-2 items-center cursor-pointer"
          onClick={() => window.history.back()}
        >
          <img src={arrowBack} alt="arrowBack" className="w-8" />
        </div>
      </div> */}
      <h1 className="font-bold tracking-tight" style={{ fontSize: "64px" }}>
        /SmartAttendance
      </h1>
      <div className="flex flex-row gap-32">
        {/* Project Description Container */}
        <div className="flex flex-col gap-8 w-2/5">
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
              and admin users to streamline and digitalize attendance processes.
              My role in this project as a front end developer is to collaborate
              with my team and develop an intuitive user interfaces that allow
              staff to check in using selfies and geolocation, as well as submit
              leave and permit requests. Also, building a real-time admin
              dashboards for tracking daily and monthly attendance, and managing
              approval workflows for leave and permits, ensuring operational
              efficiency and a smooth user experience across the platform.
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

        {/* Image */}
        <div className="w-3/5">
          <p>Ini image</p>
        </div>
        {/* Image */}
      </div>
    </section>
  );
}
