import Image from "next/image";
import React from "react";
import { FaRegCalendarDays } from "react-icons/fa6";
import { MdAnalytics, MdMail } from "react-icons/md";

const GirlSection = () => {
  return (
    <>
      <div className="lg:col-span-3 col-span-6 lg:relative flex justify-center lg:mt-0 mt-[7rem]">
        <div className="relative -mt-[10rem] -bottom-[2rem] right-6">
          <Image src={"/girl.png"} width={544} height={292} alt="Girl" />
        </div>
        <div className="absolute lg:top-0 right-[10rem]">
          <div className="bg-[#F3627C] shadow-md rounded-lg p-1">
            <MdAnalytics className="text-white" size={47} />
          </div>
        </div>
        <div className="absolute lg:top-[3.5rem] lg:-left-[4rem] left-[1rem]">
          <div className="bg-white/80 shadow-md rounded-xl px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-[#23BDEE] rounded-lg mr-4">
                <FaRegCalendarDays className="text-white" size={24} />
              </div>

              <div className="flex flex-col">
                <p className="text-[1.2rem] font-nunito font-bold tracking-wide text-[#545567]">
                  250k
                </p>
                <p className="text-[1rem] font-nunito font-extralight tracking-wide text-[#545567]">
                  Assisted Students
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute lg:bottom-[15rem] bottom-[40rem] lg:right-[2rem] right-[2rem]">
          <div className="bg-white/90 shadow-md rounded-xl px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-[#F88C3D] rounded-lg mr-4">
                <MdMail className="text-white" size={24} />
              </div>

              <div className="flex flex-col">
                <p className="text-[1.2rem] font-nunito font-bold text-[#545567]">
                  Congratulations
                </p>
                <p className="text-[1rem] font-nunito font-light text-[#545567] tracking-wide">
                  Your admission completed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute lg:bottom-[7rem] bottom-[30rem] lg:-left-[6rem] left-[1rem]">
          <div className="bg-white/90 shadow-md rounded-xl px-4 py-3">
            <div className="flex items-start justify-between">
              <div className="relative p-2 bg-[url('/person.png')] bg-cover w-14 h-14 rounded-full mr-4">
                <span className="absolute bottom-0 right-0 bg-green-500 p-2 rounded-full"></span>
              </div>

              <div className="flex flex-col">
                <p className="text-[1.2rem] font-nunito font-bold text-[#545567]">
                  User Experience Class
                </p>
                <p className="text-[1rem] font-nunito font-light text-[#545567] tracking-wide mb-2">
                  Today at 12.00 PM
                </p>
                <div className="flex items-center justify-start">
                  {/* A button */}
                  <button className="bg-[#D8587E] font-poppins w-[9rem] text-[16px] text-white font-bold py-2 px-5 rounded-full">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GirlSection;
