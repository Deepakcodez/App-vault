import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const HeroHeading = () => {
  return (
    <div className="flex justify-center flex-col items-center  ">
      {/* <p>Your App Deserves<br /> the Spotlight <br /> Shine Bright Here</p> */}
      <p className=" font-bold md:text-7xl text-[10vw] lg:text-8xl ">
        Your App Deserves
      </p>
      <p className="text-8xl font-semibold mt-2 md:text-7xl text-[8vw]">
        The{" "}
        <span className="relative group bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 ">
          SpotLight
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:blur-md duration-150 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-300">
            SpotLight
          </span>
        </span>
      </p>

      <Link
        href=""
        className="text-2xl  mt-6  md:text-2xl text-[4vw] text-purple-300 font-extralight shadow-lg hover:shadow-xl hover:text-purple-400
           transition-all duration-300 ease-in-out flex gap-1 justify-center items-center group"
      >
        <p className="text-sm">Shine Bright Here</p>{" "}
        <GoArrowUpRight className="group-hover:-translate-y-1 duration-700" />
      </Link>
    </div>
  );
};

export default HeroHeading;
