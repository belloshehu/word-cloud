import React, { memo } from "react";
import { WordFrequencyListProps } from "../types";
import WordFrequency from "./WordFrequency";

// Component for list of words and their frequencies
const WordFrequencyList = ({ words }: WordFrequencyListProps) => {
  return (
    <ul className="min-h-full w-full rounded-md p-2 flex flex-col gap-1 overflow-y-auto">
      {Object.entries(words).map((word) => (
        <WordFrequency word={word[0]} frequency={word[1]} key={word[0]} />
      ))}
    </ul>
  );
};

export default memo(WordFrequencyList);
