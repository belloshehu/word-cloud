"use client";
import TextInput from "./components/TextInput";
import WordFrequencyListWrapper from "./components/WordFrequencyListWrapper";
import { useState } from "react";
import { Token, WordData, WordFrequency } from "./types";
import { stopwords } from "./data/stop-words";
import WordFrequencyList from "./components/WordFrequencyList";
import WordCloudWrapper from "./components/WordCloudWrapper";

export default function Home() {
  const [text, setText] = useState("");
  const [frequencies, setFrequencies] = useState<WordFrequency>({});
  const [tokens, setTokens] = useState<Token>([]);

  // Create array of words and their frequencies
  const generateFrequencies = (toks: Token) => {
    const generatedFreqency: WordFrequency = {};
    if (toks.length > 0) {
      toks.forEach(
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
    setTokens(result);
    generateFrequencies(result);
  };

  // converts word frequencies to cloud data ({word: count, anotherword: anothercount} to [{text: "word", value: count}])
  const frequencyToCloudData = (frequencies: WordFrequency): WordData[] => {
    return Object.entries(frequencies).map((entry) => {
      return { text: entry[0], value: entry[1] };
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-start gap-24">
      <div className="flex w-full flex-col md:flex-row items-start justify-between gap-4 p-0">
        {/* text input */}
        <TextInput
          tokens={tokens}
          text={text}
          setText={setText}
          textTokenizer={tokenizeText}
        />
        {/* word frequencies */}
        {tokens.length > 0 && (
          <WordFrequencyListWrapper>
            <WordFrequencyList words={frequencies} />
          </WordFrequencyListWrapper>
        )}
      </div>
      {/* word cloud */}
      {tokens.length > 0 && (
        <div className="w-full flex flex-col gap-5">
          <h2 className="text-xl font-semibold">Generated cloud</h2>
          <WordCloudWrapper data={frequencyToCloudData(frequencies)} />
        </div>
      )}
    </main>
  );
}
