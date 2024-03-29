import React from "react";
import SectionHeader from "../sectionHeader";
import CategoryFilter from "../categoryFilter";
import ProjectCard from "../projectCard";
import myProjects from "@/app/data/projects";
import { Tooltip } from "react-tooltip";

const ProjectSection = () => {
  return (
    <>
      <div className="flex flex-col gap-12 items-center">
        <SectionHeader
          title={
            <span>
              Live <span className="text-orange-gradient">Projects</span>
            </span>
          }
          subtitle="Solving real world problems by building stuff is my passion not my work"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
      <Tooltip
        id="link-tooltip"
        style={{ backdropFilter: "blur(8px)", background: "#00000030" }}
      />
      <Tooltip
        id="small-skill-tooltip"
        style={{ backdropFilter: "blur(8px)", background: "#00000040" }}
      />
    </>
  );
};

export default ProjectSection;
