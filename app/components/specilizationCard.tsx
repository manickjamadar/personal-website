import React from "react";
import { ISpecilization } from "../data/specilizations";
interface Props {
  specilization: ISpecilization;
}
const SpecilizationCard: React.FC<Props> = ({ specilization }) => {
  const { description, icon, title } = specilization;
  return (
    <div
      className="mx-auto flex flex-col gap-4 max-w-xs items-start border border-slate-50 border-opacity-5 backdrop-filter backdrop-blur-sm rounded-md p-6"
      style={{
        background: specilization.color + "08",
      }}
    >
      <div
        className="text-xl p-3 bg-primary bg-opacity-10 text-primary border border-primary rounded-full"
        style={{
          background: specilization.color + "20",
          borderColor: specilization.color,
          color: specilization.color,
        }}
      >
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-200">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default SpecilizationCard;
