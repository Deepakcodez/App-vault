"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";

export default function LogoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await authClient.signOut();
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return <div onClick={handleLogout}>{children}</div>;
}
