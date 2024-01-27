"use client";
import TextInput from "./components/TextInput";
import WordFrequencyListWrapper from "./components/WordFrequencyListWrapper";
import { useState } from "react";
import { Token, WordFrequency } from "./types";
import { stopwords } from "./data/stopw-words";
import WordFrequencyList from "./components/WordFrequencyList";
import WordCloud from "./components/WordCloud";
import Button from "./components/Button";

export default function Home() {
  const [text, setText] = useState("");
  const [frequencies, setFrequencies] = useState<WordFrequency>({});
  const [tokens, setTokens] = useState<Token>([]);

  // Create array of words and their frequencies
  const generateFrequencies = () => {
    const generatedFreqency: WordFrequency = {};
    if (tokens.length > 0) {
      tokens.forEach(
        (token) =>
          (generatedFreqency[token] = generatedFreqency[token]
            ? generatedFreqency[token] + 1
            : 1)
      );
    }
    setFrequencies(generatedFreqency);
  };

  // function to generate tokens from entered text
  const tokenizeText = () => {
    // split text and filter out common words
    const result = text
      .split(" ")
      .filter((word) => !stopwords.includes(word.toLowerCase()));
    console.log(result);
    setTokens(result);
    generateFrequencies();
  };

  return (
    <main className="flex min-h-screen flex-col items-start gap-24">
      <div className="flex w-full flex-col md:flex-row items-start justify-between gap-4 p-0">
        <TextInput
          tokens={tokens}
          text={text}
          setText={setText}
          textTokenizer={tokenizeText}
        />
        {tokens.length > 0 && (
          <WordFrequencyListWrapper>
            <WordFrequencyList words={frequencies} />
          </WordFrequencyListWrapper>
        )}
      </div>
      {tokens.length > 0 && (
        <div className="w-full flex flex-col gap-5">
          <h2>Generated cloud</h2>
          <WordCloud />
          <Button
            buttonText="Save cloud"
            size={"small"}
            clickHandler={() => {}}
          />
        </div>
      )}
    </main>
  );
}
