"use client";
import React, { useState } from "react";
import SectionHeader from "../sectionHeader";
import SkillList from "../skillList";
import CategoryFilter from "../categoryFilter";
import mySkills, { SkillCategory, skillCategories } from "@/app/data/skills";

const SkillSection = () => {
  const [activeCategoryIndex, setCategoryIndex] = useState(-1);
  const categoryClickHandler = (index: number) => {
    setCategoryIndex(index);
  };
  const filteredSkills =
    activeCategoryIndex < 0 || activeCategoryIndex >= skillCategories.length
      ? mySkills
      : mySkills.filter(
          (skill) => skill.category === skillCategories[activeCategoryIndex]
        );
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
      <CategoryFilter
        categories={skillCategories}
        activeIndex={activeCategoryIndex}
        onClick={categoryClickHandler}
      />
      <SkillList skills={filteredSkills} />
    </div>
  );
};

export default SkillSection;
