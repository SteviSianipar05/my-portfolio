"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PDFViewerModalProps {
  file: string;
  onClose: () => void;
}

/* ---------- Certifications Section ---------- */
function PDFViewerModal({ file, onClose }: PDFViewerModalProps) {
  if (!file) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl h-[80vh] overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-lg text-sm shadow-md hover:bg-red-600 transition"
        >
          Close
        </button>

        <iframe src={file} className="w-full h-full rounded-xl" />
      </div>
    </div>
  );
}

function CertificationsSection() {
  const [openPDF, setOpenPDF] = useState("");

  const certificates = [
    {
      title: "Student Leadership Program",
      platform: "Institut Teknologi Del",
      date: "Sep 2025",
      file: "/certs/Student-Leadership.pdf",
    },
    {
      title: "Intro to Data Analytics",
      platform: "RevoU",
      date: "Jul 2025",
      file: "/certs/RevoU.pdf",
    },
    {
      title: "Website Development: Back End",
      platform: "MySkill",
      date: "Jul 2025",
      file: "/certs/myskill.pdf",
    },

    /* ------------ HCIA CERTIFICATES (NEW) ------------ */
    {
      title: "HCIA-Security V4.0 Course",
      platform: "Huawei",
      date: "2025",
      file: "/certs/hcia-security.pdf",
    },
    {
      title: "HCIA-Cloud Computing V5.5 Course",
      platform: "Huawei",
      date: "2025",
      file: "/certs/hcia-cloud.pdf",
    },
    {
      title: "HCIA-Storage V5.0 Course",
      platform: "Huawei",
      date: "2024",
      file: "/certs/hcia-storage.pdf",
    },
    {
      title: "HCIA-Datacom V1.0 Course",
      platform: "Huawei",
      date: "2024",
      file: "/certs/hcia-datacom.pdf",
    },
  ];

  return (
    <>
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
              className="bg-white/70 p-5 rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setOpenPDF(cert.file)}
            >
              <h3 className="font-bold text-[#3b2f4a] text-sm mb-1">
                {cert.title}
              </h3>

              <p className="text-xs text-[#7a6f8a]">{cert.platform}</p>
              <p className="text-xs text-[#9a91a8]">{cert.date}</p>

              <div className="mt-3 text-[10px] text-[#6a5c7c] italic">
                Click to view certificate →
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PDF Viewer Modal */}
      <PDFViewerModal file={openPDF} onClose={() => setOpenPDF("")} />
    </>
  );
}

export default CertificationsSection;
