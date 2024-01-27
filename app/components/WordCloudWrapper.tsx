"use client";
import { useEffect, useRef, useState } from "react";
import { WordCloudProps, WordData } from "../types";
import WordCloud from "react-d3-cloud";
import Button from "./Button";
import { saveSvgAsPng } from "save-svg-as-png";

const WordCloudWrapper = ({ data }: WordCloudProps) => {
  const [wordData, setWordData] = useState<WordData[]>([]);
  const [maxFrequency, setMaxFrequency] = useState(100);
  const wordCloudRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // get maximum frequency
    const frequencies = data.map((word) => word.value);
    setMaxFrequency(Math.max(...frequencies));

    setWordData(data);
  }, [data]);

  // saves word cloud as png imag
  const handleSave = async () => {
    const svgElement = wordCloudRef.current?.querySelector("svg");
    saveSvgAsPng(svgElement, "wordcloud.png");
  };

  // fontsize of each word is a percentage of the maximum frequency
  const fontSize = (word: WordData) => (100 * word.value) / maxFrequency;

  // angle of rotation for each word
  const rotate = () => 0;
  if (!wordData) {
    return (
      <div className="w-full bg-black h-[10vh] rounded-md text-white text-center">
        <h1>Loading word cloud ...</h1>
      </div>
    );
  }
  return (
    <div className="w-ful h-auto flex flex-col gap-5 justify-center">
      <div
        className="w-full bg-slate-50 border-[1px] h-full rounded-md text-white text-center"
        ref={wordCloudRef}>
        <WordCloud
          data={wordData}
          width={1000}
          height={450}
          fontSize={fontSize}
          rotate={rotate}
          padding={3}
          spiral={"rectangular"}
          random={Math.random}
        />
      </div>

      <Button
        buttonText="Save as image"
        size={"medium"}
        clickHandler={handleSave}
      />
    </div>
  );
};

export default WordCloudWrapper;
