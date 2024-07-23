import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#49BBBD] pt-3">
        <div className="container flex items-center justify-between">
          <div className="flex items-center w-[40%]">
            <Image src="/logo.svg" width={114} height={83} alt="Logo" />
          </div>

          <div className="flex items-center justify-between w-[70%]">
            <Link href="#" className="text-white font-poppins font-extralight tracking-wider leading-8 text-[22px]">
              Home
            </Link>
            <Link href="#" className="text-white font-poppins font-extralight tracking-wider leading-8 text-[22px]">
              Courses
            </Link>
            <Link href="#" className="text-white font-poppins font-extralight tracking-wider leading-8 text-[22px]">
              Careers
            </Link>
            <Link href="#" className="text-white font-poppins font-extralight tracking-wider leading-8 text-[22px]">
              Blog
            </Link>
            <Link href="#" className="text-white font-poppins font-extralight tracking-wider leading-8 text-[22px]">
              About Us
            </Link>

            <div className="w-[30%] flex items-center justify-between">
              <button className="bg-white text-black py-2 px-8 rounded-full font-poppins text-[22px] font-extralight tracking-wider leading-8">
                Login
              </button>
              <button className="bg-[#7ECBCC] text-white py-2 px-8 rounded-full font-poppins text-[22px] font-extralight tracking-wider leading-8">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
