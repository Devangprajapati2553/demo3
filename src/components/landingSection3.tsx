"use client";
import React from "react";
import DishCard from "./DishCard";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

interface OfferListType {
  id: string;
  name: string;
  description: string;
  price: string;
  discountPrice: string;
  image: string;
}
const SpecialOfferList = [
  {
    id: "1",
    name: "Green spaghetti with spinach",
    description:
      "A plate of food with a bowl of vegetables and a bowl of broccoli.",
    price: "$24.00",
    discountPrice: "$12.00",
    image: "/Dish1.png",
  },
  {
    id: "2",
    name: "Fresh vegetable salad surrounded",
    description:
      "A glass bowl of fresh vegetable salad surrounded by the ingredients",
    price: "$25.00",
    discountPrice: "$15.00",
    image: "/Dish2.png",
  },
  {
    id: "3",
    name: "Tasty food with delicious burger",
    description:
      "A Culinary Journey of Irresistible Flavor Combinations, Handcrafted Perfection.",
    price: "$35.00",
    discountPrice: "$25.00",
    image: "/Dish3.png",
  },
  {
    id: "4",
    name: "Vegetables & a bowl of broccoli",
    description:
      "A plate of food with a bowl of vegetables and a bowl of broccoli.",
    price: "$24.00",
    discountPrice: "$12.00",
    image: "/Dish4.png",
  },
];
const LandingSection3 = (props: any) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname, ":DFGFDG");
  const HandleProduct = (data: OfferListType) => {
    console.log(data, "DATAA");
    history.pushState(data, "", `/product/${data.id}`);
    router.push(`/product/${data.id}`);
  };
  return (
    <div className="w-screen    max-w-screen-2xl mx-auto">
      <div className="flex px-5 2xl:px-0 justify-between items-center border-b pb-3 border-[#b19470]">
        <h1 className="text-2xl xl:text-4xl  2xl:text-6xl">
          Restaurant TNC Special Offers
        </h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-9 h-9  text-[#b19470]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>

      <div className="flex  flex-wrap gap-5 px-5 2xl:px-0 items-center justify-center md:justify-between mt-10">
        {SpecialOfferList?.map((x) => (
          <div
            onClick={() => HandleProduct(x)}
            // href={{ pathname: `/product/${x.id}` }}
            key={x.id}
          >
            <DishCard
              description={x.description}
              discountPrice={x.discountPrice}
              image={x.image}
              name={x.name}
              price={x.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingSection3;

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   return { props: { user: data } };
// }
