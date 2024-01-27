import React, { memo } from "react";
import { TextInputProps } from "../types";
import Button from "./Button";

const TextInput = ({
  text,
  tokens,
  setText,
  textTokenizer,
}: TextInputProps) => {
  return (
    <div className="w-full flex flex-col gap-10 p-0 justify-start flex-3">
      <textarea
        className="rounded-md  p-5 shadow-lg w-full h-[60vh] border-primary border-[1px] focus:border-2 outline-none"
        rows={20}
        cols={50}
        minLength={1000}
        placeholder="Enter text here to generate word cloud"
        value={text}
        onChange={(e) => setText(e.target.value)}></textarea>

      {/* Button and wordcount wrapper */}
      <div className="flex justify-between items-center w-full">
        <Button
          buttonText="Generate cloud"
          clickHandler={textTokenizer}
          size="medium"
        />
        <p className="p-2 px-4 text-sm  rounded-full border-[1px] border-slate-600">
          {tokens.length} words
        </p>
      </div>
    </div>
  );
};

export default memo(TextInput);
