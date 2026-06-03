"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PDFViewerModal } from "@/app/components/PDFViewerModal";
import { SectionHeading } from "@/app/components/ui";
import { certificates } from "@/lib/data/portfolio";

export function CertificationsSection() {
  const [openPDF, setOpenPDF] = useState("");

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-6xl w-full px-6 mt-20"
      >
        <SectionHeading>Certifications</SectionHeading>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white/70 p-5 rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setOpenPDF(cert.file)}
            >
              <h3 className="font-bold text-[#3b2f4a] text-sm mb-1">{cert.title}</h3>
              <p className="text-xs text-[#7a6f8a]">{cert.platform}</p>
              <p className="text-xs text-[#9a91a8]">{cert.date}</p>
              <div className="mt-3 text-[10px] text-[#6a5c7c] italic">
                Click to view certificate →
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <PDFViewerModal file={openPDF} onClose={() => setOpenPDF("")} />
    </>
  );
}
