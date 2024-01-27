import React from "react";

const WordFrequencyListWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full h-full md:w-1/4 flex flex-col border-[1px] p-3 rounded-md">
      <h3 className="text-primary font-normal">Frequencies</h3>
      {children}
    </div>
  );
};

export default WordFrequencyListWrapper;
