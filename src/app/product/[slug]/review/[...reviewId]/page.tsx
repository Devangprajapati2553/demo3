"use client";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const Review = () => {
  const PathName = usePathname();
  console.log(PathName, "PathName");
  const getPathName=PathName.split("/")
  console.log(getPathName,"See")

  return (
    <div className="h-screen">
      <h1 className="text-7xl text-center h-screen flex items-center justify-center">
        fdgfd
      </h1>
    </div>
  );
};

export default Review;
