"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { profile } from "@/lib/data/portfolio";

export default function MiniHeader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 120);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-4 right-4 bg-white/70 backdrop-blur-md border border-gray-200/40 rounded-full shadow-sm flex items-center gap-3 px-4 py-1.5 z-50"
    >
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <Image
          src={profile.profileImage}
          alt="Profile"
          width={40}
          height={40}
        />
      </div>

      <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Stevi Greis
      </span>

      <div className="flex items-center gap-2 text-gray-700">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaGithub size={17} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin size={17} />
        </a>
      </div>
    </motion.div>
  );
}
