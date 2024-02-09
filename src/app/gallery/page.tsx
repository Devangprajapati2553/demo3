import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gallery",
  description: " Resaurent TNC Gallery",
};

const Gallery = () => {
  return (
    <div className="w-screen h-screen">
      <h1 className="flex items-center justify-center text-black text-7xl h-screen">
        Gallery
      </h1>
    </div>
  );
};

export default Gallery;
