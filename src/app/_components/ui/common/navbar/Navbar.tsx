import React from "react";
import { headers } from "next/headers";
import PaddingWrapper from "../../../wrappers/PaddingWrapper";
import NavLinks from "./NavLinks";
import Keyboardbtn from "../Keyboardbtn";
import { auth } from "@/lib/auth";

import LogoutWrapper from "@/app/_components/auth/LogoutWrapper";
import Logo from "./Logo";

const Navbar = async () => {
  let session = null;

  try {
    session = await auth.api.getSession({
      headers: await headers(),
    });
  } catch (error) {
    console.error("Session error:", error);
  }

  return (
    <PaddingWrapper>
      <div className="flex justify-between items-center bg-transparent h-18 w-full left-0 right-0 px-4 md:px-24 text-white absolute backdrop-blur-sm top-0 z-[150]">
        <Logo />
        <NavLinks />
        <div className="flex gap-2">
          {session?.user?.name ? session.user.name : <Keyboardbtn />}
          <LogoutWrapper>
            <h1 className="cursor-pointer">Logout</h1>
          </LogoutWrapper>
        </div>
      </div>
    </PaddingWrapper>
  );
};

export default Navbar;
