export interface IData {
  id: number;
  name: string;
  img: string;
  des: string;
}

const What = () => {
  const Data: IData[] = [
    {
      id: 1,
      name: "Frontend Development",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721269.png",
      des: "Building responsive, fast and interactive user interfaces using React, Next.js and modern frontend technologies.",
    },
    {
      id: 2,
      name: "Fullstack Web Apps",
      img: "https://cdn-icons-png.flaticon.com/512/2888/2888407.png",
      des: "Developing scalable fullstack applications with API integration, authentication and modern architecture.",
    },
    {
      id: 3,
      name: "UI/UX Implementation",
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      des: "Converting Figma or design files into pixel-perfect, clean and user-friendly interfaces.",
    },
    {
      id: 4,
      name: "Performance Optimization",
      img: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
      des: "Optimizing web apps for speed, SEO and performance to ensure smooth user experience.",
    },
    {
      id: 5,
      name: "API Integration",
      img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      des: "Integrating REST APIs and third-party services efficiently for dynamic data-driven applications.",
    },
    {
      id: 6,
      name: "Deployment & Hosting",
      img: "https://cdn-icons-png.flaticon.com/512/4144/4144783.png",
      des: "Deploying applications on Vercel, DigitalOcean, AWS with proper CI/CD and optimization.",
    },
  ];

  return (
    <section id="whatIdo" className="my-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 px-5 py-16 text-white md:px-10 lg:py-20">

        {/* Glow */}
        <div className="absolute -left-20 top-10 h-72 w-72 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 bg-cyan-400/20 blur-3xl rounded-full" />

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="px-4 py-2 bg-white/10 rounded-full text-blue-300 text-sm font-semibold backdrop-blur">
              🚀 Services
            </span>

            <h1 className="mt-5 text-3xl md:text-5xl font-extrabold">
              What I{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Do
              </span>
            </h1>

            <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
              I help businesses and startups build modern, scalable and high-performance web applications.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Data.map((data) => (
              <div
                key={data.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/10"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-cyan-400/25" />

                <div className="relative z-10">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/40">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="h-12 w-12 object-contain transition group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-center text-lg font-bold text-white">
                    {data.name}
                  </h3>

                  <p className="mt-3 text-center text-sm text-gray-300 leading-7">
                    {data.des}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default What;