import React from "react";

interface ButtonProps {
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({handleClick, children }) => {
  return (
    <button 
      style={{alignContent: "inherit"}} 
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
