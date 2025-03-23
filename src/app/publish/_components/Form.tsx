"use client";
import Input from "@/app/_components/ui/common/Input";
import React from "react";
import { RxCross2 } from "react-icons/rx";

type FormDataType = {
  appName: string;
  description: string;
  stack: string[];
};

const Form: React.FC = () => {
  const [formData, setFormData] = React.useState<FormDataType>({
    appName: "",
    description: "",
    stack: [""],
  });

  // Track which inputs are editable
  const [editableIndices, setEditableIndices] = React.useState<Set<number>>(
    new Set([0])
  );

  // Refs to manage focus
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  const handleStackChange = (i: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      stack: prev.stack.map((tech, index) => (index === i ? value : tech)),
    }));
  };

  const handleStackEnter = (i: number) => {
    // Disable editing for the current input
    if (formData.stack[i] == "") return;

    setEditableIndices((prev) => {
      const newEditableIndices = new Set(prev);
      newEditableIndices.delete(i);
      return newEditableIndices;
    });

    // Add a new input field if this is the last one
    if (i === formData.stack.length - 1) {
      setFormData((prev) => ({
        ...prev,
        stack: [...prev.stack, ""],
      }));
      setEditableIndices((prev) => new Set(prev).add(i + 1));
    }
  };


  const handleRemoveStack=(i:number)=>{
    console.log(i)
  }

  React.useEffect(() => {
    const lastIndex = formData.stack.length - 1;
    if (inputRefs.current[lastIndex]) {
      inputRefs.current[lastIndex]?.focus();
    }
  }, [formData.stack.length]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-6xl font-bold text-center bg-gradient-to-b from-neutral-600 to-transparent text-transparent bg-clip-text">
        Register Your App
      </h1>
      <Input
        value={formData.appName}
        placeholder="Enter App Name"
        onChange={(e) => {
          setFormData((prev) => ({
            ...prev,
            appName: e.target.value,
          }));
        }}
        label="App Name"
      />
      <Input
        value={formData.description}
        placeholder="Enter App Description"
        onChange={(e) => {
          setFormData((prev) => ({
            ...prev,
            description: e.target.value,
          }));
        }}
        label="App Description"
      />
      <div>
        <p>Tech Stack</p>
        <div className="p-4 border border-neutral-600/50  flex flex-wrap gap-4">
          {formData.stack.map((tech, i) => (
            <div key={i} className="w-40 relative ">
              <Input
                value={tech}
                ref={(el) => {
                  inputRefs.current[i] = el;
                }}
                onChange={(e) => handleStackChange(i, e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // Prevent form submission
                    handleStackEnter(i); // Disable editing and shift focus
                  }
                }}
                placeholder="Tech"
                readOnly={!editableIndices.has(i)} // Disable editing if not in editableIndices
              />
              <RxCross2 
              onClick={()=>handleRemoveStack(i)}
              className="absolute top-1 right-1 hover:bg-neutral-500 duration-300 p-[2px] **:" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
