"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  Globe,
  Download,
  MessageCircle,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

/* ================= MAIN PAGE ================= */
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f5f7] via-[#eef3f7] to-[#f1f7f5] flex flex-col items-center py-16 text-[#343434] selection:bg-[#d9e4ec] selection:text-[#3b2f4a]">
      <HeaderSection />
      <AboutAndSkills />
      <OrganizationSection />
      <CertificationsSection />
      <ProjectsSection />
    </main>
  );
}

/* ---------- Header Section ---------- */
function HeaderSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl w-full px-6 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      <div className="flex justify-center md:w-1/3 relative">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="rounded-full bg-gradient-to-br from-[#d4c8e3] to-[#cce2e9] p-2 shadow-xl"
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={220}
            height={220}
            className="rounded-full object-cover border-4 border-white shadow-lg"
          />
        </motion.div>
      </div>

      <div className="md:w-2/3 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#3b2f4a] drop-shadow-md mb-2"
        >
          Stevi Greis Sianipar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-[#6a5c7c] mb-6"
        >
          Web Developer | IoT Engineer | UI/UX Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center md:justify-start gap-4 mb-6"
        >
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#d4c8e3] to-[#cce2e9] text-[#3b2f4a] font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <MessageCircle size={18} /> Contact Me
          </button>

          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 border-2 border-[#c1b2d8] text-[#4a3e56] px-5 py-2.5 rounded-xl hover:bg-white/40 transition-all duration-300"
          >
            <Download size={18} /> Download CV
          </a>
        </motion.div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
          <ContactCard icon={<Phone size={16} />} text="0812-6927-8669" />
          <ContactCard
            icon={<Mail size={16} />}
            text="stevisianipar05@gmail.com"
          />
          <ContactCard icon={<Globe size={16} />} text="Indonesia" />
        </div>

        <div className="flex gap-5 mt-6 justify-center md:justify-start text-[#6a5c7c]">
          <SocialLink
            href="https://github.com/stevi-greis"
            icon={<Github size={22} />}
          />
          <SocialLink
            href="https://linkedin.com/in/stevi-greis-sianipar-345889346"
            icon={<Linkedin size={22} />}
          />
        </div>
      </div>
    </motion.section>
  );
}

/* ---------- About & Skills ---------- */
function AboutAndSkills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="max-w-6xl w-full px-6 mt-20 grid md:grid-cols-2 gap-12"
    >
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-[#3b2f4a] border-l-4 border-[#bcd4e6] pl-3">
          About Me
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[#4d4358] leading-relaxed tracking-wide text-justify"
        >
          I am a final-year Computer Technology student at Del Institute of
          Technology with a focus on Internet of Things (IoT), Cloud Computing,
          and Computer Networking. I am passionate about connecting web
          technologies with IoT systems to create seamless interactions between
          humans and technology. Experienced in front-end development, IoT
          integration, and modern UI/UX design, I strive to develop innovative
          and user-centered solutions.
          <br />
          <br />
          Beyond academics, I have been actively involved in campus
          organizations such as the Student Executive Board (BEM) and the Study
          Program Student Association, which have strengthened my communication,
          teamwork, and leadership skills.
        </motion.p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-[#3b2f4a] text-center md:text-left">
          Core Skills & Expertise
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <SkillCard title="Web Development" icon="💻" />
          <SkillCard title="IoT Systems" icon="🌐" />
          <SkillCard title="Smart Devices" icon="⚙️" />
          <SkillCard title="UI/UX Design" icon="🎨" />
          <SkillCard title="Prototyping" icon="🧩" />
          <SkillCard title="Data Visualization" icon="📊" />
        </div>
      </div>
    </motion.section>
  );
}

/* ---------- Organization Section ---------- */
function OrganizationSection() {
  const organizations = [
    {
      name: "Student Executive Board (BEM)",
      role: "Active Member",
      date: "2023 – Present",
      desc: "Involved in organizing student activities and fostering collaboration across study programs to enhance campus engagement and leadership culture.",
    },
    {
      name: "Computer Technology Student Association (HMTP KomTek)",
      role: "Coordinator of Technology Division",
      date: "2022 – 2023",
      desc: "Led IoT workshops and programming sessions, strengthening members’ technical capabilities and teamwork skills.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="max-w-6xl w-full px-6 mt-20"
    >
      <h2 className="text-2xl font-semibold mb-8 text-[#3b2f4a] border-l-4 border-[#bcd4e6] pl-3">
        Organizational Experience
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {organizations.map((org, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-[#3b2f4a] mb-1">
              {org.name}
            </h3>
            <p className="text-sm text-[#7a6f8a]">{org.role}</p>
            <p className="text-xs text-[#9a91a8] mb-3">{org.date}</p>
            <p className="text-[#4a3e56] text-justify text-sm leading-relaxed">
              {org.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/* ---------- Certifications Section ---------- */
function CertificationsSection() {
  const certificates = [
    {
      title: "Belajar Internet of Things (IoT)",
      platform: "Dicoding",
      date: "2024",
    },
    {
      title: "UI/UX Design Fundamentals",
      platform: "Coursera",
      date: "2023",
    },
    {
      title: "Embedded Systems with Arduino",
      platform: "Institut Teknologi Del",
      date: "2022",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="max-w-6xl w-full px-6 mt-20"
    >
      <h2 className="text-2xl font-semibold mb-8 text-[#3b2f4a] border-l-4 border-[#bcd4e6] pl-3">
        Certifications
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white/70 p-5 rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-[#3b2f4a] text-sm mb-1">
              {cert.title}
            </h3>
            <p className="text-xs text-[#7a6f8a]">{cert.platform}</p>
            <p className="text-xs text-[#9a91a8]">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/* ---------- Projects ---------- */
function ProjectsSection() {
  const projects = [
    {
      img: "/project1.jpg",
      title:
        "Prototype Development of Coffee Fermentation Monitoring and Control System Based on IoT",
      date: "Jan 2025 – Jun 2025",
      place: "Institut Teknologi Del",
      desc: "Developed an IoT-based coffee fermentation monitoring and control system to monitor and regulate temperature and pH automatically and in real time.",
      skills:
        "Internet of Things (IoT) · Sensor Integration · Embedded Systems (ESP32/Arduino) · Data Logging & Analysis · UI/UX Design",
    },
    {
      img: "/project2.jpg",
      title:
        "Smart Dispenser System with Ultrasonic Sensor and Precise Control Using Arduino",
      date: "Oct 2024 – Dec 2024",
      place: "Institut Teknologi Del",
      desc: "Designed and built an automatic dispenser system using ultrasonic sensors and DC pumps for accurate control and usability.",
      skills: "Embedded Systems · Automation · Sensor Integration",
    },
    {
      img: "/project3.jpg",
      title: "Website Coffee Shop IJABU",
      date: "Jan 2024 – May 2024",
      place: "Institut Teknologi Del",
      desc: "Developed a responsive coffee shop website using Laravel, PHP, CSS, and Bootstrap, providing menu display and online ordering features.",
      skills: "Web Development · Laravel · UI/UX Design",
      repo: "https://github.com/SteviSianipar05/Proyek_Akhir_I.git",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="max-w-6xl w-full px-6 mt-20 mb-10"
    >
      <h2 className="text-2xl font-semibold mb-8 text-[#3b2f4a] border-l-4 border-[#bcd4e6] pl-3">
        Projects & Creations
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={p.img}
              alt={p.title}
              width={600}
              height={350}
              className="rounded-xl mb-4 shadow-sm"
            />
            <h3 className="font-bold text-lg text-[#3b2f4a] mb-1">{p.title}</h3>
            <p className="text-sm text-[#7a6f8a] mb-1">{p.date}</p>
            <p className="text-xs text-[#9a91a8] mb-3">{p.place}</p>
            <p className="text-[#4a3e56] text-justify mb-4 leading-relaxed text-sm">
              {p.desc}
            </p>
            <p className="text-sm text-[#6a5c7c] font-medium italic mb-3">
              {p.skills}
            </p>

            {/* Tambahan Repo GitHub */}
            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#3b2f4a] font-semibold hover:text-[#5a4a6e] hover:underline transition"
              >
                <Github size={18} />
                View Repository
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/* ---------- Helper Components ---------- */
function ContactCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-xl shadow-sm hover:bg-white transition">
      {icon}
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#3b2f4a] hover:scale-110 transition-transform duration-300"
    >
      {icon}
    </a>
  );
}

function SkillCard({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="flex flex-col items-center bg-white/60 rounded-xl py-4 shadow-md hover:shadow-lg transition hover:scale-105">
      <span className="text-2xl mb-2">{icon}</span>
      <p className="text-sm font-medium text-[#4a3e56]">{title}</p>
    </div>
  );
}
