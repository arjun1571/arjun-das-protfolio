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
    <section className="mt-20 mb-20">
      <div className="bg-gray-200 rounded-2xl px-6 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <h1 className="text-3xl lg:text-5xl font-bold mb-3">
              Fully Compatible With 🚀
            </h1>
            <p className="text-base lg:text-lg text-gray-500 mb-8">
              Passionate web developer who loves exploring modern technologies
              and building scalable applications.
            </p>
            <SkillClient skills={skills} />
          </div>

          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="fade-left"
          >
            <Image
              src={Programming.src}
              alt="Programming Illustration"
              width={500}
              height={300}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
