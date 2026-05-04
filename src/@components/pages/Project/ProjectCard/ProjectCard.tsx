"use client";

import Image from "next/image";

type Project = {
  id: number;
  title: string;
  image: string;
  url: string;
  description: string;
};

const ProjectCard = ({ data }: { data: Project }) => {
  const { title, image, url, description } = data;

  return (
    <div
      data-aos="zoom-out"
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/10"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl transition group-hover:bg-cyan-400/25" />

      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover p-2 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex min-h-56 flex-col p-3 pt-5">
        <h2 className="mb-3 text-xl font-bold text-white">{title}</h2>

        <p className="line-clamp-3 flex-grow text-sm leading-7 text-gray-300">
          {description}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl
  border border-blue-400/30 bg-blue-500/10
  px-5 py-3 text-sm font-bold text-blue-200
  transition-all duration-300
  hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-white"
        >
          See Details
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;