import React, { memo } from "react";
import { WordFrequencyListProps } from "../types";
import WordFrequency from "./WordFrequency";

// Component for list of words and their frequencies
const WordFrequencyList = ({ words }: WordFrequencyListProps) => {
  return (
    <ul className="min-h-full w-full rounded-md bg-slate-200 p-2 shadow-md flex flex-col gap-1">
      {Object.entries(words).map((word) => (
        <WordFrequency word={word[0]} frequency={word[1]} />
      ))}
    </ul>
  );
};

export default memo(WordFrequencyList);
