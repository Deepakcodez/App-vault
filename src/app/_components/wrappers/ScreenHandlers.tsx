import React from "react";

const ScreenHandlers = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1900px] mx-auto">{children}</div>;
};

export default ScreenHandlers;
