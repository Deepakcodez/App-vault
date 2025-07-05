import React from "react";
import { cn } from "../../../lib/utils";

const PaddingWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("px-4 md:px-24 ", className)}>{children}</div>;
};

export default PaddingWrapper;
