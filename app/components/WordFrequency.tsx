import React from "react";
import { WordFrequencyProps } from "../types";

// Component for each word and its count/frequency
const WordFrequency = ({ word, frequency }: WordFrequencyProps) => {
  return (
    <li className="w-full flex justify-between items-center bg-white p-1 border-b-2 border-slate-100">
      <p className="bg-primary p-1 px-3 text-sm rounded-full text-white ">
        {word}
      </p>
      <small className="px-3 py-1 ring-1 ring-primary rounded-full">
        {frequency}
      </small>
    </li>
  );
};

export default WordFrequency;
