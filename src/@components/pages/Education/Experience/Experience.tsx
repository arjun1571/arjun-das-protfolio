"use client";

type ExperienceItem = {
  company: string;
  role: string;
  start: { month: number; year: number };
  end: { month: number; year: number } | null;
  description: string;
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatPeriod(start: ExperienceItem["start"], end: ExperienceItem["end"]) {
  const startLabel = `${MONTHS[start.month - 1]} ${start.year}`;
  const endLabel = end ? `${MONTHS[end.month - 1]} ${end.year}` : "Present";
  return `${startLabel} – ${endLabel}`;
}

function calculateTenure(
  start: ExperienceItem["start"],
  end: ExperienceItem["end"]
) {
  const endDate = end ?? {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };

  let totalMonths =
    (endDate.year - start.year) * 12 + (endDate.month - start.month) + 1;

  if (totalMonths < 1) totalMonths = 1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) {
    return `${years} yr ${months} mos`;
  }

  if (years > 0) {
    return years === 1 ? "1 yr" : `${years} yrs`;
  }

  return months === 1 ? "1 mo" : `${months} mos`;
}

const experiences: ExperienceItem[] = [
  {
    company: "Naviforce Bangladesh",
    role: "Frontend Engineer",
    start: { month: 12, year: 2024 },
    end: null,
    description:
      "Building scalable web applications with React, Next.js, and TypeScript. Focus on performance optimization, clean code practices, and cross-functional team collaboration.",
  },
  {
    company: "KuiperZ",
    role: "Junior Software Engineer",
    start: { month: 8, year: 2023 },
    end: { month: 10, year: 2024 },
    description:
      "Worked on Rysenova Landing Page and HR Payroll applications. Developed reusable components, integrated APIs, and implemented responsive designs using Tailwind CSS.",
  },
];

const Experience = () => {
  return (
    <div className="relative space-y-8 border-l border-cyan-400/30 pl-8">
      {experiences.map((exp, idx) => {
        const period = formatPeriod(exp.start, exp.end);
        const tenure = calculateTenure(exp.start, exp.end);

        return (
          <div key={idx} className="relative">
            <span className="absolute -left-[41px] top-2 h-5 w-5 rounded-full border-4 border-slate-950 bg-cyan-400 ring-4 ring-cyan-400/20" />

            <div
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
              className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                  {period}
                </span>
                <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">
                  {tenure}
                </span>
              </div>

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
        );
      })}
    </div>
  );
};

export default Experience;
