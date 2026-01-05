"use client";
import Image from "next/image";
import Arjun from "@/@assets/image/22.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <section className="bg-gray-200 rounded-2xl mt-10 px-6 py-14">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Hi, I&apos;m <span className="text-primary">Arjun Das</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mt-3 text-gray-500">
            Front-End Web Developer
          </h2>

          <p className="mt-6 text-gray md:text-lg text-gray-600">
            Software Developer with 2+ years of professional experience,
            specializing in React & Next.js. Passionate about building scalable,
            secure, and maintainable web applications.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white px-8 py-2.5 rounded font-bold">
              Download Resume
            </button>
            <button className="bg-black text-white px-8 py-2.5 rounded font-bold">
              Contact Me
            </button>
          </div>

          {/* SOCIAL */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-3">Find me on</h3>
            <div className="flex  justify-center lg:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=100027943727580"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
              </a>

              <a
                href="https://github.com/arjun1571"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <FontAwesomeIcon icon={faSquareGithub} size="2x" />
              </a>

              <a
                href="https://www.linkedin.com/in/arjundasbd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src={Arjun}
              alt="Arjun Das"
              fill
              className="object-contain rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
