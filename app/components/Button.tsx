"use client";
import React, { useEffect, useState } from "react";
import { ButtonProps } from "../types";

const Button = ({ buttonText, clickHandler, size }: ButtonProps) => {
  const [btnWidth, setBtnWith] = useState<number | string>("fit");

  useEffect(() => {
    if (size === "large") {
      setBtnWith("full");
    } else if (size === "medium") {
      setBtnWith("2/3");
    } else {
      setBtnWith("fit");
    }
  }, [size]);

  return (
    <button
      className={`bg-primary text-white shadow-2xl p-3 px-6 rounded-full w-${btnWidth}`}
      onClick={clickHandler}>
      {buttonText}
    </button>
  );
};

export default Button;
