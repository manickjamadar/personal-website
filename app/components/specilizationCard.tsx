import { motion } from "framer-motion";
import React from "react";
import { ISpecilization } from "../data/specilizations";
interface Props {
  specilization: ISpecilization;
}
const SpecilizationCard: React.FC<Props> = ({ specilization }) => {
  const { description, icon, title } = specilization;
  return (
    <motion.div
      className="flex flex-col gap-4 max-w-sm items-start border border-slate-50 border-opacity-5 backdrop-filter backdrop-blur-sm rounded-md p-6"
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "linear",
      }}
      animate={{
        background: [
          `linear-gradient(0deg, ${specilization.color + "08"} 70%, ${
            specilization.color + "34"
          } 100%)`,
          `linear-gradient(360deg, ${specilization.color + "08"} 70%, ${
            specilization.color + "34"
          } 100%)`,
        ],
      }}
    >
      <div
        className="text-xl p-3 border rounded-full"
        style={{
          background: specilization.color + "20",
          borderColor: specilization.color,
          color: specilization.color,
        }}
      >
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-200">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  );
};

export default SpecilizationCard;
