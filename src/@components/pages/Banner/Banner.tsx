import Image from "next/image";
import Arjun from "@/@assets/bannerImage/arjunDas.png";
import BannerIcon from "./BannerIcon/BannerIcon";

const Banner = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 px-6 py-16 text-white md:px-10 lg:py-20">
      {/* Background Effects */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 lg:flex-row">
        {/* Left Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
            👋 Welcome to my portfolio
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl xl:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Arjun Das
            </span>
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-gray-300 md:text-2xl">
            Front-End Web Developer
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-300 md:text-lg lg:mx-0">
            Software Developer with 2+ years of professional experience,
            specializing in React & Next.js. I build scalable, secure, and
            maintainable web applications with clean UI and smooth user
            experience.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="/Arjun React Dev.pdf"
              target="_blank"
              className="rounded-full bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10">
            <h3 className="mb-4 text-lg font-bold text-gray-200">
              Find me on
            </h3>
            <BannerIcon />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="relative group">

            {/* Glow */}
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 opacity-25 blur-3xl transition duration-500 group-hover:opacity-40" />

            <div className="relative h-[360px] w-[300px] md:h-[420px] md:w-[340px] lg:h-[520px] lg:w-[420px] overflow-hidden rounded-[2rem] border border-white/10 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

              <Image
                src={Arjun}
                alt="Arjun Das"
                fill
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover rounded-[1.5rem] transition duration-500 group-hover:scale-105"
              />

            </div>

            {/* Bottom Tag */}
            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 px-5 py-3 text-center text-sm font-semibold text-white shadow-xl backdrop-blur-md">
              React • Next.js • TypeScript
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;