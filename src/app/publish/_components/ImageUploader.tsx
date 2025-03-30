"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import brokenImage from "../../../../public/images/broken-image.png";

type ImageType = {
  name: string;
  url: string;
};

const ImageUploader: React.FC = () => {
  const [images, setImages] = React.useState<ImageType[]>([]);
  const [isDragging, setIsDragging] = React.useState<boolean>(false);
  const MAX_IMAGE: number = 8;

  const handleFileChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (images.length + e.target.files.length > MAX_IMAGE) return;
    for (const file of e.target.files) {
      if (file.type.split("/")[0] !== "image") continue;
      if (images.length > 8) continue;
      setImages((prev) => [
        ...prev,
        { name: file.name, url: URL.createObjectURL(file) },
      ]);
    }
  };

  const handleOndragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  };


  const handleOnDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (images.length + files.length > MAX_IMAGE) return;
    for (const file of files) {
      if (file.type.split("/")[0] !== "image") continue;
      setImages((prev) => [
        ...prev,
        { name: file.name, url: URL.createObjectURL(file) },
      ]);
    }
  };
  return (
    <div className="flex flex-col gap-2 items-center select-none ">
      <div
        onDragOver={handleOndragOver}
        onDragLeave={handleOnDragLeave}
        onDrop={handleOnDrop}
        className="bg-neutral-600/40 rounded-3xl border border-neutral-500 border-dashed h-[12rem] w-full flex flex-col justify-center items-center gap-12"
      >
        <div className="text-center">
          <p className="text-center font-bold  text-3xl lg:text-5xl opacity-40 ">
            Drag & Drop
          </p>
          <p className="text-neutral-300 text-sm">File Here</p>
        </div>
        <motion.div
          whileTap={{
            scale: 0.98,
            backgroundColor: "#5e5e5e",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
            transition: { duration: 0.1 },
          }}
          className=" relative w-full py-2"
        >
          <p className="text-center">Choose file</p>
          <input
            type="file"
            name="file"
            multiple
            onChange={handleFileChanges}
            className=" text-center opacity-0 w-full absolute top-0"
          />
        </motion.div>
      </div>
      <div className="w-full flex gap-2 overflow-x-auto py-2">
        {" "}
        {/* Added horizontal scrolling */}
        {images.map((img, i) => (
          <div
            key={`${img.name}-${i}`} // Better key using both name and index
            className="relative h-[12rem] w-[6rem] bg-neutral-500  rounded-md overflow-hidden shrink-0" // Added rounded corners and prevent shrinking
          >
            <Image
              src={img.url}
              height={500}
              width={300}
              alt={`Uploaded preview ${i + 1}`} // More descriptive alt text
              className="h-full w-full object-cover" // Changed to object-cover for better cropping
              onError={(e) => {
                (e.target as HTMLImageElement).src = brokenImage.src;
              }}
            />

            {/* Remove button */}
            <button
              onClick={() => {
                URL.revokeObjectURL(img.url);
                setImages((prev) => prev.filter((_, index) => index !== i));
              }}
              className="absolute top-1 right-1 bg-neutral-500/50 text-white rounded-full p-1 hover:rounded-full hover:bg-neutral-500 transition-colors"
              aria-label={`Remove image ${i + 1}`}
            >
              <RxCross2 />
            </button>

            {/* File name tooltip */}
            <div className="absolute bottom-0 left-0 right-0 bg-neutral-500 text-white text-xs p-1 truncate">
              {img.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
