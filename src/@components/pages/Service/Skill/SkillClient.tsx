/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import Image from "next/image";
interface Skill {
  name: string;
  src: any;
}

interface SkillsGridProps {
  skills: Skill[];
}

const SkillClient = ({ skills }: SkillsGridProps) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
      {skills?.map((skill) => (
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
  );
};

export default SkillClient;
