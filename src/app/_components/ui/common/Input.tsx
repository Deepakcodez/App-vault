import { cn } from "@/libs/utils";
import React from "react";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
  label?:string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, onKeyPress, placeholder, className, readOnly, label }, ref) => {
    return (
      <div className="flex flex-col ">
      <label htmlFor={label}>{label}</label>
      <input
        ref={ref}
        type="text" 
        value={value}
        onChange={onChange}
        onKeyUp={onKeyPress}
        placeholder={placeholder}
        className={cn("focus:outline-none bg-neutral-700  px-2 py-2",className)}
        readOnly={readOnly}
        />
        </div>
    );
  }
);

Input.displayName = "Input"; // Optional: Set display name for debugging

export default Input;