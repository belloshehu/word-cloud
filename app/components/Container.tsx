import React from "react";

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="px-5 md:px-40">{children}</div>;
};

export default Container;
