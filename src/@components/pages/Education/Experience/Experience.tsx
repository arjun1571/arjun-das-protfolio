"use client";

const Experience = () => {
  const experiences = [
    {
      company: "Ecommerce Intelligence",
      role: "Frontend Engineer",
      duration: "Dec 2024 – Present",
      description: `Building scalable web applications with React, Next.js, and TypeScript. 
        Focus on performance optimization, clean code practices, and cross-functional team collaboration.`,
    },
    {
      company: "KuiperZ",
      role: "Junior Software Engineer",
      duration: "Aug 2023 – Oct 2024",
      description: `Worked on Rysenova Landing Page (Next.js, TypeScript) 
      and HR Payroll applications (React.js, PWA). Developed reusable components, integrated APIs, 
      and implemented responsive designs using Tailwind CSS.`,
    },
  ];

  return (
    <div className="space-y-6 border-l-8 rounded-full border-gray-300 pl-6">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border border-gray-200 cursor-pointer"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <span className="text-sm font-semibold text-primary">
            {exp.duration}
          </span>
          <h3 className="text-2xl font-bold mt-2">{exp.company}</h3>
          <h4 className="text-xl font-semibold text-gray-700 mt-1">
            {exp.role}
          </h4>
          <p className="text-gray-600 mt-3">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
