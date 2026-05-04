"use client";

const Experience = () => {
  const experiences = [
    {
      company: "Naviforce Bangladesh",
      role: "Frontend Engineer",
      duration: "Dec 2024 – Present",
      description:
        "Building scalable web applications with React, Next.js, and TypeScript. Focus on performance optimization, clean code practices, and cross-functional team collaboration.",
    },
    {
      company: "KuiperZ",
      role: "Junior Software Engineer",
      duration: "Aug 2023 – Oct 2024",
      description:
        "Worked on Rysenova Landing Page and HR Payroll applications. Developed reusable components, integrated APIs, and implemented responsive designs using Tailwind CSS.",
    },
  ];

  return (
    <div className="relative space-y-8 border-l border-cyan-400/30 pl-8">
      {experiences.map((exp, idx) => (
        <div key={idx} className="relative">
          <span className="absolute -left-[41px] top-2 h-5 w-5 rounded-full border-4 border-slate-950 bg-cyan-400 ring-4 ring-cyan-400/20" />

          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
          >
            <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
              {exp.duration}
            </span>

            <h3 className="mt-4 text-xl font-bold text-white">
              {exp.company}
            </h3>

            <h4 className="mt-1 text-base font-semibold text-blue-300">
              {exp.role}
            </h4>

            <p className="mt-3 text-sm leading-7 text-gray-300">
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;