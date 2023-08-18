import React from "react";
import SectionHeader from "../sectionHeader";
import CategoryFilter from "../categoryFilter";
import ProjectCard from "../projectCard";
import myProjects from "@/app/data/projects";

const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <SectionHeader
        title={
          <span>
            My Creative <span className="text-orange-gradient">Projects</span>
          </span>
        }
        subtitle="Check out my awesome creative projects"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
