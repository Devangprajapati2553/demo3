import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./test.css";
import "swiper/css";
import "swiper/css/pagination";
export const metadata: Metadata = {
  title: "About",
  description: "About Resaurent TNC",
};

const questionArray = [
  {
    id: 1,
    question: "What is Restaurant TNC known for?",
    answer:
      "TNC Restaurant is renowned for its culinary excellence, offering a diverse menu of dishes crafted with passion and precision.",
  },
  {
    id: 2,
    question: "Are reservations required?",
    answer:
      "While walk-ins are welcome, we recommend making a reservation to ensure prompt seating, especially during peak hours.",
  },
  {
    id: 3,
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Absolutely. Please inform our staff about any dietary restrictions or allergies when making a reservation, and our chefs will do their best to accommodate your needs.",
  },
  {
    id: 4,
    question: "Is there a cancellation policy for reservations?",
    answer:
      "We kindly ask that you inform us of any cancellations at least 24 hours in advance. This allows us to manage our seating efficiently.",
  },
];

const About = () => {
  return (
    <div className="w-screen h-full">
      <div className="w-screen md:h-[400px]  ">
        <Image
          src={"/productDetailHeader.webp"}
          alt="header"
          width={1100}
          height={950}
          className="w-screen h-[200px] md:h-[400px]   object-cover md:object-contain brightness-50"
        />
        <div className="text-white absolute top-0 w-screen   pt-20 md:pt-40 z-30">
          <h1 className="text-3xl md:text-5xl text-center mb-5">About Us</h1>
          <p className="text-sm md:text-base text-center">Home / About Us</p>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto w-screen px-5 md:px-0    ">
        <div className="flex flex-col md:flex-row  md:gap-32 justify-between md:h-[750px] ">
          <div className="grid md:grid-cols-2 md:w-[700px]  relative items-start gap-10  ">
            <div className="text-center md:ml-10">
              <h2 className="text-[#b19470] text-[90px]">20+</h2>
              <span className="text-lg">Years of Experience</span>
            </div>
            <Image
              src={"/about2.webp"}
              alt="header"
              width={380}
              height={348}
              className="md:w-[380px] md:h-[348px] rounded-ss-[50px] md:ml-10 "
            />
            <Image
              src={"/about1.webp"}
              alt="header"
              width={396}
              height={460}
              className="md:w-[396px] top-64 -left-20 md:absolute md:h-[460px]rounded-se-[50px] md:ml-10 "
            />

            <Image
              src={"/about3.webp"}
              alt="header"
              width={320}
              height={330}
              className="md:w-[320px]  md:absolute  -right-10 md:mt-96 md:h-[330px] rounded-ee-[50px]  "
            />
          </div>
          <div className="md:w-[50%] mt-5 md:mt-52 flex flex-col   gap-5 md:gap-10">
            <h1 className="text-3xl  md:text-6xl">Our Story</h1>
            <p className=" text-[#b19470]">
              Pizza ipsum dolor meat lovers buffalo. Tomato mayo red black pork
              meatball lasagna lot. Buffalo peppers bell buffalo Philly pesto
              party black thin. String cheese hand marinara stuffed meatball
              garlic stuffed. NY lot Philly bacon bell red peppers. Garlic extra
              fresh and pork. Burnt onions steak green pizza pan Chicago lot NY.
              Tomato chicken Chicago beef bbq ricotta platter broccoli. Meatball
              sautéed ricotta bbq.
            </p>
            <button className="p-3 w-fit bg-[#b19470] rounded-full hover:bg-transparent border  border-[#b19470]  text-white hover:text-[#b19470]    px-5 flex items-center gap-3 duration-700">
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
        <div className=" mt-16">
          <div className="flex flex-col md:flex-row items-center justify-between    ">
            <div className="md:w-[50%]  flex flex-col  gap-5 md:gap-10">
              <h2 className=" text-3xl  md:text-6xl">Culinary Excellence</h2>
              <p className="max-w-[600px] text-[#b19470]">
                Led by our talented and dedicated chefs, the heart of TNC is
                success lies in the kitchen. Every dish is a masterpiece,
                crafted with precision and passion. We take pride in sourcing
                the finest ingredients, ensuring that each bite is a harmonious
                blend of freshness and flavor.
              </p>

              <button className="p-3 w-fit bg-[#b19470] rounded-full hover:bg-transparent border  border-[#b19470]  text-white hover:text-[#b19470]    px-5 flex items-center gap-3 duration-700">
                Reserve your Table
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
            <div className="md:w-[55%] relative ">
              <Image
                src={"/about5.webp"}
                alt="about"
                height={500}
                width={700}
              />
              <div className="md:w-[400px] md:h-[500px] bg-[#f7f4f1] rounded-3xl md:absolute top-28 right-0">
                <Image
                  src={"/about6.webp"}
                  alt="about"
                  height={450}
                  width={400}
                  className=" md:absolute   rounded-3xl -top-40"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-36">
          <div className="flex  items-center justify-between gap-[220px]   ">
            <div className="w-[40%] relative ">
              <Image
                src={"/about7.webp"}
                alt="about"
                height={900}
                width={700}
                className="h-[500px]"
              />
              <div className="w-[400px] h-[500px] bg-[#f7f4f1] rounded-3xl md:absolute top-20 -right-20">
                <Image
                  src={"/about8.webp"}
                  alt="about"
                  height={400}
                  width={400}
                  className=" md:absolute   rounded-3xl -top-[248px]"
                />
              </div>
            </div>
            <div className="w-[55%]  flex flex-col gap-10">
              <h2 className="text-6xl">Sustainability</h2>
              <p className="max-w-[600px]">
                As stewards of the environment, we are committed to
                sustainability. From supporting local farmers to minimizing
                waste, TNC Restaurant seeks to make a positive impact on both
                the community and the planet. We believe that a commitment to
                quality can coexist with a commitment to our world.
              </p>

              <button className="p-3 w-fit bg-[#b19470] rounded-full hover:bg-transparent border  border-[#b19470]  text-white hover:text-[#b19470]    px-5 flex items-center gap-3 duration-700">
                Reserve your Table
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

        <div className=" mt-36">
          <div className="text-center flex flex-col gap-5 ">
            <h3 className="text-6xl">Meet our team</h3>
            <p className="text-[#b19470]">
              The Heartbeat of TNC: Where Passionate Individuals Craft Culinary
              Experiences with Dedication and Expertise
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 mt-10 ">
            <div className="w-96 flex flex-col  gap-5">
              <div className="bg-[#f7f4f1] rounded-3xl h-96 w-96 flex items-end justify-center">
                <Image
                  src={"/chef1.webp"}
                  alt="chef"
                  height={200}
                  width={200}
                  className=""
                />
              </div>
              <div className="text-center">
                <h4 className="font-semibold">Courtney Henry</h4>
                <p>Head Chef</p>
              </div>
            </div>

            <div className="w-96 flex flex-col  gap-5">
              <div className="bg-[#f7f4f1] rounded-3xl h-96 w-96 flex items-end justify-center">
                <Image
                  src={"/chef2.webp"}
                  alt="chef"
                  height={200}
                  width={200}
                  className=""
                />
              </div>
              <div className="text-center">
                <h4 className="font-semibold">Courtney Henry</h4>
                <p>Head Chef</p>
              </div>
            </div>

            <div className="w-96 flex flex-col  gap-5">
              <div className="bg-[#f7f4f1] rounded-3xl h-96 w-96 flex items-end justify-center">
                <Image
                  src={"/chef3.webp"}
                  alt="chef"
                  height={200}
                  width={200}
                  className=""
                />
              </div>
              <div className="text-center">
                <h4 className="font-semibold">Courtney Henry</h4>
                <p>Head Chef</p>
              </div>
            </div>

            <div className="w-96 flex flex-col  gap-5">
              <div className="bg-[#f7f4f1] rounded-3xl h-96 w-96 flex items-end justify-center">
                <Image
                  src={"/chef4.webp"}
                  alt="chef"
                  height={200}
                  width={200}
                  className=""
                />
              </div>
              <div className="text-center">
                <h4 className="font-semibold">Courtney Henry</h4>
                <p>Head Chef</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full  mt-20">
          {/* <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide> */}
          <div className="bg-[#f7f4f1] xl:w-[1055px] relative h-[426px] flex items-center justify-center px-3 md:px-0">
            <Image
              src={"/column.svg"}
              alt="col"
              height={60}
              width={60}
              className=" absolute   -top-3 md:-top-5 left-20 "
            />
            <div className="flex flex-col gap-5 items-center justify-center">
              {" "}
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
              <p className="text-center max-w-screen-md">
                Restaurant transformed our recruitment process entirely. The
                Figma flows and boolean search options provided us with
                unprecedented flexibility, allowing us to streamline our talent
                acquisition efforts.
              </p>
              <h4 className="text-2xl ">Andrew Roys</h4>
              <p>Chef</p>
            </div>
          </div>

          {/* </SwiperSlide>
          </Swiper> */}
        </div>

        <div className="mt-10 md:mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between     ">
            <div className="md:w-[50%]  flex flex-col gap-5">
              <h2 className="text-3xl   md:text-5xl mb-10">
                General Questions
              </h2>
              {questionArray.map((x) => (
                <div key={x.id} className="max-w-[600px] flex flex-col gap-3">
                  <p className="text-xl font-medium">
                    <span className="text-[#b19470] text-xl">Q:</span>{" "}
                    {x.question}
                    <br />
                  </p>
                  <span className="ml-7 text-gray-400 text-base">
                    {" "}
                    {x.answer}
                  </span>
                </div>
              ))}
            </div>
            <div className=" relative ">
              <Image
                src={"/question.webp"}
                alt="about"
                height={400}
                width={500}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-40 mb-20 h-[513px] w-full rounded-3xl bg-[#81a39d] relative z-30 overflow-hidden ">
          <div className="md:w-[510px] md:h-[515px] z-10 absolute bottom-0 md:bottom-auto  md:right-0">
            <Image
              alt="join-us"
              src={"/joinUs.webp"}
              height={760}
              width={755}
              className="w-full h-full object-contain md:object-none opacity-60 md:opacity-100 "
            />
          </div>
          <div>
            <div className="flex flex-col  gap-5 relative z-20 gap-10 md:max-w-screen-md m-10 md:m-40">
              <h4 className="text-xl whitespace-nowrap md:text-5xl text-white">
                Join Us on this Culinary Journey
              </h4>
              <p className="text-white text-center md:text-left">
                Pizza ipsum dolor meat lovers buffalo. Meat wing pesto tomato
                banana extra tomato white. String pepperoni Philly rib pesto
                roll. NY ranch lovers dolor anchovies bacon tomato party.
              </p>
              <div className="flex mt-10 md:mt-0 flex-col md:flex-row items-center gap-5 px-5  md:px-0">
                <input
                  type="email"
                  className="bg-white rounded-full w-full max-w-md pl-5 h-14"
                  placeholder="Your Email"
                />
                <button className="p-4  w-full md:w-auto rounded-full bg-[#b19470] hover:bg-transparent hover:border border-[#b19470]  text-white   px-5 duration-700 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
