import React from "react";

const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
