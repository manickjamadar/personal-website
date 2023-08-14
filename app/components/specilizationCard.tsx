import React from "react";
interface Props {
  title?: string;
  description?: string;
  icon: React.ReactNode;
}
const SpecilizationCard: React.FC<Props> = ({
  title = "No Title",
  description = "No Description",
  icon,
}) => {
  return (
    <div className="flex flex-col gap-4 max-w-xs items-start">
      {icon}
      <p className="text-lg border-b-2 border-primary pb-2">{title}</p>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default SpecilizationCard;
