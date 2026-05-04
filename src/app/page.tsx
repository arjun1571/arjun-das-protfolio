import Banner from "@/@components/pages/Banner/Banner";
import NavBar from "../@components/pages/NavBar/NavBar";
import Service from "@/@components/pages/Service/Service";
import What from "@/@components/pages/What/What";
import Project from "@/@components/pages/Project/Project";
import Education from "@/@components/pages/Education/Education";
import AboutMe from "@/@components/pages/AboutMe/AboutMe";
import Contact from "@/@components/pages/Contact/Contact";
import Footer from "@/@components/pages/Fotter/Fotter";

export default function Home() {
  return (
    <div className="max-w-[1480px] mx-auto px-3 md:px-4">
      <NavBar />

      <section id="home" className="scroll-mt-24 pt-4 md:pt-6">
        <Banner />
      </section>

      <section id="skills" className="scroll-mt-24 mt-12 md:mt-20">
        <Service />
      </section>

      <section id="whatIdo" className="scroll-mt-24 mt-12 md:mt-20">
        <What />
      </section>

      <section id="projects" className="scroll-mt-24 mt-12 md:mt-20">
        <Project />
      </section>

      <section id="education" className="scroll-mt-24 mt-12 md:mt-20">
        <Education />
      </section>

      <section id="about" className="scroll-mt-24 mt-12 md:mt-20">
        <AboutMe />
      </section>

      <section id="contact" className="scroll-mt-24 mt-12 md:mt-20">
        <Contact />
      </section>

      <section className="mt-12 md:mt-20">
        <Footer />
      </section>
    </div>
  );
}
