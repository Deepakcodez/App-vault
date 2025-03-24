import React from "react";
import ScreenHandlers from "../../_components/wrappers/ScreenHandlers";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScreenHandlers>
      <div className="min-h-screen  flex flex-col justify-center py-12 ">
        {children}
      </div>
    </ScreenHandlers>
  );
};

export default layout;
