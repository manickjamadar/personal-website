import React from "react";
import { ISpecilization } from "../data/specilizations";
interface Props {
  specilization: ISpecilization;
}
const SpecilizationCard: React.FC<Props> = ({ specilization }) => {
  const { description, icon, title } = specilization;
  return (
    <div className="flex flex-col gap-4 max-w-xs items-start">
      <div className="text-4xl text-primary">{icon}</div>
      <h3 className="text-lg border-b-2 border-primary pb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default SpecilizationCard;
