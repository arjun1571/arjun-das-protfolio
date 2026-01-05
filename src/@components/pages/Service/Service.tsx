"use client";
import Image from "next/image";
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
// import filmora from "@/@assets/image/filmora.png";
import photoshop from "@/@assets/image/photoshop.png";
import mongo from "@/@assets/image/mongo.png";
import github from "@/@assets/image/github.png";
import nextJs from "@/@assets/image/next-js.png";
import typescript from "@/@assets/image/typescript.png";
import AWS from "@/@assets/image/aws.jpg";
import CloudPanel from "@/@assets/image/cloudePanel.png";
import digitalocean from "@/@assets/image/disitalOcean.png";
import Programming from "@/@assets/image/Programming-amico.png";

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
  //   { name: "Filmora", src: filmora },
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
    <section className="mt-20 mb-20">
      <div className=" bg-gray-200 rounded-2xl px-6 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <h1 className="text-3xl lg:text-5xl font-bold mb-3">
              Fully Compatible With 🚀
            </h1>

            <p className="text-base lg:text-lg text-gray-500 mb-8">
              Passionate web developer who loves exploring modern technologies
              and building scalable applications.
            </p>

            {/* SKILLS GRID */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center bg-white rounded-xl p-4 shadow hover:shadow-lg transition h-24"
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="fade-left"
          >
            <Image
              src={Programming}
              alt="Programming Illustration"
              width={500}
              height={300}
              className="rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
