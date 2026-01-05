import Banner from "@/@components/pages/Banner/Banner";
import NavBar from "../@components/pages/NavBar/NavBar";
import Service from "@/@components/pages/Service/Service";
import What from "@/@components/pages/What/What";
import Project from "@/@components/pages/Project/Project";
import Education from "@/@components/pages/Education/Education";

export default function Home() {
  return (
    <div className="max-w-[1480px] mx-auto md:p-3 p-1">
      <NavBar />
      <Banner />
      <Service />
      <What />
      <Project />
      <Education />
    </div>
  );
}
