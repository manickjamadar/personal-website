import React from "react";
import SectionHeader from "../sectionHeader";
import SpecilizationCard from "../specilizationCard";
import { MdDraw, MdDesktopWindows } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
const specilizations: {
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Frontend Development",
    description:
      "A single-page application that helps filmmakers learn more about who their film might be suitable for.",
    icon: <MdDesktopWindows className="text-4xl text-primary" />,
  },
  {
    title: "Backend Development",
    description:
      "A single-page application that helps filmmakers learn more about who their film might be suitable for.",
    icon: <FaDatabase className="text-3xl text-primary" />,
  },
  {
    title: "UI/UX Design",
    description:
      "A single-page application that helps filmmakers learn more about who their film might be suitable for.",
    icon: <MdDraw className="text-4xl text-primary" />,
  },
];
const Specilization = () => {
  return (
    <div className="flex gap-12 flex-col">
      <SectionHeader
        title="Specilizations"
        subtitle="I am specilized in various types of skills"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {specilizations.map(({ title, description, icon }) => (
          <SpecilizationCard
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Specilization;
