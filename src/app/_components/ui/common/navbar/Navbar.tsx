"use client";

import React, { useState } from "react";

import { IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";
import { RxCross2 } from "react-icons/rx";
import { FaGithub, FaTwitter } from "react-icons/fa";
import PaddingWrapper from "../../../wrappers/PaddingWrapper";
import NavLinks from "./NavLinks";
import Keyboardbtn from "../Keyboardbtn";

const Navbar = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  return (
    <>
      <PaddingWrapper>
        <div className="flex justify-between items-center  bg-transparent h-18 w-full left-0 right-0 px-4 md:px-24  text-white absolute backdrop-blur-sm  top-0 z-[150] ">
          
          <svg
            width="114"
            height="39"
            viewBox="0 0 114 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 91C37.5 -51.4 69.5 28.1667 81.5 87.5L111 3.5"
              stroke="#F6DDFF"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M14.5 48C57.3 48.4 71 48.1667 72.5 48"
              stroke="#F6DDFF"
              strokeWidth="6"
            />
          </svg>

          <NavLinks />
          <div>
            {!isCardVisible && (
              <>
                <div className="hidden lg:flex">
                  <Keyboardbtn />
                </div>

                <button
                  onClick={() => setIsCardVisible(true)}
                  className=" lg:hidden flex justify-center items-center bg-black w-10 h-10 p-2 rounded-full"
                >
                  <IoMenu size={24} />
                </button>
              </>
            )}
          </div>
        </div>
        <AnimatePresence initial={false}>
          {isCardVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 50, y: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 50, y: -50 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="bg-black text-white w-[16rem] p-6 rounded-lg absolute border-white/20 border-[1px] top-5 right-5 shadow-lg"
            >
              <button
                onClick={() => setIsCardVisible(false)}
                className="absolute top-5 right-5 bg-white text-black  w-8 h-8 rounded-full flex justify-center items-center "
              >
                <RxCross2 size={18} />
              </button>

              <ul className="space-y-4">
                <li className="text-md cursor-pointer hover:text-gray-700">
                  Home
                </li>
                <li className="text-md cursor-pointer hover:text-gray-700">
                  About
                </li>
                <li className="text-md cursor-pointer hover:text-gray-700">
                  Explore
                </li>
              </ul>

              <div className="mt-10 flex  justify-between gap-2 items-center">
                <div className="flex gap-2">
                  <button className="bg-white  text-black w-8 h-8 rounded-full flex justify-center items-center">
                    <FaGithub size={16} />
                  </button>
                  <button className="bg-white text-black w-8 h-8 rounded-full flex justify-center items-center">
                    <FaTwitter size={16} />
                  </button>
                </div>

                <h4 className="text-sm text-white/50">@example.com</h4>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </PaddingWrapper>
    </>
  );
};

export default Navbar;
