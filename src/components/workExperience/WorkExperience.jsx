import React from "react";


const WorkExperience = () => {
  const projectData = {
    title: "Full Stack Development Internship",
    companyName: "Intelgenic",
    duration: "06/23 - 08/23",
    projectTitle: "Dynamic User Interface for Data Visualization Platform",
    technologies: "JavaScript, D3.js, React",
    overview:
      `At Intelgenic, I undertook a pivotal role in the Front-End Development team, working on the project titled "Dynamic User Interface for Data Visualization Platform." Employing a tech stack that included JavaScript, D3.js, and React, the project focused on enhancing the user interface of a web-based data visualization tool. My contributions aimed at significantly improving the interactivity and usability of the platform, allowing users to create and customize data visualizations with heightened intuitiveness.`,
    responsibilities: [
      "Implemented interactive data visualization features using D3.js, enabling users to manipulate graphs and charts in real-time.",
      "Developed reusable React components for various visualization options, improving the development workflow and consistency across the platform.",
      "Collaborated with the UX team to redesign the user interface, focusing on usability and responsive design principles.",
      "Participated in agile development cycles, contributing to sprint planning, stand-ups, and retrospectives.",
    ],
    achievements: "Successfully integrated new visualization features.",
  };

  return (
    <section id="experience" className="md:py-40 py-20">
      <div className="container mx-auto flex items-center justify-center px-4">
        <div className="md:w-3/4 p-6 rounded-md shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 text-center underline">
            Experience
          </h2>

          <div className="mb-8">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {projectData.title}
                </h3>
                <p className="text-gray-500 text-sm text-opacity-70 md:text-md ">
                  {projectData.duration}
                </p>
              </div>
              <p className="text-gray-500 text-opacity-70 my-2">
                {projectData.companyName}
              </p>
            </div>
            <div className="mx-5">
              
              <p className="text-gray-300">{projectData.overview}</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-2">
              Responsibilities:
            </h4>
            <ul className="list-disc ml-6 text-gray-300">
              {projectData.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>

          <p className="text-gray-300 mb-2">
            <span className="font-bold">Achievements:</span>{" "}
            {projectData.achievements}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
