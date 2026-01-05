"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

interface IProject {
  id: number;
  title: string;
  image: string;
  url: string;
  description: string;
}

const Projects = () => {
  const [projectData, setProjectData] = useState<IProject[]>([]);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data))
      .catch((err) => console.error("Failed to load projects", err));
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mt-20">
      <h1
        id="projects"
        className="text-center font-bold text-4xl cursor-pointer"
        onClick={() => scrollToSection("projects")}
      >
        Projects
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-11 gap-5">
        {projectData.map((data: IProject) => (
          <ProjectCard key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
