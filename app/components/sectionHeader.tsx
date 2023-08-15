import React from "react";
interface Props {
  title: React.ReactNode;
  subtitle: string;
}
const SectionHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <p className="text-3xl border-b-4 border-primary pb-3">{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
