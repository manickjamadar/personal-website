import React from "react";
import SectionHeader from "../sectionHeader";
import SpecilizationCard from "../specilizationCard";
import mySpecilizations from "@/app/data/specilizations";

const SpecilizationSection = () => {
  return (
    <div className="flex gap-12 flex-col">
      <SectionHeader
        title="Specilizations"
        subtitle="I am specilized in various types of skills"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {mySpecilizations.map(({ title, description, icon }) => (
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

export default SpecilizationSection;
