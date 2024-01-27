import React from "react";
import { WordFrequencyProps } from "../types";

// Component for each word and its count/frequency
const WordFrequency = ({ word, frequency }: WordFrequencyProps) => {
  return (
    <li className="w-full flex justify-between items-center bg-white p-2 rounded-md">
      <p>{word}</p>
      <small className="px-3 py-1 ring-1 ring-primary rounded-full">
        {frequency}
      </small>
    </li>
  );
};

export default WordFrequency;
