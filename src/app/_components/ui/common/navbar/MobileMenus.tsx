import React from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import {motion, AnimatePresence} from "motion/react";
import { RxCross2 } from 'react-icons/rx';

export default function MobileMenus() {
  const [isCardVisible, setIsCardVisible] = React.useState(true);

  return (
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
  )
}
