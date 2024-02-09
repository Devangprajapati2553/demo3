import React from "react";
import MenuCard from "./MenuCard";

const MenuArray = [
  {
    id: 1,
    name: "Breakfast Menu",
    image: "/menu1.webp",
  },
  {
    id: 2,
    name: "Brunch Menu",
    image: "/menu2.webp",
  },
  {
    id: 3,
    name: "Lunch Menu",
    image: "/menu3.webp",
  },
  {
    id: 4,
    name: "Dinner Menu",
    image: "/menu4.webp",
  },
];

const OurMenu = () => {
  return (
    <div className="w-screen h-auto  max-w-screen-2xl mt-20 mx-auto">
      <div>
        <h1 className="text-2xl  xl:text-5xl 2xl:text-7xl text-center">
          Our Menus
        </h1>
        <p className="text-center  mt-5 md:mt-10 text-sm 2xl:text-base text-[#b19470] max-w-screen-md mx-auto">
          Our commitment to excellence extends beyond the plate, creating an
          atmosphere that lingers in the memory, making your visit truly
          exceptional.
        </p>
      </div>
      <div className="flex flex-wrap px-5 2xl:px-0 gap-5 items-center justify-center md:justify-between  my-20">
        {MenuArray?.map((x) => (
          <MenuCard image={x.image} name={x.name} key={x.id} />
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
