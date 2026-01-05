import Image from "next/image";
import { IData } from "../What";

interface WhatCartProps {
  data: IData;
}

const WhatCart = ({ data }: WhatCartProps) => {
  const { name, img, des } = data;

  return (
    <div
      className="group h-96 rounded-2xl bg-white border border-gray-200 
      shadow-md hover:shadow-2xl transition-all duration-500 
      hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-500 p-6 cursor-pointer"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      {/* Image */}
      <div className="flex justify-center">
        <div
          className=" rounded-full bg-blue-100 
          flex items-center justify-center 
          group-hover:bg-white transition-all duration-300"
        >
          <Image
            src={img}
            alt={name}
            height={80}
            width={80}
            className="object-contain h-32 w-32 p-4"
          />
        </div>
      </div>

      {/* Content */}
      <div className="card-body items-center text-center mt-6 p-0">
        <h2
          className="text-xl font-semibold text-gray-800 
          group-hover:text-white transition-colors duration-300"
        >
          {name}
        </h2>

        <p
          className="mt-3 text-sm leading-relaxed text-gray-600 
          group-hover:text-gray-100 transition-colors duration-300"
        >
          {des}
        </p>
      </div>
    </div>
  );
};

export default WhatCart;
