import Image from "next/image";
import React from "react";
import "./home.css";
import { FadeInSection } from "./FadeInText";

const LandingSection = () => {
  return (
    <div className="bg-black h-screen w-screen ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center pt-40 max-w-screen-2xl mx-auto   ">
        <div className="text-center md:text-left">
          <FadeInSection>
            <h1 className="text-2xl md:text-[50px]  leading-none h-auto xl:text-[70px] 2xl:text-[100px] text-[#b19470]">
              Welcome to <br /> Restaurant TNC
            </h1>

            <p className="   md:text-xl xl:text-3xl mt-4 text-white">
              Discover Culinary Excellence at Restaurant TNC
            </p>
          </FadeInSection>

          <div className="flex  items-center gap-5  mt-10 justify-center md:justify-normal md:mt-20">
            <button className="p-3 bg-[#b19470] hover:bg-transparent hover:border border-[#b19470]  text-white  rounded-sm px-5 duration-700">
              Book a table
            </button>
            <button className="p-3 hover:bg-[#b19470] bg-transparent border  border-[#b19470]  text-white   rounded-sm px-5 flex items-center gap-3 duration-700">
              See full menu
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
        <div>
          <Image
            src={"/HomeDish.webp"}
            alt="home-dish"
            width={720}
            height={730}
          />
        </div>
      </div>
      <div className="text-white ">
        {/* <div className="flex   items-center max-w-screen-xl mx-auto">
          <hr
            className="border  border-gray-400 w-full 
          "
          />
          <Image
            src={"/InstaLogo.webp"}
            alt="insta-logo"
            className=""
            height={50}
            width={50}
          />
        </div> */}
      </div>
    </div>
  );
};

export default LandingSection;
