"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function MiniHeader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            fixed top-4 right-4
            bg-white/70 backdrop-blur-md
            border border-gray-200/40
            rounded-full shadow-sm
            flex items-center gap-3
            px-4 py-1.5 z-50
          "
        >
          {/* FOTO PROFIL MINI */}
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"  // ganti sesuai nama file kamu
              alt="Profile"
              width={40}
              height={40}
            />
          </div>

          {/* NAMA */}
          <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Stevi Greis
          </span>

          {/* IKON SOSIAL */}
          <div className="flex items-center gap-2 text-gray-700">
            <a href="#" className="hover:text-blue-600 transition">
              <FaGithub size={17} />
            </a>

            <a href="#" className="hover:text-blue-600 transition">
              <FaLinkedin size={17} />
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
