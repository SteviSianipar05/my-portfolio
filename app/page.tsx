"use client";

import { HeaderSection } from "@/app/sections/HeaderSection";
import { AboutAndSkillsSection } from "@/app/sections/AboutAndSkillsSection";
import { OrganizationSection } from "@/app/sections/OrganizationSection";
import { CertificationsSection } from "@/app/sections/CertificationsSection";
import { ProjectsSection } from "@/app/sections/ProjectsSection";
import { profile } from "@/lib/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f5f7] via-[#eef3f7] to-[#f1f7f5] flex flex-col items-center py-16 text-[#343434]">
      <HeaderSection />
      <AboutAndSkillsSection />
      <OrganizationSection />
      <CertificationsSection />
      <ProjectsSection />
      <ImpactSection />
      <Footer />
    </main>
  );
}

function ImpactSection() {
  return (
    <section className="max-w-4xl w-full px-6 mt-20 text-center">
      <p className="text-sm text-[#4a425a] leading-relaxed">
        {profile.impactStatement}
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full py-6 mt-20 text-center text-xs text-[#6a5c7c]">
      <p>© 2025 Stevi Greis — Portfolio</p>
      <p className="mt-1">Built with Next.js & Tailwind CSS</p>
    </footer>
  );
}
