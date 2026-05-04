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

  return (
    <section id="projects" className="my-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 px-6 py-16 md:px-10">

        {/* Glow */}
        <div className="absolute -left-20 top-10 h-72 w-72 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 bg-cyan-400/20 blur-3xl rounded-full" />

        <div className="relative z-10 text-center">

          {/* Badge */}
          <span className="inline-block px-4 py-2 text-sm font-semibold bg-white/10 text-blue-300 rounded-full backdrop-blur">
            💼 My Work
          </span>

          {/* Title */}
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-white">
            Featured Projects
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-base md:text-lg leading-8">
            Some of my recent works built with React, Next.js, Tailwind CSS,
            and modern scalable technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projectData.map((data: IProject) => (
            <ProjectCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;