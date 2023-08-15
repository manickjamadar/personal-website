import { FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
export interface ISkill {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: "frontend" | "backend" | "other";
}
export class Skill {
  static html: ISkill = {
    name: "Html5",
    icon: <FaHtml5 />,
    color: "#df5f2c",
    category: "frontend",
  };
  static nodeJs: ISkill = {
    name: "NodeJs",
    icon: <FaNodeJs />,
    color: "#0baa5b",
    category: "backend",
  };
  static firebase: ISkill = {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "#dbb023",
    category: "other",
  };
}
const mySkills: ISkill[] = [Skill.html, Skill.firebase, Skill.nodeJs];
export default mySkills;
