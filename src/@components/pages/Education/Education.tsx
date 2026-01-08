import Card from "./Card/Card";
import Experience from "./Experience/Experience";

const educationData = [
  {
    duration: "2018 – 2022",
    title: "University",
    description:
      "City University — Department of Computer Science & Engineering. Completed B.Sc. in CSE.",
  },
  {
    duration: "2017 – 2018",
    title: "Intermediate College",
    description:
      "Palash Shilpanchal Govt. College. Completed HSC examination from Science group with good results.",
  },
  {
    duration: "2010 – 2016",
    title: "High School",
    description:
      "Jamalpur R.M Bidyapith High School. Studied from class 6 to 10 in Science group and completed SSC.",
  },
];

const Education = () => {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-center mb-10">🎓 Education</h2>
          <div className="space-y-6 border-l-8 rounded-full border-gray-300 pl-6">
            {educationData.map((edu, idx) => (
              <Card key={idx} {...edu} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center mb-10">
            💼 Experience
          </h2>
          <div className="space-y-6">
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
