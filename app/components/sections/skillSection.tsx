import React from "react";
import SectionHeader from "../sectionHeader";
import { FaNodeJs } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import SkillList from "../skillList";
import CategoryFilter from "../categoryFilter";
import mySkills from "@/app/data/skills";
const SkillSection = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <SectionHeader
        title={
          <span>
            My Creative <span className="text-orange-gradient">Skills</span>
          </span>
        }
        subtitle="Check out my awesome creative skills"
      />
      <CategoryFilter categories={["All", "Frontend", "Backend", "Other"]} />
      <SkillList skills={mySkills} />
    </div>
  );
};

export default SkillSection;
