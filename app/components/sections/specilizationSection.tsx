import React from "react";
import SectionHeader from "../sectionHeader";
import SpecilizationCard from "../specilizationCard";
import mySpecilizations from "@/app/data/specilizations";
const SpecilizationSection = () => {
  return (
    <div className="flex gap-12 flex-col items-center">
      <SectionHeader
        title="Specilizations"
        subtitle="I possess diverse expertise in various areas of software development"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {mySpecilizations.map((specilization) => (
          <SpecilizationCard
            key={specilization.title}
            specilization={specilization}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecilizationSection;
