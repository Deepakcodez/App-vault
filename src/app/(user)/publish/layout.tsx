
import React from "react";
import { FormProvider } from "./FormContext";
import Image from "next/image";
import ScreenHandlers from "@/app/_components/wrappers/ScreenHandlers";
import PaddingWrapper from "@/app/_components/wrappers/PaddingWrapper";
import { grainyBg } from "@/libs/constants";

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
