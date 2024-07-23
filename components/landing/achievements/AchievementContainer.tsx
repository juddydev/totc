import React from "react";

const AchievementContainer = () => {
  return (
    <>
      <div className="container mt-[10rem]">
        <div className="flex justify-center items-center flex-col mb-[4rem]">
          <p className="text-[54px] text-[#252641] font-bold mb-5">
            Our Success
          </p>
          <p className="text-[24px] text-[#252641] lg:w-[60rem] font-light text-center">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
            ultrices eu ornare tristique vel nisl orci.{" "}
          </p>
        </div>

        <div className="grid grid-cols-10 gap-4">
            <div className="col-span-5 md:col-span-2">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-light text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
                        15k+
                    </h1>
                    <p className="text-[1rem] lg:text-[1.8rem]">Students</p>
                </div>
            </div>
            <div className="col-span-5 md:col-span-2">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-light text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
                        75%
                    </h1>
                    <p className="text-[1rem] lg:text-[1.8rem]">Total Success</p>
                </div>
            </div>
            <div className="col-span-5 md:col-span-2">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-light text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
                        35
                    </h1>
                    <p className="text-[1rem] lg:text-[1.8rem]">Main Questions</p>
                </div>
            </div>
            <div className="col-span-5 md:col-span-2">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-light text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
                        26
                    </h1>
                    <p className="text-[1rem] lg:text-[1.8rem]">Chief Experts</p>
                </div>
            </div>
            <div className="col-span-10 md:col-span-2">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-light text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
                        16
                    </h1>
                    <p className="text-[1rem] lg:text-[1.8rem]">Years of Experience</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default AchievementContainer;
