import React from "react";
import { ButtonProps } from "../types";

const Button = ({ buttonText, clickHandler }: ButtonProps) => {
  return (
    <button
      className="bg-primary text-white font-semibold shadow-2xl p-3 px-6 rounded-full w-3/6"
      onClick={clickHandler}>
      {buttonText}
    </button>
  );
};

export default Button;
