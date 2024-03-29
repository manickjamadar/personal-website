import LinkPath from "../utils/linkPath";
import { ISkill, Skill } from "./skills";
export enum ProjectCategory {
  mobileApp = "Mobile",
  webApp = "Web",
  design = "UI/UX",
  package = "Package",
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
    title: "Prompty Land",
    description:
      "Promptyland is an AI Prompt marketplace for modern world to create, share and explore creative prompts",
    skills: [
      Skill.typescript,
      Skill.reactJs,
      Skill.framerMotion,
      Skill.nextJs,
      Skill.tailwind,
      Skill.mongodb,
      Skill.vercel,
    ],
    imageUrl: LinkPath.promptylandImage,
    liveUrl: LinkPath.promptylandLive,
  },
  {
    category: ProjectCategory.webApp,
    title: "Blogskitter",
    description:
      "Blogskitter is an open platform where readers find dynamic thinking and where expert and undiscovered voices can share their writing on any topic",
    skills: [
      Skill.typescript,
      Skill.reactJs,
      Skill.nextJs,
      Skill.tailwind,
      Skill.firebase,
      Skill.vercel,
    ],
    imageUrl: LinkPath.blogSkitterWebsiteImage,
    liveUrl: LinkPath.blogSkitterWebsiteLive,
    sourceUrl: LinkPath.blogSkitterWebsiteSource,
  },
  {
    category: ProjectCategory.webApp,
    title: "Personal Website",
    description:
      "It's a digital mirror reflecting my devotion to software development and design. Explore my journey, projects, and skills all in one sleek virtual space",
    skills: [
      Skill.typescript,
      Skill.reactJs,
      Skill.framerMotion,
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
    title: "Freedom Calculator",
    description:
      "It helps users to calculate the required savings to achieve financial freedom and effectively plan their path to financial independence",
    skills: [Skill.typescript, Skill.reactJs, Skill.jest, Skill.netlify],
    imageUrl: LinkPath.freedomCalculatorImage,
    liveUrl: LinkPath.freedomCalculatorLive,
    sourceUrl: LinkPath.freedomCalculatorSource,
  },
  {
    category: ProjectCategory.webApp,
    title: "Stepper Challenge",
    description:
      "I have participated in stepper coding challenge conducted by Colt Steele on his youtube channel. It was a great learning experience",
    skills: [
      Skill.html,
      Skill.css,
      Skill.sass,
      Skill.javascript,
      Skill.netlify,
    ],
    imageUrl: LinkPath.stepperImage,
    liveUrl: LinkPath.stepperLive,
    sourceUrl: LinkPath.stepperSource,
  },
  {
    category: ProjectCategory.package,
    title: "Css Injector",
    description:
      "Inject css rules to style tag of document head dynamically with javascript. User can select whether to insert to top or not also",
    skills: [Skill.javascript, Skill.nodeJs, Skill.npm],
    imageUrl: LinkPath.cssInjectorImage,
    liveUrl: LinkPath.cssInjectorLive,
    sourceUrl: LinkPath.cssInjectorSource,
  },
  // {
  //   category: ProjectCategory.package,
  //   title: "Change Default",
  //   description:
  //     "It helps to Convert exports.default to module.exports for all .js files in specified directories recursively",
  //   skills: [Skill.javascript, Skill.nodeJs, Skill.npm],
  //   imageUrl: LinkPath.changeDefaultImage,
  //   liveUrl: LinkPath.changeDefaultLive,
  //   sourceUrl: LinkPath.changeDefaultSource,
  // },
];
export default myProjects;
