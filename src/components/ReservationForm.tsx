import React from "react";

const ReservationForm = () => {
  return (
    <div className="w-screen h-screen   max-w-screen-2xl mx-auto">
      <div className="bg-[#ecf1f0]  md:h-[800px] w-full rounded-md flex flex-col items-center justify-center">
        <div>
          <h1 className="text-2xl md:text-5xl 2xl:text-7xl text-center">
            Reservation System
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-screen-md text-center mx-auto my-10">
            Our commitment to excellence extends beyond the plate, creating an
            atmosphere that lingers in the memory, making your visit truly
            exceptional.
          </p>
        </div>

        <div className="bg-white max-w-screen-xl mx-auto rounded-md h-fit">
          <form className="flex mt-10 md:mt-0 flex-col items-center justify-center md:h-[500px] ">
            <div className="flex  flex-wrap gap-10  justify-center">
              <input
                type="text"
                className="bg-[#f3f3f3]  h-14 w-96 rounded-md placeholder:text-black pl-5 
                 outline-none"
                placeholder="First Name *"
              />
              <input
                type="email"
                className="bg-[#f3f3f3]  h-14 w-96 rounded-md placeholder:text-black pl-5 
                 outline-none"
                placeholder="Email *"
              />
              <input
                type="tel"
                className="bg-[#f3f3f3]  h-14 w-96 rounded-md placeholder:text-black pl-5 
                 outline-none"
                placeholder="Contact *"
              />
              <select
                name="person"
                id="person"
                className="bg-[#f3f3f3]  h-14 w-96 rounded-md outline-none placeholder:text-black pl-5"
              >
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
              </select>

              <select
                name="day"
                id="day"
                className="bg-[#f3f3f3]  h-14 w-96 rounded-md outline-none placeholder:text-black pl-5"
              >
                <option value="2">29 March</option>
                <option value="3">30 March</option>
                <option value="4">21 March</option>
              </select>
              <select
                name="Time"
                id="Time"
                className="bg-[#f3f3f3]  h-14 w-96 rounded-md outline-none placeholder:text-black pl-5"
              >
                <option value="2">09:00 pm</option>
                <option value="3">10:00 pm</option>
                <option value="4">11:00 pm</option>
              </select>
            </div>
            <div className="w-full mt-10  px-[25px]">
              <button
                type="submit"
                className="p-3 w-full bg-[#b19470] hover:bg-transparent hover:border border-[#b19470] hover:text-[#b19470]  text-white  rounded-lg  duration-700"
              >
                Book Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
