import { cn } from "../../../../lib/utils";

import React from "react";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
  label?: string;
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      onChange,
      onKeyPress,
      placeholder,
      className,
      readOnly,
      label,
      error,
    },
    ref
  ) => {
    return (
      <div className="flex  flex-col ">
        <label htmlFor={label} className="pb-1">
          {label}
        </label>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyPress}
          placeholder={placeholder}
          className={cn(
            "focus:outline-none bg-neutral-900  px-2 py-2",
            className
          )}
          readOnly={readOnly}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input"; // Optional: Set display name for debugging

export default Input;
