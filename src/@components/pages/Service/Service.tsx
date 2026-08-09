import Programming from "@/@assets/image/Programming-amico.png";
import html from "@/@assets/image/html.png";
import css from "@/@assets/image/css.avif";
import bootstrap from "@/@assets/image/bootstrap.png";
import tailwind from "@/@assets/image/Tailwind.png";
import js from "@/@assets/image/js.png";
import react from "@/@assets/image/react.png";
import nodejs from "@/@assets/image/nodejs.png";
import express from "@/@assets/image/ex.png";
import firebase from "@/@assets/image/firebase.png";
import figma from "@/@assets/image/figma.png";
import photoshop from "@/@assets/image/photoshop.png";
import mongo from "@/@assets/image/mongo.png";
import github from "@/@assets/image/github.png";
import nextJs from "@/@assets/image/next-js.png";
import typescript from "@/@assets/image/typescript.png";
import AWS from "@/@assets/image/aws.jpg";
import CloudPanel from "@/@assets/image/cloudePanel.png";
import digitalocean from "@/@assets/image/disitalOcean.png";
import Image from "next/image";
import SkillClient from "./Skill/SkillClient";

const skills = [
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "Bootstrap", src: bootstrap },
  { name: "Tailwind", src: tailwind },
  { name: "JavaScript", src: js },
  { name: "React", src: react },
  { name: "Node.js", src: nodejs },
  { name: "Express", src: express },
  { name: "Firebase", src: firebase },
  { name: "Figma", src: figma },
  { name: "Photoshop", src: photoshop },
  { name: "MongoDB", src: mongo },
  { name: "GitHub", src: github },
  { name: "Next.js", src: nextJs },
  { name: "Typescript", src: typescript },
  { name: "AWS", src: AWS },
  { name: "CloudPanel", src: CloudPanel },
  { name: "Digitalocean", src: digitalocean },
];

const Service = () => {
  return (
    <section id="skills" className="mb-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 px-6 py-16 text-white md:px-10">
        {/* Background Effects */}
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_35%)]" />

        <div className="relative z-10 flex flex-col-reverse items-center gap-14 lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
              ⚡ My Technical Skills
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">
              Fully Compatible With{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Modern Tech
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-gray-300 lg:text-lg">
              Passionate web developer who loves exploring modern technologies
              and building scalable, secure, and user-friendly applications with
              clean UI experience.
            </p>

            <div className="mt-8">
              <SkillClient skills={skills} />
            </div>
          </div>

          {/* Right Image */}
          <div
            className="flex w-full justify-center lg:w-1/2"
            data-aos="fade-left"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <Image
                  src={Programming}
                  alt="Programming Illustration"
                  width={500}
                  height={360}
                  className="drop-shadow-2xl"
                />
              </div>

              <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-center text-sm font-bold text-white shadow-xl backdrop-blur">
                React • Next.js • TypeScript • Node.js
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;