"use client";

import { useState } from "react";
import { motion, MotionProps } from "framer-motion";
import { Code, Cpu, Layers, PenTool, Box, BarChart3 } from "lucide-react";

/* ================= SKILL DETAIL DATA ================= */
const skillDetails: Record<string, string[]> = {
  "Web Development": [
    "Laravel",
    "Next.js",
    "Node.js",
    "Express",
    "PHP",
    "HTML",
    "Bootstrap",
    "Tailwind CSS",
  ],
  "IoT Systems": [
    "ESP32",
    "Raspberry Pi 4",
    "Arduino",
    "MQTT",
    "Node-RED",
    "InfluxDB",
    "Grafana",
  ],
  "Smart Devices": [
    "Embedded Programming",
    "Integrasi Sensor",
    "Hardware Prototyping",
  ],
  "UI/UX Design": ["Figma", "Wireframing", "Prototyping"],
  Prototyping: ["Arduino", "PCB Design", "3D Enclosure Modeling"],
  "Data Visualization": ["Grafana", "InfluxDB", "Custom Charting"],

  /* 🔥 Added – sesuai CV kamu */
  "DevOps & Cloud": ["Docker", "Kubernetes", "Terraform", "AWS"],
  Tools: ["Git", "GitHub", "Shell Scripting"],
};

/* ================= ICONS PER SKILL ================= */
const skillIcons: Record<string, React.ReactNode> = {
  "Web Development": <Code size={28} className="text-[#3b2f4a]" />,
  "IoT Systems": <Cpu size={28} className="text-[#3b2f4a]" />,
  "Smart Devices": <Layers size={28} className="text-[#3b2f4a]" />,
  "UI/UX Design": <PenTool size={28} className="text-[#3b2f4a]" />,
  Prototyping: <Box size={28} className="text-[#3b2f4a]" />,
  "Data Visualization": <BarChart3 size={28} className="text-[#3b2f4a]" />,

  /* 🔥 Added Icons */
  "DevOps & Cloud": <Cpu size={28} className="text-[#3b2f4a]" />,
  Tools: <Box size={28} className="text-[#3b2f4a]" />,
};

/* ================= REUSABLE SKILL CARD ================= */
interface SkillCardProps extends MotionProps {
  title: string;
  icon: React.ReactNode;
  details: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({
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
          exit={{ opacity: 0, y: 10 }}
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

/* ================= MAIN ABOUT & SKILLS SECTION ================= */
const AboutAndSkills: React.FC = () => {
  return (
    <>
      {/* ABOUT + SKILLS (2 kolom) */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-6xl w-full px-6 mt-20 grid md:grid-cols-2 gap-12"
      >
        {/* ===== ABOUT ME ===== */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#3b2f4a] border-l-4 border-[#bcd4e6] pl-3">
            About Me
          </h2>
          <p className="text-[#4d4358] leading-relaxed tracking-wide text-justify">
            I am a final-year DIII Computer Technology student at the Del
            Institute of Technology, focusing on Internet of Things (IoT), Cloud
            Computing, and Computer Networking. I have hands-on experience
            developing IoT systems, backend services, and cloud-integrated
            applications. My coursework covers web development, mobile
            development with Flutter, networking, virtualization, embedded
            systems, UI design, and cloud computing—strengthening my ability to
            work across software and hardware environments. Beyond academics, I
            have been active in student organizations such as BEM and the Study
            Program Student Association, which improved my communication,
            teamwork, and leadership skills. With this technical and
            organizational background, I am motivated to contribute effectively
            to professional environments that value problem-solving,
            collaboration, and continuous learning.
          </p>
        </div>

        {/* ===== SKILLS ===== */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#3b2f4a] border-l-4 border-[#bcd4e6] pl-3">
            Skills
          </h2>

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

      {/* ================= EDUCATION ================= */}
      <div className="mt-12 px-6 max-w-6xl w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-[#3b2f4a] border-l-4 border-[#bcd4e6] pl-3">
          Education
        </h2>

        <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100 mb-6">
          <h3 className="text-lg font-semibold text-[#3b2f4a]">
            Diploma in Computer Engineering
          </h3>
          <p className="text-[#4d4358]">
            Institut Teknologi Del – Sitoluama, Laguboti, Toba Samosir
          </p>

          <p className="text-[#6a5f73] mt-2">Aug 2023 – Sep 2026 (Expected)</p>

          <p className="text-[#3b2f4a] font-medium mt-2">GPA: 3.30 / 4.00</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
          <h3 className="text-lg font-semibold text-[#3b2f4a]">
            Senior High School (Science Stream)
          </h3>
          <p className="text-[#4d4358]">
            SMAN 1 Balige – Balige
          </p>

          <p className="text-[#6a5f73] mt-2">2020 – 2023</p>
        </div>
      </div>

      {/* ================= LANGUAGES ================= */}
      <div className="mt-10 px-6 max-w-6xl w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-[#3b2f4a] border-l-4 border-[#bcd4e6] pl-3">
          Languages
        </h2>

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
};

export default AboutAndSkills;
