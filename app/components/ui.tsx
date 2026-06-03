"use client";

import React from "react";
import { motion } from "framer-motion";

/* ---- Section Heading ---- */
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold mb-8 text-[#3b2f4a] border-l-4 border-[#bcd4e6] pl-3">
      {children}
    </h2>
  );
}

/* ---- Contact Card ---- */
export function ContactCard({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-xl shadow-sm hover:bg-white transition">
      {icon}
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

/* ---- Social Link ---- */
export function SocialLink({
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

/* ---- Card Wrapper (hover scale) ---- */
export function HoverCard({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className={`bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
