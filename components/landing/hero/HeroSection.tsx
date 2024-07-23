import React from "react";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <div className="lg:col-span-3 col-span-6 mt-[0rem] ">
        <div className="flex flex-col lg:items-start items-center justify-center">
          <p className="text-2xl md:text-6xl mb-5 text-white font-bold">
              <span className="text-orange-400">Studying </span> Online is now
              much easier
          </p>
          <p className="text-lg md:text-xl mb-5 text-white font-light">
              TOTC is an interesting platform that will teach <br></br> you in
              more an interactive way
          </p>
        </div>

        <div className="flex items-center justify-center lg:justify-start">
          <button className="bg-[#7ECBCC] font-poppins text-lg md:text-xl text-white font-bold py-2 px-5 rounded-full mr-5">
            Join for free
          </button>

          <div className="flex justify-between items-center">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
              <FaPlay className="text-[#49BBBD] text-center ml-1" size={24} />
            </div>
            <p className="text-[#252641] text-lg md:text-xl ml-2">
              Watch how it works
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
