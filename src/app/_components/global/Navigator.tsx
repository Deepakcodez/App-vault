"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

type NavigatorProps = {
  children: React.ReactNode;
  target: string;
  className?: string
};
export default function Navigator({ children, target , className}: NavigatorProps) {
  const router = useRouter();
  return <div 
  className={cn(className)}
  onClick={() => router.push(target)}>
    {children}
    </div>;
}
