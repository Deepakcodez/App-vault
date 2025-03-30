import React from "react";
import PaddingWrapper from "../_components/wrappers/PaddingWrapper";
import ScreenHandlers from "../_components/wrappers/ScreenHandlers";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
   
      <ScreenHandlers>
        <PaddingWrapper>{children}</PaddingWrapper>
      </ScreenHandlers>
  );
};

export default Layout;