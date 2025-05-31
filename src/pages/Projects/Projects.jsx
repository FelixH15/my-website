import { useNavigate } from "react-router-dom";
import arrowRight from "../../assets/arrowRight.svg";
import styles from "./Projects.module.css";

const projectArr = [
  {
    type: "smartAttendance",
    date: "2025",
    title: "Building a Smart Attendance System Web Application",
    description:
      "A web-based application designed for both users and administrators. Users can submit absence requests via the mobile interface, while administrators monitor and manage absences through a comprehensive dashboard on the desktop platform.",
  },
  {
    type: "genAIPlatform",
    date: "2024",
    title: "Building a GenAI Web Platform",
    description:
      "A flexible Generative AI platform that empowers users to choose from multiple AI engines and personalize their experience by selecting custom personas. Whether for productivity, creativity, or conversation, users can tailor the AI to match their unique needs and tone.",
  },
  {
    type: "smartPermit",
    date: "2023",
    title: "Building a Smart Permit System Web Application",
    description:
      "A web-based application for building permit requests. Users can submit their registration, and the system automatically evaluates and scores each request based on key parameters, helping streamline the approval process with data-driven decisions.",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  function handleProjectClick(type) {
    navigate(`/${type}`);
  }

  return (
    <section
      className="snap-section"
      style={{ paddingTop: "80px", justifyContent: "flex-start" }}
    >
      <div className="flex flex-row justify-between items-start w-2/2">
        <p className={`text-4xl font-medium w-1/3`}>/Projects</p>
        <div className="flex flex-col gap-6 w-2/3">
          {projectArr.map((project) => (
            <div
              key={project.type}
              className={`flex flex-row gap-10 p-6 cursor-pointer rounded-xl w-2/2 ${styles.projectCard}`}
              onClick={() => handleProjectClick(project.type)}
            >
              <p className="font-light text-base">{project.date}</p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3">
                  <h2
                    className="font-bold text-xl"
                    style={{ lineHeight: "128%", letterSpacing: "-0.6px" }}
                  >
                    {project.title}
                  </h2>
                  <img src={arrowRight} className="w-3" alt="arrow-right" />
                </div>
                <p
                  className="text-base"
                  style={{ lineHeight: "183%", letterSpacing: "-0.42px" }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
