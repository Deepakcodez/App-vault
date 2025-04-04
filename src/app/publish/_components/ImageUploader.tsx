"use client";

import React from "react";
import { motion } from "framer-motion"; // Fixed import
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import brokenImage from "../../../../public/images/broken-image.png";
import { useFormContext } from "../FormContext";
// Import your custom context

const MAX_IMAGES = 8;

const ImageUploader: React.FC = () => {
  const { formData, setFormData } = useFormContext();
  const [isDragging, setIsDragging] = React.useState<boolean>(false);

  const handleFileChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    
    const files = Array.from(e.target.files);
    if (formData.images.length + files.length > MAX_IMAGES) {
      alert(`You can only upload up to ${MAX_IMAGES} images`);
      return;
    }

    const newImages = files
      .filter(file => file.type.startsWith("image/"))
      .map(file => ({
        name: file.name,
        url: URL.createObjectURL(file)
      }));

    if (newImages.length > 0) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
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
    
    if (!e.dataTransfer.files) return;
    
    const files = Array.from(e.dataTransfer.files);
    if (formData.images.length + files.length > MAX_IMAGES) {
      alert(`You can only upload up to ${MAX_IMAGES} images`);
      return;
    }

    const newImages = files
      .filter(file => file.type.startsWith("image/"))
      .map(file => ({
        name: file.name,
        url: URL.createObjectURL(file)
      }));

    if (newImages.length > 0) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const removeImage = (index: number) => {
    URL.revokeObjectURL(formData.images[index].url);
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="flex flex-col gap-2 items-center select-none">
      <div
        onDragOver={handleOndragOver}
        onDragLeave={handleOnDragLeave}
        onDrop={handleOnDrop}
        className={`bg-neutral-600/40 rounded-3xl border-2 border-dashed h-[12rem] w-full flex flex-col justify-center items-center gap-12 ${
          isDragging ? "border-blue-500 bg-neutral-500/60" : "border-neutral-500"
        } ${
          formData.images.length >= MAX_IMAGES ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        <div className="text-center">
          <p className="text-center font-bold text-3xl lg:text-5xl opacity-40">
            Drag & Drop
          </p>
          <p className="text-neutral-300 text-sm">
            {formData.images.length}/{MAX_IMAGES} images
          </p>
        </div>
        <motion.div
          whileTap={formData.images.length < MAX_IMAGES ? {
            scale: 0.98,
            backgroundColor: "#5e5e5e",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
            transition: { duration: 0.1 },
          } : undefined}
          className="relative w-full py-2"
        >
          <p className="text-center">Choose file</p>
          <input
            type="file"
            name="file"
            multiple
            onChange={handleFileChanges}
            className="text-center opacity-0 w-full absolute top-0 cursor-pointer"
            accept="image/*"
            disabled={formData.images.length >= MAX_IMAGES}
          />
        </motion.div>
      </div>

      {formData.images.length > 0 && (
        <div className="w-full flex gap-2 overflow-x-auto py-2 scrollbar-hide">
          {formData.images.map((img, i) => (
            <div
              key={`${img.name}-${i}`}
              className="relative h-[12rem] w-[6rem] bg-neutral-500 rounded-md overflow-hidden shrink-0"
            >
              <Image
                src={img.url}
                height={500}
                width={300}
                alt={`Uploaded preview ${i + 1}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = brokenImage.src;
                }}
              />

              <button
                onClick={() => removeImage(i)}
                className="absolute top-1 right-1 bg-neutral-500/50 text-white rounded-full p-1 hover:bg-neutral-500 transition-colors"
                aria-label={`Remove image ${i + 1}`}
              >
                <RxCross2 size={14} />
              </button>

              <div className="absolute bottom-0 left-0 right-0 bg-neutral-800/80 text-white text-xs p-1 truncate">
                {img.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;