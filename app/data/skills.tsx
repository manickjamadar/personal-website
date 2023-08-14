import { FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
export interface ISkill {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: "frontend" | "backend" | "other";
}

const mySkills: ISkill[] = [
  { name: "Html5", icon: <FaHtml5 />, color: "#df5f2c", category: "frontend" },
  { name: "NodeJs", icon: <FaNodeJs />, color: "#0baa5b", category: "backend" },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "#dbb023",
    category: "other",
  },
];
export default mySkills;
