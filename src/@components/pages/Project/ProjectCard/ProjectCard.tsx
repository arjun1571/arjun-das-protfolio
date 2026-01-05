"use client";
import Image from "next/image";
type Project = {
  id: number;
  title: string;
  image: string;
  url: string;
  description: string;
};

const ProjectCard = ({ data }: { data: Project }) => {
  const { title, image, url, description } = data;

  return (
    <div
      data-aos="zoom-out"
      className="group relative rounded-2xl overflow-hidden border border-dashed border-gray-400 
                 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl 
                 transition-all duration-300 hover:-translate-y-2 "
    >
      {/* Image */}
      <div className="relative h-68 w-full overflow-hidden ">
        <Image
          src={image}
          alt={title}
          height={500}
          width={500}
          className="p-2 transition-transform duration-500 group-hover:scale-110 rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-52">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>

        <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4"
        >
          <button
            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 
                       text-white py-2 font-medium tracking-wide
                       hover:opacity-90 transition cursor-pointer"
          >
            See Details →
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
