import React from "react";
import { FormProvider } from "./FormContext";
import ScreenHandlers from "@/app/_components/wrappers/ScreenHandlers";
import PaddingWrapper from "@/app/_components/wrappers/PaddingWrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FormProvider>
      <ScreenHandlers>
        <PaddingWrapper>{children}</PaddingWrapper>
      </ScreenHandlers>
    </FormProvider>
  );
};

export default Layout;
