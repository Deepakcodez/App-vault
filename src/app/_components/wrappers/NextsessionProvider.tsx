"use client";
import { SessionProvider } from "next-auth/react";
const NextsessionProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextsessionProvider;
