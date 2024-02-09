import Image from "next/image";
import React from "react";

const DishCard = ({
  image,
  name,
  description,
  price,
  discountPrice,
}: {
  image: string;
  name: string;
  description: string;
  price: string;
  discountPrice: string;
}) => {
  return (
    <div className="flex flex-col gap-7 max-w-[364px] overflow-hidden border border-[#b19470] hover:cursor-pointer " >
      <div className="max-w-[364px] max-h-[200px] overflow-hidden">
        <Image
          src={image}
          alt="dish1"
          height={200}
          width={364}
          className="hover:scale-125   duration-500"
        />
      </div>
      <div className="text-center flex flex-col gap-5">
        <h1 className=" text-xl text-center">{name}</h1>
        <p className="text-slate-500 ">{description}</p>
      </div>
      <div className="text-center flex items-center justify-center gap-5 my-8">
        <p className="line-through text-2xl text-gray-500">{price}</p>
        <p className=" text-2xl text-[#b19470]">{discountPrice}</p>
      </div>
    </div>
  );
};

export default DishCard;
