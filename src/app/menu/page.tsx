import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Menu",
  description: "Menu of Resaurent TNC",
};

const Service = () => {
  return (
    <div className="w-screen h-screen ">
      <h1 className="flex items-center justify-center text-black text-7xl h-screen">
        Service
      </h1>
    </div>
  );
};

export default Service;
