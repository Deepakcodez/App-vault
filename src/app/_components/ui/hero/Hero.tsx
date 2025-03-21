"use client";
import { motion } from "motion/react";
import Image from "next/image";
import PaddingWrapper from "../../wrappers/PaddingWrapper";
import Link from "next/link";

export default function Hero() {
  return (
    <PaddingWrapper className=" md:flex  overflow-hidden h-screen 2xl:h-[50rem] ">
      <div className="mx-auto flex flex-col w-full justify-center  ">
        <motion.h1
          className="mt-10 font-bold tracking-tight text-foreground leading-loosly text-4xl text-center md:text-start w-full   md:text-5xl 2xl:text-7xl "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your App Deserves <br /> the Spotlight <br /> Shine Bright Here
        </motion.h1>
        <motion.p
          className="mt-6 text-lg leading-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Connect with users, gain visibility, and grow your audience.
          <br />A platform built for developers, by developers.
        </motion.p>
        <motion.div
          className="mt-10 flex items-center gap-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         <Link  href={'/publish'}>
         <span>Explore</span>
         </Link>
        </motion.div>
      </div>

      <div className="w-full flex justify-center items-center   ">
        <motion.div
          className="mx-auto mt-16 lg:mt-0 "
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creative-SW6QDQbcVuwPgb6a2CYtYmRbsJa4k1.png"
              alt="Flowers & Saints design concept"
              width={600}
              height={600}
              className=""
            />
          </div>
        </motion.div>
      </div>
    </PaddingWrapper>
  );
}
