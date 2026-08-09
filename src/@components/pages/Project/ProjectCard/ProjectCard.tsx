"use client";

import Link from "next/link";
import ScreenshotFrame from "../ScreenshotFrame/ScreenshotFrame";

type Project = {
  id: number;
  title: string;
  image: string;
  url: string;
  slug?: string;
  description: string;
};

const ProjectCard = ({ data }: { data: Project }) => {
  const { title, image, url, slug, description } = data;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/10">
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl transition group-hover:bg-cyan-400/25" />

      <ScreenshotFrame
        src={image}
        alt={title}
        variant="card"
        sizes="(max-width: 768px) 100vw, 25vw"
        className="transition-transform duration-500 group-hover:scale-[1.01]"
      />

      <div className="flex min-h-[210px] flex-col p-3 pt-5">
        <h2 className="mb-3 text-lg font-bold text-white sm:text-xl">
          {title}
        </h2>

        <p className="line-clamp-3 flex-grow text-sm leading-7 text-gray-300">
          {description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {slug ? (
            <Link
              href={`/project/${slug}`}
              className="inline-flex items-center justify-center gap-1 rounded-xl border border-blue-400/30 bg-blue-500/10 px-3 py-3 text-sm font-bold text-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-white"
            >
              See Details
            </Link>
          ) : (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 rounded-xl border border-blue-400/30 bg-blue-500/10 px-3 py-3 text-sm font-bold text-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-white"
            >
              See Details
            </a>
          )}

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-3 py-3 text-sm font-bold text-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/60 hover:bg-emerald-500/20 hover:text-white"
          >
            Go Live
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
