"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const navlist = [
    {
      id: "1",
      name: "Home",
      href: "/",
    },
    {
      id: "2",
      name: "About Us",
      href: "/about",
    },
    {
      id: "3",
      name: "menu",
      href: "/menu",
    },
    {
      id: "4",
      name: "Blogs",
      href: "/blog",
    },
    {
      id: "5",
      name: "Contact Us",
      href: "/contact",
    },
    {
      id: "6",
      name: "Gallery",
      href: "/gallery",
    },
    {
      id: "7",
      name: "Shop",
      href: "/shop",
    },
  ];

  useEffect(() => {
    const header = document.getElementById("header");
    const handleScroll = () => {
      console.log(window.scrollY, "DFGFDGFDGFDGFG");
      console.log(window.innerWidth, "DFGFDGFDGFDGFG");
      if (window.scrollY > window.innerWidth - 400) {
        if (header) {
          console.log(header, "SDFDGFDGFDGFD");
          header.classList.add("bg-white");
          header.classList.remove("bg-black");
        }
      } else {
        if (header) {
          header.classList.remove("bg-white");
          header.classList.add("bg-black");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="header"
      className="header hidden z-50   md:block fixed w-full bg-white  border-b border-black "
    >
      <div className="max-w-screen-2xl h-24   flex flex-wrap items-center justify-between mx-auto p-4 ">
        <div>
          <Image
            height={40}
            width={160}
            src={"/logo.webp"}
            className=" "
            alt="Logo"
          />
        </div>
        <div>
          <div
            className="items-center justify-between  w-full flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex  font-medium p-0   rounded-lg  space-x-8 rtl:space-x-reverse  mt-0   dark:border-gray-700">
              {navlist?.map((x) => (
                <li key={x.id}>
                  <a
                    href={x.href}
                    className="block py-2 px-3 text-md   rounded md:bg-transparent text-[#685a4a] md:p-0 "
                    aria-current="page"
                  >
                    {x.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-5 text-[#7a7979]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
