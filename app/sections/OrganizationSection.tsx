"use client";

import { motion } from "framer-motion";
import { HoverCard, SectionHeading } from "@/app/components/ui";
import { organizations } from "@/lib/data/portfolio";

export function OrganizationSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="max-w-6xl w-full px-6 mt-20"
    >
      <SectionHeading>Organizational Experience</SectionHeading>
      <div className="grid md:grid-cols-2 gap-8">
        {organizations.map((org, i) => (
          <HoverCard key={i} className="p-6">
            <h3 className="text-lg font-bold text-[#3b2f4a] mb-1">{org.name}</h3>
            <p className="text-sm text-[#7a6f8a]">{org.role}</p>
            <p className="text-xs text-[#9a91a8] mb-3">{org.date}</p>
            <p className="text-[#4a3e56] text-justify text-sm leading-relaxed">
              {org.desc}
            </p>
          </HoverCard>
        ))}
      </div>
    </motion.section>
  );
}
