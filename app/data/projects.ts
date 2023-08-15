import { ISkill, Skill } from "./skills";

export interface IProject {
  category: "mobile app" | "web app" | "ui/ux";
  title: string;
  description: string;
  imageUrl?: string;
  skills: ISkill[];
  liveUrl?: string;
  sourceUrl?: string;
}

const myProjects: IProject[] = [
  {
    category: "mobile app",
    title: "Personal Website",
    imageUrl: "/assets/images/project-1.png",
    description:
      "A single-page application that helps filmmakers learn more about who their film might be suitable for",
    skills: [Skill.firebase, Skill.html, Skill.nodeJs],
    liveUrl: "https://localhost:3000",
    sourceUrl: "https://github.com/manickjamadar",
  },
  {
    category: "web app",
    title: "Performance Monitor ",
    description:
      "A single-page application that helps filmmakers learn more about who their film might be suitable for",
    skills: [Skill.firebase, Skill.html, Skill.nodeJs],
    liveUrl: "https://localhost:3000",
  },
  {
    category: "ui/ux",
    title: "Rubikcon",
    description:
      "A single-page application that helps filmmakers learn more about who their film might be suitable for",
    skills: [Skill.firebase, Skill.html, Skill.nodeJs],
    sourceUrl: "https://github.com/manickjamadar",
  },
];
export default myProjects;
