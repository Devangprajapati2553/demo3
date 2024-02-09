import Image from "next/image";
import React from "react";

const RestaurantBlog = () => {
  return (
    <div className="w-screen h-screen  max-w-screen-2xl mt-20 mx-auto">
      <div>
        <h1 className="text-2xl  xl:text-5xl 2xl:text-7xl text-center">
          The Restaurant TNC Blog
        </h1>
        <p className="text-center  mt-5 md:mt-10 text-sm 2xl:text-base text-[#b19470] max-w-screen-md mx-auto">
          zCapturing Culinary Moments: A Visual Feast of Ambiance, Cuisine, and
          Memorable Gatherings
        </p>
      </div>
      <div className="relative">
        <Image
          src={"/gal1.webp"}
          alt="gal1"
          height={500}
          width={300}
          className=""
        />
        <div className="h-[300px] w-[300px] top-0 hover:bg-black duration-500 rounded-xl  opacity-30 absolute"></div>
        <div className="h-[300px] w-[300px] top-0 absolute flex items-center justify-center animate-spin ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 hover:w-20 duration-300  h-6 hover:h-20   text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RestaurantBlog;
