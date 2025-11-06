"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold"
        >
          Hi, I'm <span className="text-blue-600">Stevi</span>
        </motion.h1>
        <p className="mt-4 text-lg max-w-lg">
          An IoT & Software Engineer passionate about smart systems, UI design,
          and embedded technology.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          View My Projects
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>
            I’m currently developing IoT-based systems such as coffee fermentation
            monitoring tools. I love combining hardware and software to create
            impactful technology.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "IoT Coffee Monitor", desc: "Smart fermentation system with sensors." },
              { title: "Campus Lost & Found", desc: "Microservices web app for campus lost items." },
              { title: "Smart Mail System", desc: "DNS-based mail routing between domains." },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-300 text-center">
        <p>© {new Date().getFullYear()} Stevi — All rights reserved.</p>
      </footer>
    </main>
  );
}
