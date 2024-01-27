"use client";

import React, { memo, useState } from "react";
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
        className="rounded-md bg-slate-100 p-5 shadow-lg w-full h-[60vh] border-primary border-[1px] focus:border-2 outline-none"
        rows={20}
        cols={50}
        minLength={1000}
        placeholder="Enter text here"
        value={text}
        onChange={(e) => setText(e.target.value)}></textarea>

      {/* Button and wordcount wrapper */}
      <div className="flex justify-between items-center w-full">
        <Button buttonText="Generate cloud" clickHandler={textTokenizer} />
        <p className="p-2 px-4 text-sm bg-slate-100 rounded-full">
          {tokens.length} words
        </p>
      </div>
    </div>
  );
};

export default memo(TextInput);
