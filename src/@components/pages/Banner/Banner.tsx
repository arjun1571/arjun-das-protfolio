import Image from "next/image";
import Arjun from "@/@assets/image/22.png";
import BannerIcon from "./BannerIcon/BannerIcon";

const Banner = () => {
  return (
    <section className="bg-gray-200 rounded-2xl px-6 py-14">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Hi, I&apos;m <span className="text-blue-900">Arjun Das</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mt-3 text-gray-500">
            Front-End Web Developer
          </h2>

          <p className="mt-6 text-gray md:text-lg text-gray-600">
            Software Developer with 2+ years of professional experience,
            specializing in React & Next.js. Passionate about building scalable,
            secure, and maintainable web applications.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/Arjun React Dev.pdf"
              target="_blank"
              className="bg-blue-600 text-white px-8 py-2.5 rounded font-bold"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="bg-black text-white px-8 py-2.5 rounded font-bold"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-3">Find me on</h3>
            <BannerIcon />
          </div>
        </div>

        <div className="w-full xl:w-1/2 flex lg:justify-end justify-center">
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
