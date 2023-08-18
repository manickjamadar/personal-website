import React from "react";
import { ISkill } from "../data/skills";
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
interface Props {
  skills: ISkill[];
}
const SkillList: React.FC<Props> = ({ skills }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {skills.map(({ color, icon, name }) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2 }}
          key={name}
          style={{
            backgroundColor: color + "20",
            color: color,
            fontSize: "27px",
          }}
          className="p-4 rounded-full cursor-pointer"
          data-tooltip-id="skill-tooltip"
          data-tooltip-content={name}
          data-tooltip-place="bottom"
        >
          {icon}
        </motion.div>
      ))}
      <Tooltip
        id="skill-tooltip"
        style={{ background: "#7c75df40", backdropFilter: "blur(8px)" }}
      />
    </div>
  );
};

export default SkillList;
