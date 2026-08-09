/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectData } from "@/@data/projectData";
import DemoLoginCard from "@/@components/pages/Project/DemoLoginCard/DemoLoginCard";
import ScreenshotFrame from "@/@components/pages/Project/ScreenshotFrame/ScreenshotFrame";

export async function generateStaticParams() {
  return projectData.map((project) => ({ slug: project.slug }));
}

const ProjectDetailsPage = async ({ params }: any) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  const otherProjects = projectData.filter((item) => item.slug !== project.slug);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080c14] text-white">
      <section className="relative px-4 pb-8 pt-6 md:pt-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb35,transparent_32%),radial-gradient(circle_at_bottom_right,#38bdf835,transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/#projects"
            className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white"
          >
            ← Back to Projects
          </Link>

          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-bold text-blue-300">
                Featured Project
              </span>

              <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:shadow-blue-500/40"
              >
                Visit Live Site →
              </a>
            </div>

            <ScreenshotFrame
              src={project.image}
              alt={project.title}
              route={project.liveUrl.replace(/^https?:\/\//, "")}
              variant="hero"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-2">
        <div className="mx-auto max-w-7xl">
          {project.credentials && (
            <div className="mb-5 lg:hidden">
              <DemoLoginCard
                email={project.credentials.email}
                password={project.credentials.password}
                liveUrl={project.liveUrl}
                adminUrl={project.credentials.adminUrl}
              />
            </div>
          )}

          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="space-y-6">
              <article className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0d1424] p-5 shadow-2xl shadow-black/40 md:p-8">
                <h2 className="text-3xl font-black">Project Overview</h2>
                <p className="mt-4 text-lg leading-9 text-slate-300">
                  {project.overview}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <span className="mt-0.5 text-blue-400">✓</span>
                      <p className="text-sm leading-7 text-slate-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </article>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                  Screenshots & Walkthrough
                </p>
                <h2 className="mt-1 text-3xl font-black">See How It Works</h2>

                <div className="mt-5 space-y-6">
                  {project.screenshots.map((shot, index) => {
                    const prevSection = project.screenshots[index - 1]?.section;
                    const showSection =
                      shot.section && shot.section !== prevSection;

                    return (
                      <div key={shot.title}>
                        {showSection && (
                          <div className="mb-4 mt-2 flex items-center gap-4">
                            <h3 className="text-2xl font-black text-white">
                              {shot.section}
                            </h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/40 to-transparent" />
                          </div>
                        )}

                        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-3 shadow-xl shadow-black/25 sm:p-4">
                          <ScreenshotFrame
                            src={shot.image}
                            alt={shot.title}
                            route={shot.route}
                            badge={String(index + 1).padStart(2, "0")}
                            variant="showcase"
                          />

                      <div className="p-3 md:p-5">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-black text-white md:text-2xl">
                            {shot.title}
                          </h3>
                          <code className="rounded-lg border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                            {shot.route}
                          </code>
                        </div>
                        <p className="mt-3 text-base leading-7 text-slate-300">
                          {shot.description}
                        </p>
                      </div>
                        </article>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-8 lg:self-start">
              {project.credentials && (
                <div className="hidden lg:block">
                  <DemoLoginCard
                    email={project.credentials.email}
                    password={project.credentials.password}
                    liveUrl={project.liveUrl}
                    adminUrl={project.credentials.adminUrl}
                  />
                </div>
              )}

              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <h3 className="text-2xl font-black">Tech Stack</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2.5rem] border border-blue-400/20 bg-gradient-to-br from-blue-600/20 to-cyan-400/10 p-6 shadow-2xl shadow-blue-950/30">
                <h3 className="text-2xl font-black">Need Something Similar?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  I can build custom e-commerce dashboards, admin panels, and
                  business web applications tailored to your needs.
                </p>

                <Link
                  href="/#contact"
                  className="mt-6 inline-flex w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-500 hover:text-white"
                >
                  Contact Me
                </Link>
              </div>
            </aside>
          </div>

          {otherProjects.length > 0 && (
            <div className="mt-10">
              <h2 className="text-3xl font-black">More Projects</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {otherProjects.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/project/${item.slug}`}
                    className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-xl transition hover:-translate-y-1 hover:border-blue-400/50"
                  >
                    <ScreenshotFrame
                      src={item.image}
                      alt={item.title}
                      variant="card"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="p-2 pt-4">
                      <h3 className="text-xl font-black group-hover:text-blue-300">
                        {item.title}
                      </h3>
                      <p className="mt-3 line-clamp-2 text-sm text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailsPage;
