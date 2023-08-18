import LinkPath from "../utils/linkPath";
import { ISkill, Skill } from "./skills";
export enum ProjectCategory {
  mobileApp = "Mobile App",
  webApp = "Web App",
  design = "UI/UX",
}
export interface IProject {
  category: ProjectCategory;
  title: string;
  description: string;
  imageUrl?: string;
  skills: ISkill[];
  liveUrl?: string;
  sourceUrl?: string;
}

const myProjects: IProject[] = [
  {
    category: ProjectCategory.webApp,
    title: "Personal Website",
    description:
      "It's a digital mirror reflecting my devotion to software developement and design. Explore my journey, projects, and skills all in one sleek virtual space",
    skills: [
      Skill.typescript,
      Skill.reactJs,
      Skill.nextJs,
      Skill.tailwind,
      Skill.vercel,
    ],
    imageUrl: LinkPath.personalWebsiteImage,
    liveUrl: LinkPath.personlWebsiteLive,
    sourceUrl: LinkPath.personalWebsiteSource,
  },
  {
    category: ProjectCategory.webApp,
    title: "Prompty Land",
    description:
      "Promptyland is an AI Prompt marketplace for modern world to create, share and explore creative prompts",
    skills: [
      Skill.typescript,
      Skill.reactJs,
      Skill.nextJs,
      Skill.tailwind,
      Skill.mongodb,
      Skill.vercel,
    ],
    imageUrl: LinkPath.promptylandImage,
    liveUrl: LinkPath.promptylandLive,
  },
];
export default myProjects;
