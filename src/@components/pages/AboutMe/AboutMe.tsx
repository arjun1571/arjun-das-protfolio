"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import mybg from "@/@assets/image/my-bg.png";

const fullTitle = "I Build Modern & Scalable Web Apps";

const AboutMe = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [title, setTitle] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let index = 0;

    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, index + 1));
      index++;

      if (index === fullTitle.length) {
        clearInterval(interval);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [started]);

  return (
    <section ref={sectionRef} id="about" className="my-14">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 px-5 py-10 text-white md:px-10 lg:py-8">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-blue-500 to-cyan-400 opacity-30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
                <Image
                  src={mybg}
                  alt="Arjun Chandra Das"
                  className="rounded-[1.5rem] object-cover"
                  width={420}
                  height={420}
                  priority
                />
              </div>

              <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-center text-sm font-bold text-white shadow-xl backdrop-blur">
                Frontend Developer
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="space-y-6 text-center lg:text-left"
          >
            <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-200 backdrop-blur">
              👨‍💻 About Me
            </span>

            <h2 className="min-h-[112px] text-4xl font-extrabold lg:text-5xl">
              {title.includes("Scalable Web Apps") ? (
                <>
                  I Build Modern &{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Scalable Web Apps
                  </span>
                </>
              ) : (
                <>
                  {title}
                  <span className="ml-1 animate-pulse text-cyan-300">|</span>
                </>
              )}
            </h2>

            <p className="leading-8 text-gray-300">
              I’m{" "}
              <span className="font-semibold text-white">
                Arjun Chandra Das
              </span>
              , a passionate and detail-oriented Frontend Developer with over{" "}
              <span className="font-semibold text-blue-300">2+ years</span> of
              professional experience. I specialize in{" "}
              <span className="font-medium text-white">
                React.js, Next.js, and TypeScript
              </span>
              , building responsive, scalable, and high-performance web
              applications.
            </p>

            <p className="leading-8 text-gray-300">
              I work extensively with HTML, CSS, Tailwind CSS, and SASS to craft
              clean, user-friendly interfaces. I also have experience developing
              PWAs and cross-platform mobile apps using{" "}
              <span className="font-medium text-white">React Native</span>.
            </p>

            <p className="leading-8 text-gray-300">
              I’m always eager to learn new technologies and work on innovative
              projects. If you’re looking for a developer who values clean code,
              performance, and great user experience — let’s connect 🚀
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#contact"
                className="rounded-full bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Contact Me
              </a>

              <a
                href="/Arjun React Dev.pdf"
                target="_blank"
                className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
