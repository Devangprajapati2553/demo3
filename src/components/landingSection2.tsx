import Image from "next/image";
import React from "react";
import { FadeInSection } from "./FadeInText";

const LandingSection2 = () => {
  return (
    <div className=" w-screen bg-white  ">
      <div className="flex flex-col md:flex-row  items-center md:h-screen md:justify-between md:max-w-screen-2xl md:mx-auto ">
        <div className=" bg-[#f7f4f1] h-[640px] md:w-[700px]  relative  ">
          <Image
            src={"/landing2.webp"}
            alt="landing-2"
            width={800}
            height={800}
            className=" absolute z-30 w-screen md:w-[800px] -left-10  -top-10"
          />
        </div>
        <div className="z-40  absolute backdrop-blur-sm md:relative md:backdrop-blur-0 md:w-[50%]">
          <FadeInSection>
            <p className="text-xl text-white text-center md:text-left md:text-[#b19470]">
              WELCOME TO TNC RESTAURANT
            </p>

            <h1 className="xl:text-[40px] 2xl:text-[60px] text-center md:text-left break-words text-white md:text-black">
              Where Every Meal is an Unforgettable Experience
            </h1>
            <p className="text-black text-center md:text-left md:text-[#b19470] mt-10 xl:text-sm 2xl:text-base">
              Step into a realm where culinary artistry meets unparalleled
              ambiance, and every meal transcends mere sustenance to become an
              unforgettable experience. This is not just a dining establishment;
              it is a sanctuary for the senses, where flavors dance on the
              palate and the ambiance is carefully curated to elevate the dining
              journey.
            </p>
          </FadeInSection>
          <button className="mt-20 p-3 bg-[#b19470] hover:bg-transparent  border  border-[#b19470]  text-white  hover:text-[#b19470]  rounded-sm px-5 flex items-center mx-auto md:mx-0 gap-3 duration-700">
            Contact Us
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

export default LandingSection2;
