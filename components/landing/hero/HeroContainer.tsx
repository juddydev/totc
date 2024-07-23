import React from "react";
import HeroSection from "./HeroSection";
import GirlSection from "./GirlSection";


const HeroContainer = () => {
  return (
    <>
      <div className="pt-[10rem] pb-[2rem] bg-[#49BBBD] overflow-hidden w-full rounded-b-[20%] ">
        <div className="container">
          <div className="grid grid-cols-6 gap-4">
            <HeroSection />
            <GirlSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
