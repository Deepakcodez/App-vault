import React from 'react';


const Input = ({
  type = 'text', // Default type is 'text'
  placeholder = '',
  value = '',
  onChange,
  disabled = false,
  className = '', // Allow custom classes
  ...props // Spread any additional props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
      } ${className}`} // Combine Tailwind classes with custom classes
      {...props} // Pass any additional props
    />
  );
};

export default Input;