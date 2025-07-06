import Navigator from "@/app/_components/global/Navigator";
import { logo } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Navigator target={"/"} className="invert ">
      <Image src={logo} alt="app vault logo" height={24} width={24} />
    </Navigator>
  );
};

export default Logo;
