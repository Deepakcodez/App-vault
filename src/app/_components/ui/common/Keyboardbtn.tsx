"use client"
import React from "react";
import {motion} from "motion/react"
import { useRouter } from "next/navigation";

const Keyboardbtn = () => {
  const router = useRouter();
  return (
    <motion.div 
    whileTap={{scale:0.97}}
    onClick={()=>router.push("/login")}
     className="bg-gradient-to-b from-gray-700 to-white p-1 h-10 w-[100%]  rounded-md ">
      <div className="bg-gradient-to-b from-white to-black/50 h-full w-full   rounded-sm">
        <p className="text-black/70 font-bold text-xs text-center p-2 select-none ">create dev account</p>
      </div>
    </motion.div>
  );
};

export default Keyboardbtn;
