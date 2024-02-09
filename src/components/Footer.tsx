import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-screen    relative my-20 mx-auto">
      {/* <div className="grid grid-cols-5">
        <Image
          src={"/footer1.webp"}
          alt="footer1"
          width={384}
          height={384}
          className=" brightness-50"
        />
        <Image
          src={"/footer2.webp"}
          alt="footer2"
          width={384}
          height={384}
          className=" brightness-50"
        />
        <div className="relative w-[384px] h-[384px]">
          <Image
            src={"/footer3.webp"}
            alt="footer3"
            width={384}
            height={384}
            className=" brightness-50"
          />
          <div className="absolute top-0">
            <div className="  flex flex-col  gap-5 justify-center  items-center w-[384px] h-[314px]">
              <Image
                src={"/Ig.svg"}
                alt="ig"
                width={30}
                height={30}
                className=" flex items-center justify-center  "
              />
              <h1 className="text-2xl text-white">Intagram Gallery</h1>
            </div>
          </div>
        </div>
        <Image
          src={"/footer4.webp"}
          alt="footer4"
          width={384}
          height={384}
          className=" brightness-50"
        />
        <Image
          src={"/footer5.webp"}
          alt="footer5"
          width={384}
          height={384}
          className=" brightness-50"
        />
      </div> */}

      <div className="w-screen flex flex-col md:flex-row items-center px-5 md:px-0  max-w-screen-2xl mt-20 mx-auto">
        <div className="flex flex-col gap-5">
          <Image src={"/logo.webp"} alt="logo" height={40} width={160} />
          <h1 className="text-lg text-[#685a4a] max-w-md mt-5">
            Elevating Culinary Experiences, Where Every Bite Tells a Story
          </h1>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <Image src={"/home.webp"} alt="home" height={30} width={30} />
              <p className="text-[#685a4a]">
                4XX7 Washington Ave. Manchester, Kentucky 39495.
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Image src={"/call.webp"} alt="call" height={30} width={30} />
              <p className="text-[#685a4a]"> (406) 5XX-012X </p>
            </div>
            <div className="flex items-center gap-5">
              <Image src={"/mail.webp"} alt="email" height={30} width={30} />
              <p className="text-[#685a4a]"> exampleX@gmail.com</p>
            </div>
          </div>
        </div>
        <hr className="border border-[#685a4a] md:hidden w-full my-5" />
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 w-full items-start justify-between">
          <div>
            <h2 className="text-xl text-black">Food Menu</h2>
            <ul className="flex flex-col gap-5 text-[#685a4a] mt-10">
              <li>Breakfast menu</li>
              <li>About</li>
              <li>Blog</li>
              <li>Gallery</li>
              <li>Reservation</li>
            </ul>
          </div>
          <hr className="border border-[#685a4a] md:hidden w-full my-5" />
          <div>
            <h2 className="text-xl text-black">Quick Link</h2>
            <ul className="flex flex-col gap-5 text-[#685a4a] mt-10">
              <li>Home - Multi Page</li>
              <li>About</li>
              <li>Our Chef</li>
              <li>Services</li>
              <li>Licensing</li>
            </ul>
          </div>
          <hr className="border border-[#685a4a] md:hidden w-full my-5" />
          <div>
            <h2 className="text-xl text-black">Opening Hours</h2>
            <div className="flex flex-col gap-6">
              <div className="mt-10 flex flex-col gap-3">
                <h3 className="text-[#685a4a]">Monday to Friday</h3>
                <p>10:00 AM to 12:00 PM</p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#685a4a]">Saturday</h3>
                <p>12:00 PM to 6:00 PM</p>
              </div>
            </div>
            <div></div>
          </div>
          <hr className="border border-[#685a4a] md:hidden w-full my-5" />
          <div className="flex flex-col gap-5 ">
            <h2 className="text-xl text-black">Newsletter Subscribe</h2>
            <p className="text-[#685a4a]  max-w-xs">
              Stay In the Loop: Unlock Exclusive Offers, Culinary Insights, and
              More.
            </p>
            <input
              type="text"
              className="border outline-none bg-[#e6dfd6]  h-10 pl-5 rounded-full  placeholder:text-black"
              placeholder="email"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
