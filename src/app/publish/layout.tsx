import React from "react";
import PaddingWrapper from "../_components/wrappers/PaddingWrapper";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <PaddingWrapper>
    {children}
    </PaddingWrapper>;
};

export default layout;
