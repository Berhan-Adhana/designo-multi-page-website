import React from "react";

const Projects = ({ projectsData }) => {
  return (
    <div className="app-container mt-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-7  gap-10 rounded-md overflow-hidden ">
        {projectsData.map((project, index) => (
          <article
            key={index}
            className="h-[478px] md:h-[310px] flex flex-col md:flex-row lg:flex-col  lg:h-[478px] group"
          >
            <img
              src={project.screenshot}
              alt={project.title}
              className="h-[320px] md:h-[310px] lg:h-[320px]  max-w-full rounded-t-md flex-1"
            />
            <div className="text-center flex-1 bg-background group-hover:bg-primary rounded-b-md flex flex-col items-center justify-center px-8 py-8 gap-y-6 transition-colors duration-300">
              <p className="text-primary group-hover:text-white font-medium text-[20px] leading-[26px] tracking-[5px] uppercase ">
                {project.title}
              </p>
              <p className="group-hover:text-white">{project.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
