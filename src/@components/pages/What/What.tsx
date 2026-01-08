import WhatCart from "./WhatCard/WhatCard";
export interface IData {
  id: number;
  name: string;
  img: string;
  des: string;
}

const What = () => {
  const Data = [
    {
      id: 1,
      name: "Web Design",
      img: "https://i.ibb.co/z5KjXY4/desktop-comments-desktop-icon-white-png-transparent-png-980x568-free-download-on-nicepng-removebg-pr.png",
      des: "Web design is the process of creating a website's visual layout and user interface to deliver a positive user experience. A well-designed website should have a simple and clean layout, and clear",
    },
    {
      id: 2,
      name: "Web Development",
      img: "https://i.ibb.co/sHt49G8/web-development-removebg-preview.png",
      des: "Developed website or application should be fast, efficient, user-friendly, and scalable to accommodate future growth. The goal of web development is to create digital products that meet the needs of users and clients.",
    },
    {
      id: 3,
      name: "Digital Marketing",
      img: "https://i.ibb.co/GF8QTKS/friendship-removebg-preview.png",
      des: "An online support system is a digital platform that provides users with assistance and guidance on a specific product or service. It is designed to address the needs of customers and provide.",
    },
    {
      id: 4,
      name: "Photo and Video Edit",
      img: "https://i.ibb.co/cbbsrHJ/camera-removebg-preview.png",
      des: "Photo Edit is the art and practice of capturing and producing using the software. It involves a range of techniques, including selecting the right equipment. and video edit",
    },
  ];
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">What I DO</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-14">
        {Data?.map((data: IData) => (
          <WhatCart key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default What;
