import React from "react";
interface Props {
  children: React.ReactNode;
}
const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full mx-auto max-w-7xl px-6 sm:px-16">{children}</div>
  );
};

export default Container;
