import React from "react";

const Input = ({ type = "text", value, onChange, placeholder = "", className = "" }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border p-2 rounded w-full focus:ring-2 focus:ring-red-500 ${className}`}
    />
  );
};

export default Input;
