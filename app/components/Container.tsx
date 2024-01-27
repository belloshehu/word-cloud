import React from "react";

// Main container wrapper the entire body content
const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="px-5 md:px-40 mb-20">{children}</div>;
};

export default Container;
