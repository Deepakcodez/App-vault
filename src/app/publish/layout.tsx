
import React from "react";
import PaddingWrapper from "../_components/wrappers/PaddingWrapper";
import ScreenHandlers from "../_components/wrappers/ScreenHandlers";
import { FormProvider } from "./FormContext";
import grainyBg from "../../../public/images/top grain bg.svg";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FormProvider>
      <ScreenHandlers>
        <div className="fixed -z-10 w-full h-full left-0 right-0">
          <Image
            src={grainyBg}
            alt=""
            quality={100}
            className=" mix-blend-color-screen"
            priority
          />
        </div>
        <PaddingWrapper>{children}</PaddingWrapper>
      </ScreenHandlers>
    </FormProvider>
  );
};

export default Layout;
