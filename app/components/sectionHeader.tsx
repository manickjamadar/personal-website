import React from "react";
interface Props {
  title: React.ReactNode;
  subtitle: string;
}
const SectionHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-3 items-center text-center">
      <div>
        <h2 className="text-2xl sm:text-3xl mb-2">{title}</h2>
        <div className="h-[3px] sm:h-[4px] bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
      </div>
      <p className="text-slate-400">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
