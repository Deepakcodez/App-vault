import React from "react";
import PaddingWrapper from "../../../wrappers/PaddingWrapper";
import NavLinks from "./NavLinks";

import Logo from "./Logo";
import NavRight from "./NavRight";
import MobileMenus from "./MobileMenus";

const Navbar = async () => {
  return (
    <PaddingWrapper>
      <div className="flex justify-between items-center bg-transparent h-18 w-full left-0 right-0 px-4 md:px-24 text-white absolute backdrop-blur-sm top-0 z-[150]">
        <Logo />
        <NavLinks />
        <NavRight />
        <MobileMenus/>
      </div>
    </PaddingWrapper>
  );
};

export default Navbar;
