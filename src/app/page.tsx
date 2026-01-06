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
    <div className="max-w-[1480px] mx-auto md:p-3 p-1">
      <NavBar />

      <section id="home" className="scroll-mt-28">
        <Banner />
      </section>
      <section id="skills" className="scroll-mt-28">
        <Service />
      </section>
      <section id="whatIdo" className="scroll-mt-28">
        <What />
      </section>
      <section id="service" className="scroll-mt-28">
        <Project />
      </section>
      <section id="education" className="scroll-mt-28">
        <Education />
      </section>
      <section id="about" className="scroll-mt-28">
        <AboutMe />
      </section>
      <section id="contact" className="scroll-mt-28">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
