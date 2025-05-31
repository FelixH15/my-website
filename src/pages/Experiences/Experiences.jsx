import styles from "./Experiences.module.css";

const experiencesArr = [
  {
    title: "Application Developer",
    company: "IBM",
    date: "Jun 2024 - Present",
    description:
      "Developing an AI platform using AngularJS, where I collaborated closely with developers and designers to ensure the platform met business requirements. My focus was on creating a responsive and efficient user interface, working as part of a team to deliver a high-quality product that aligned with the company’s goals",
  },
  {
    title: "Application Developer",
    company: "PT Jasa Teknologi Informasi IBM",
    date: "May 2022 - Jun 2024",
    description:
      "Designed and developed internal applications using AngularJS, creating user-friendly interfaces with a strong focus on UI/UX design using Figma. I worked closely with other developers to ensure that our applications met stakeholder expectations and requirements, delivering high-quality solutions aligned with business goals.",
  },
  {
    title: "Quality Assurance Intern",
    company: "PT Global Loyalty Indonesia",
    date: "Sep 2021 - Mar 2022",
    description:
      "As a Quality Assurance Intern, I was responsible for supporting the QA team in reviewing and analyzing system specifications to ensure alignment with project requirements. I contributed to developing effective strategies and test plans, as well as executing automation tests to maintain high product quality. My role involved creating detailed logs to document testing phases and defects for both websites and mobile applications, reporting bugs and errors to the development team for resolution. Additionally, I assisted in conducting post-release and post-implementation testing to verify the stability and functionality of the delivered solutions.",
  },
  {
    title: "Robotic Process Automation Intern",
    company: "PT Quanta Coretech Indonesia",
    date: "Feb 2021 - Jul 2021",
    description:
      "Responsible for the design, development, and implementation of Robotic Process Automation (RPA) solutions using Automation Anywhere and UIPath. Tasks include analyzing and resolving issues related to RPA processes, ensuring smooth functionality and performance. Additionally, responsibilities involve controlling and monitoring RPA workflows to maintain efficiency and effectiveness in automated processes.",
  },
];

function Experiences() {
  return (
    <section
      className="snap-section"
      style={{ height: "150vh", justifyContent: "flex-start" }}
    >
      <div className="flex flex-row items-start w-2/2 justify-between">
        <div
          className={`flex flex-col gap-5 cursor-pointer w-1/3 ${styles.stickyContainer}`}
        >
          <h1 className={`text-4xl font-medium`}>/Experiences</h1>
          <p>View my full resume</p>
        </div>
        <div
          className={`flex flex-col gap-14 pl-6 ${styles.experienceContainer} w-2/3 relative`}
        >
          {experiencesArr.map((experience) => (
            // Experience Card
            <div className={`flex flex-row gap-5`}>
              {/* Experience Date */}
              <h2 className="text-2xl tracking-tight font-normal w-2/5">
                {experience.date}
              </h2>
              {/* Experience Date */}

              {/* Experience Detail */}
              <div className="flex flex-col gap-6 w-3/5">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {experience.title}
                  </h3>
                  <p
                    className="text-lg font-normal tracking-tight"
                    style={{ color: "var(--primary-color)" }}
                  >
                    {experience.company}
                  </p>
                  <p className="text-base font-normal tracking-tight">
                    {experience.description}
                  </p>
                </div>
              </div>
              {/* Experience Detail */}
            </div>
            // Experience Card
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
