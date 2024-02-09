"use client";
import { Metadata } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const GenerateMetaData = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  return {
    title: `Product ${params.slug}`,
  };
};

// const myState = history.state;
const ProductDetail = ({ params }: { params: { slug: string } }) => {
  console.log(params, "EEDFGD");

  const [isSelected, setIsSelected] = useState("Description");
  return (
    <div className="md:h-full ">
      {/* title */}
      <div className="w-screen md:h-[400px]  ">
        <Image
          src={"/productDetailHeader.webp"}
          alt="header"
          width={1100}
          height={950}
          className="w-screen h-[200px] md:h-[400px]  md:object-contain brightness-50"
        />
        <div className="text-white absolute top-0 w-screen   pt-20 md:pt-40 z-30">
          <h1 className="text-3xl md:text-5xl text-center mb-5">
            Shop Details
          </h1>
          <p className="text-sm md:text-base text-center">
            Home / Shop Details
          </p>
        </div>
      </div>
      {/* allContnent */}
      <div className="allContnent mt-10 md:mt-0 ">
        <div className="flex flex-col md:flex-row items-start w-full    max-w-screen-xl mx-auto">
          <div>
            <Image
              src={"/detail1.png"}
              alt="detail"
              width={500}
              height={500}
              className="px-5 md:px-0 md:w-[660px] h-auto md:h-[440px] rounded-lg "
            />
            <div className="flex justify-center md:justify-normal items-center gap-5 mt-5">
              <Image
                src={"/detail2.png"}
                alt="detail"
                width={100}
                height={100}
                className=" md:w-[160px] h-auto rounded-lg cursor-pointer"
              />
              <Image
                src={"/detail3.png"}
                alt="detail"
                width={100}
                height={100}
                className="md:w-[160px] h-auto rounded-lg cursor-pointer"
              />
            </div>
          </div>
          {/* <hr className="border border-[#685a4a] md:hidden w-full my-5" /> */}
          <div className="md:w-[50%] mt-10 md:mt-0 flex flex-col gap-5 px-10">
            <div className="flex  items-center   justify-between">
              <div className="flex items-center  gap-5 w-full ">
                <p className="text-xl md:text-3xl text-[#b19470] ">$12.00</p>
                <p className="line-through text-xl md:text-3xl text-gray-500">
                  $12.00
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="orange"
                    viewBox="0 0 24 24"
                    //   strokeWidth="1.5"
                    //   stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="orange"
                    viewBox="0 0 24 24"
                    //   strokeWidth="1.5"
                    //   stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="orange"
                    viewBox="0 0 24 24"
                    //   strokeWidth="1.5"
                    //   stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="orange"
                    viewBox="0 0 24 24"
                    //   strokeWidth="1.5"
                    //   stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="orange"
                    viewBox="0 0 24 24"
                    //   strokeWidth="1.5"
                    //   stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </div>
                <p>(10)</p>
              </div>
            </div>
            <h1 className="text-xl md:text-3xl mt-5">
              Green spaghetti with spinach
            </h1>
            <p>
              A plate of food with a bowl of vegetables and a bowl of broccoli.
            </p>
            <div className="flex items-center gap-5">
              <input
                type="number"
                name="count"
                id="count"
                defaultValue={"1"}
                className="border bg-[#e6dfd6] outline-none rounded-full text-center pr-2 py-3 w-40 text-black"
              />
              <button className="bg-[#b19470] hover:bg-transparent hover:border border-[#b19470] hover:text-[#b19470] duration-500 rounded-full py-3 w-40 text-white">
                Add to Cart
              </button>
            </div>
            <hr className="border border-[#b19470] my-5" />
            <div className="flex items-center  max-w-52 justify-between">
              <p className="text-xl text-[#b19470]">Categories:</p>
              <p>Salad</p>
            </div>
            <div className="flex items-center gap-10 max-w-52 justify-between">
              <p className="text-xl text-[#b19470]">Share:</p>
              <p>X Y X</p>
            </div>
            <div></div>
          </div>
        </div>

        <div className="flex items-center gap-5 text-lg px-10 md:px-0 md:text-2xl max-w-screen-xl mx-auto mt-10">
          <div
            onClick={() => setIsSelected("Description")}
            className={`cursor-pointer ${
              isSelected == "Description" ? "text-[#b19470]" : "text-black"
            }`}
          >
            Description
          </div>
          <div
            onClick={() => setIsSelected("")}
            className={`cursor-pointer ${
              isSelected != "Description" ? "text-[#b19470]" : "text-black"
            }`}
          >
            Additional information
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
