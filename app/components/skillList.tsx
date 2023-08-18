import React from "react";
import { ISkill } from "../data/skills";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
  skills: ISkill[];
}
const SkillList: React.FC<Props> = ({ skills }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {skills.map(({ color, icon, name }) => (
        <motion.div
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
          className="p-4 rounded-full"
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export default SkillList;
