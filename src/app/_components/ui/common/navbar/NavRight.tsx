import LogoutWrapper from "@/app/_components/auth/LogoutWrapper";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import Keyboardbtn from "../Keyboardbtn";
import Avatar from "./Avatar";

export default async function NavRight() {
  let session = null;

  try {
    session = await auth.api.getSession({
      headers: await headers(),
    });
  } catch (error) {
    console.error("Session error:", error);
  }

  return (
    <div className="md:flex gap-2  hidden">
      {session?.user?.name ? (
        <Avatar avatar={session.user.name} />
      ) : (
        <Keyboardbtn />
      )}

      <LogoutWrapper>
        <h1 className="cursor-pointer">Logout</h1>
      </LogoutWrapper>
    </div>
  );
}
