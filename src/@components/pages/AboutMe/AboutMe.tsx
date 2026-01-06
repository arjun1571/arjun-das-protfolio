import Image from "next/image";
import mybg from "@/@assets/image/my-bg.png";

const AboutMe = () => {
  return (
    <section className="mt-24 mb-24">
      <div className=" px-4">
        <div className="bg-gray-200 rounded-3xl shadow-lg p-8 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="flex justify-center"
            >
              <Image
                src={mybg}
                alt="Arjun Chandra Das"
                className="rounded-2xl shadow-2xl object-cover"
                width={420}
                height={420}
                priority
              />
            </div>

            {/* Content */}
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                About Me
              </h2>

              <p className="text-base-content leading-relaxed">
                I’m <span className="font-semibold">Arjun Chandra Das</span>, a
                passionate and detail-oriented Frontend Developer with over{" "}
                <span className="font-semibold">2+ year</span> of professional
                experience. I specialize in{" "}
                <span className="font-medium">
                  React.js, Next.js, and TypeScript
                </span>
                , building responsive, scalable, and high-performance web
                applications.
              </p>

              <p className="text-base-content leading-relaxed">
                I work extensively with HTML, CSS, Tailwind CSS, and SASS to
                craft clean, user-friendly interfaces. I also have experience
                developing PWAs and cross-platform mobile apps using{" "}
                <span className="font-medium">React Native</span>.
              </p>

              <p className="text-base-content leading-relaxed">
                I’m always eager to learn new technologies and work on
                innovative projects. If you’re looking for a developer who
                values clean code, performance, and great user experience —
                let’s connect 🚀
              </p>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href="#contact"
                  className=" bg-blue-600 rounded-full px-8 text-white py-2 font-bold"
                >
                  Contact Me
                </a>
                <a
                  href="/Arjun React Dev.pdf"
                  className=" rounded-full px-8 bg-white border border-gray-400 py-2 font-bold"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
