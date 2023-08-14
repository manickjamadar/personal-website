import React from "react";
interface Props {
  children: React.ReactNode;
  subtitle: string;
}
const SectionHeader: React.FC<Props> = ({ children, subtitle }) => {
  return (
    <div className="flex flex-col gap-3 items-start">
      <p className="text-3xl border-b-4 border-primary pb-3">{children}</p>
      <p>{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
