"use client";

import Image from "next/image";
import { Mail, Phone, Globe, Download, MessageCircle, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { ContactCard, SocialLink } from "@/app/components/ui";
import { profile } from "@/lib/data/portfolio";

export function HeaderSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl w-full px-6 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* Profile Photo */}
      <div className="flex justify-center md:w-1/3 relative">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="rounded-full bg-gradient-to-br from-[#d4c8e3] to-[#cce2e9] p-2 shadow-xl"
        >
          <Image
            src={profile.profileImage}
            alt="Profile"
            width={220}
            height={220}
            className="rounded-full object-cover border-4 border-white shadow-lg"
          />
        </motion.div>
      </div>

      {/* Info */}
      <div className="md:w-2/3 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#3b2f4a] drop-shadow-md mb-2"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-[#6a5c7c] mb-6"
        >
          {profile.title}
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
            href={profile.cvPath}
            download
            className="flex items-center gap-2 border-2 border-[#c1b2d8] text-[#4a3e56] px-5 py-2.5 rounded-xl hover:bg-white/40 transition-all duration-300"
          >
            <Download size={18} /> Download CV
          </a>
        </motion.div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
          <ContactCard icon={<Phone size={16} />} text={profile.phone} />
          <ContactCard icon={<Mail size={16} />} text={profile.email} />
          <ContactCard icon={<Globe size={16} />} text={profile.location} />
        </div>

        {/* Social Links */}
        <div className="flex gap-5 mt-6 justify-center md:justify-start text-[#6a5c7c]">
          <SocialLink href={profile.github} icon={<Github size={22} />} />
          <SocialLink href={profile.linkedin} icon={<Linkedin size={22} />} />
        </div>
      </div>
    </motion.section>
  );
}
