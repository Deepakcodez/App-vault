import React from "react";
import Navbar from "../_components/ui/common/navbar/Navbar";
import Image from "next/image";
import { grainyBg } from "@/libs/constants";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="fixed -z-10 w-full h-full left-0 right-0">
        <Image
          src={grainyBg}
          alt=""
          quality={100}
          className=" mix-blend-color-screen"
          priority
        />
      </div>
      {children}
    </div>
  );
}
