"use client";
import React from "react";
import { useMotionValue } from "motion/react";
import HeroHeading from "./HeroHeading";

const Torch: React.FC = () => {
  const x1 = useMotionValue(0);
  const y1 = useMotionValue(0);

  const [x, setx] = React.useState(0);
  const [y, sety] = React.useState(0); 
  console.log(x,y);
  
  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setx(e.clientX);
    sety(e.clientY);
    x1.set(e.clientX);
    y1.set(e.clientY);
  };
  return (
    <>
      <div
        className="flex justify-center items-center h-full w-full absolute left-0 right-0 flex-col  "
        onMouseMove={handleMove}
      >
        <div className="absolute top-0  w-full h-full flex justify-center items-center left-0 right-0">
          <HeroHeading />
        </div>
        <svg width="100vw" height="100vh">
          <defs>
            {/* Blur Filter */}
            <filter id="blurFilter">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="atop" />
            </filter>

            {/* Mask with Blur */}
            <mask id="svgmask3">
              <circle
                fill="#ffffff"
                cx={x1.get()}
                cy={y1.get()}
                r="200"
                filter="url(#blurFilter)"
              />
            </mask>
          </defs>

          <image
            x="0"
            y="0"
            href={
              "https://og-websitev3-dep.s3.amazonaws.com/media/original_images/RAW_Cyber-Image_1_nF7DfWq.png"
            }
            width="100%"
            height="100%"
            mask="url(#svgmask3)"
            preserveAspectRatio="xMidYMid slice"
            className="w-full object-cover h-full"
          />
        </svg>
      </div>
    </>
  );
};

export default Torch;
