"use client";

import { useState } from "react";
import { motion, MotionProps } from "framer-motion";

interface SkillCardProps extends MotionProps {
  title: string;
  icon: React.ReactNode;
  details: string[];
}

export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  icon,
  details,
  ...motionProps
}) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      {...motionProps}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ scale: 1.05 }}
      className="relative cursor-pointer bg-white shadow-md p-4 rounded-xl border text-center z-20 hover:z-30 transition-all"
    >
      <div className="flex justify-center mb-2">{icon}</div>
      <h3 className="font-semibold text-sm text-[#3b2f4a]">{title}</h3>

      {hover && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-1/2 -translate-x-1/2 -top-3 -translate-y-full bg-white shadow-xl rounded-xl p-4 border w-56 z-50"
        >
          <h4 className="font-semibold text-[#3b2f4a] mb-2 text-sm text-center">
            {title}
          </h4>
          <ul className="text-xs text-[#4d4358] space-y-1 list-disc pl-4 text-left">
            {details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};
