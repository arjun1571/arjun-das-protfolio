import Experience from "./Experience/Experience";

const educationData = [
  {
    duration: "2018 – 2022",
    title: "University",
    description:
      "City University — Department of Computer Science & Engineering. Completed B.Sc. in CSE.",
  },
  {
    duration: "2017 – 2018",
    title: "Intermediate College",
    description:
      "Palash Shilpanchal Govt. College. Completed HSC examination from Science group with good results.",
  },
  {
    duration: "2010 – 2016",
    title: "High School",
    description:
      "Jamalpur R.M Bidyapith High School. Studied from class 6 to 10 in Science group and completed SSC.",
  },
];

const Education = () => {
  return (
    <section id="education" className="my-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 px-5 py-16 text-white md:px-10 lg:py-20">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-blue-200 backdrop-blur">
              🎓 Professional Journey
            </span>

            <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">
              Education &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-300 md:text-lg">
              My academic path and professional growth as a modern web
              developer.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <div className="mb-10 flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Academic foundation
                  </p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-2xl ring-1 ring-blue-400/30">
                  🎓
                </div>
              </div>

              <div className="relative space-y-8 border-l border-blue-400/30 pl-8">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[41px] top-2 h-5 w-5 rounded-full border-4 border-slate-950 bg-blue-400 ring-4 ring-blue-400/20" />

                    <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10">
                      <span className="inline-flex rounded-full bg-blue-400/10 px-3 py-1 text-xs font-bold text-blue-300">
                        {edu.duration}
                      </span>

                      <h4 className="mt-4 text-xl font-bold text-white">
                        {edu.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-gray-300">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <div className="mb-10 flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Experience</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Professional growth
                  </p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15 text-2xl ring-1 ring-cyan-400/30">
                  💼
                </div>
              </div>

              <Experience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;