"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Layers, PenTool, Box, BarChart3 } from "lucide-react";
import { SkillCard } from "@/app/components/SkillCard";
import { SectionHeading } from "@/app/components/ui";
import { skillDetails, educations, profile } from "@/lib/data/portfolio";

const skillIcons: Record<string, React.ReactNode> = {
  "Web Development": <Code size={28} className="text-[#3b2f4a]" />,
  "IoT Systems": <Cpu size={28} className="text-[#3b2f4a]" />,
  "Smart Devices": <Layers size={28} className="text-[#3b2f4a]" />,
  "UI/UX Design": <PenTool size={28} className="text-[#3b2f4a]" />,
  "Prototyping": <Box size={28} className="text-[#3b2f4a]" />,
  "Data Visualization": <BarChart3 size={28} className="text-[#3b2f4a]" />,
  "DevOps & Cloud": <Cpu size={28} className="text-[#3b2f4a]" />,
  "Tools": <Box size={28} className="text-[#3b2f4a]" />,
};

export function AboutAndSkillsSection() {
  return (
    <>
      {/* About + Skills */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-6xl w-full px-6 mt-20 grid md:grid-cols-2 gap-12"
      >
        {/* About Me */}
        <div>
          <SectionHeading>About Me</SectionHeading>
          <p className="text-[#4d4358] leading-relaxed tracking-wide text-justify">
            {profile.bio}
          </p>
        </div>

        {/* Skills */}
        <div>
          <SectionHeading>Skills</SectionHeading>
          <div className="grid grid-cols-3 gap-4 overflow-visible">
            {Object.keys(skillDetails).map((skill, index) => (
              <SkillCard
                key={index}
                title={skill}
                icon={skillIcons[skill]}
                details={skillDetails[skill]}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <div className="mt-12 px-6 max-w-6xl w-full mx-auto">
        <SectionHeading>Education</SectionHeading>
        <div className="flex flex-col gap-6">
          {educations.map((edu, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md border border-purple-100"
            >
              <h3 className="text-lg font-semibold text-[#3b2f4a]">{edu.degree}</h3>
              <p className="text-[#4d4358]">
                {edu.institution} – {edu.location}
              </p>
              <p className="text-[#6a5f73] mt-2">{edu.period}</p>
              {edu.gpa && (
                <p className="text-[#3b2f4a] font-medium mt-2">GPA: {edu.gpa}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mt-10 px-6 max-w-6xl w-full mx-auto">
        <SectionHeading>Languages</SectionHeading>
        <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-[#3b2f4a] font-semibold">Indonesian</p>
              <p className="text-[#6a5f73] text-sm">(Native)</p>
            </div>
            <div>
              <p className="text-[#3b2f4a] font-semibold">English</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
