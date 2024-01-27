"use client";
import React, { useEffect, useState } from "react";
import { ButtonProps } from "../types";

const Button = ({ buttonText, clickHandler, size }: ButtonProps) => {
  const [btnWidth, setBtnWith] = useState<number | string>("medium");

  useEffect(() => {
    if (size === "large") {
      setBtnWith("full");
    } else if (size === "medium") {
      setBtnWith("w-2/3");
    } else if (size === "small") {
      setBtnWith("w-fit");
    }
  }, [size]);

  return (
    <button
      className={`bg-gradient-to-r from-slate-500 to-primary text-white shadow-2xl p-3 px-6 rounded-full ${btnWidth} outline-none`}
      onClick={clickHandler}>
      {buttonText}
    </button>
  );
};

export default Button;
