import React from "react";
interface Props {
  children: React.ReactNode;
}
const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full mx-auto max-w-7xl px-8 sm:px-16 md:px-24 py-8">
      {children}
    </div>
  );
};

export default Container;
