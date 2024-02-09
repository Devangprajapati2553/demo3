import Image from "next/image";
import React from "react";
import { Satisfy } from "next/font/google";

const openSans = Satisfy({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const MenuCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className="w-[350px] h-[530px] bg-[#ecdfd3] p-3 relative ">
      <Image
        src={image}
        alt="menu1"
        height={700}
        width={700}
        className="absolute bottom-0 right-0  "
      />
      <div className="flex flex-col justify-between py-10 ml-5 h-full">
        <h1 className={`italic text-[#b19470] text-4xl ${openSans.className}`}>
          {name}
        </h1>
        <div className="z-40 flex flex-col gap-5">
          <button className="p-3  bg-[#b19470] hover:bg-transparent hover:border border-[#b19470]  text-white  rounded-sm w-[160px] duration-700">
            View PDF
          </button>
          <button className="p-3 hover:bg-[#b19470] bg-transparent border-2  border-[#b19470]  text-[#b19470] hover:text-white   rounded-sm w-[160px] flex items-center gap-3 duration-700">
            View menu
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
