import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaSass,
} from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  SiFirebase,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiGraphql,
  SiSocketdotio,
  SiMongodb,
  SiRedis,
  SiJest,
  SiCypress,
  SiVercel,
  SiNetlify,
  SiAdobephotoshop,
  SiFigma,
} from "react-icons/si";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
export enum SkillCategory {
  frontend = "frontend",
  backend = "backend",
  other = "other",
}

export interface ISkill {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: SkillCategory;
}
export class Skill {
  static html: ISkill = {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "#DD4B24",
    category: SkillCategory.frontend,
  };
  static css: ISkill = {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "#1A6FB4",
    category: SkillCategory.frontend,
  };
  static sass: ISkill = {
    name: "Sass",
    icon: <FaSass />,
    color: "#CF649A",
    category: SkillCategory.frontend,
  };
  static javascript: ISkill = {
    name: "Javascript",
    icon: <BiLogoJavascript />,
    color: "#DD9C24",
    category: SkillCategory.frontend,
  };
  static typescript: ISkill = {
    name: "Typescript",
    icon: <BiLogoTypescript />,
    color: "#2F74C0",
    category: SkillCategory.frontend,
  };
  static reactJs: ISkill = {
    name: "ReactJs",
    icon: <FaReact />,
    color: "#5ED3F3",
    category: SkillCategory.frontend,
  };
  static framerMotion: ISkill = {
    name: "Framer Motion",
    icon: <TbBrandFramerMotion />,
    color: "#F008BB",
    category: SkillCategory.frontend,
  };
  static redux: ISkill = {
    name: "Redux",
    icon: <SiRedux />,
    color: "#7248B6",
    category: SkillCategory.frontend,
  };
  static tailwind: ISkill = {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
    color: "#36B7F0",
    category: SkillCategory.frontend,
  };
  static nextJs: ISkill = {
    name: "NextJs",
    icon: <TbBrandNextjs />,
    color: "#e4e4e4",
    category: SkillCategory.frontend,
  };
  static materialUI: ISkill = {
    name: "MaterialUI",
    icon: <SiMui />,
    color: "#007FFF",
    category: SkillCategory.frontend,
  };

  static nodeJs: ISkill = {
    name: "NodeJs",
    icon: <FaNodeJs />,
    color: "#58A149",
    category: SkillCategory.backend,
  };
  static expressJS: ISkill = {
    name: "ExpressJS",
    icon: <SiExpress />,
    color: "#e4e4e4",
    category: SkillCategory.backend,
  };
  static graphQL: ISkill = {
    name: "GraphQL",
    icon: <SiGraphql />,
    color: "#E63BAE",
    category: SkillCategory.backend,
  };
  static socketIO: ISkill = {
    name: "SocketIO",
    icon: <SiSocketdotio />,
    color: "#e4e4e4",
    category: SkillCategory.backend,
  };
  static mongodb: ISkill = {
    name: "Mongodb",
    icon: <SiMongodb />,
    color: "#54B245",
    category: SkillCategory.backend,
  };
  static mysql: ISkill = {
    name: "Mysql",
    icon: <GrMysql />,
    color: "#4A7DA4",
    category: SkillCategory.backend,
  };
  static firebase: ISkill = {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "#FFAA1B",
    category: SkillCategory.backend,
  };
  static redis: ISkill = {
    name: "Redis",
    icon: <SiRedis />,
    color: "#DD3E33",
    category: SkillCategory.backend,
  };
  static jest: ISkill = {
    name: "Jest",
    icon: <SiJest />,
    color: "#9C4860",
    category: SkillCategory.other,
  };
  static cypress: ISkill = {
    name: "Cypress",
    icon: <SiCypress />,
    color: "#e4e4e4",
    category: SkillCategory.other,
  };
  static git: ISkill = {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F05639",
    category: SkillCategory.other,
  };
  static github: ISkill = {
    name: "Github",
    icon: <FaGithub />,
    color: "#e4e4e4",
    category: SkillCategory.other,
  };
  static vercel: ISkill = {
    name: "Vercel",
    icon: <SiVercel />,
    color: "#e4e4e4",
    category: SkillCategory.other,
  };
  static netlify: ISkill = {
    name: "Netlify",
    icon: <SiNetlify />,
    color: "#0DBFBC",
    category: SkillCategory.other,
  };
  static photoshop: ISkill = {
    name: "Photoshop",
    icon: <SiAdobephotoshop />,
    color: "#32BDFA",
    category: SkillCategory.other,
  };
  static figma: ISkill = {
    name: "Figma",
    icon: <SiFigma />,
    color: "#F25425",
    category: SkillCategory.other,
  };
}
const mySkills: ISkill[] = [
  Skill.html,
  Skill.css,
  Skill.sass,
  Skill.javascript,
  Skill.typescript,
  Skill.reactJs,
  Skill.framerMotion,
  Skill.redux,
  Skill.tailwind,
  Skill.nextJs,
  Skill.materialUI,
  Skill.nodeJs,
  Skill.expressJS,
  Skill.socketIO,
  Skill.mongodb,
  Skill.mysql,
  Skill.firebase,
  Skill.redis,
  Skill.jest,
  Skill.cypress,
  Skill.git,
  Skill.github,
  Skill.vercel,
  Skill.netlify,
  Skill.photoshop,
  Skill.figma,
];
export const skillCategories = Object.values(SkillCategory);
export default mySkills;
