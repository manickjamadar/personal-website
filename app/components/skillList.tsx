import React from "react";
import mySkills, { ISkill } from "../data/skills";
interface Props {
  skills: ISkill[];
}
const SkillList: React.FC<Props> = ({ skills }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {skills.map(({ color, icon, name }) => (
        <div
          key={name}
          style={{
            backgroundColor: color + "20",
            color: color,
            fontSize: "27px",
          }}
          className="p-4 rounded-full"
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default SkillList;
