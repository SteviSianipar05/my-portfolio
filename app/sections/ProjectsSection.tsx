"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { SectionHeading } from "@/app/components/ui";
import { projects } from "@/lib/data/portfolio";

export function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl w-full px-6 mt-20"
    >
      <SectionHeading>Projects & Creations</SectionHeading>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all"
          >
            {/* Image Slider */}
            <div className="h-40 w-full">
              <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                className="h-full"
              >
                {proj.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-52 w-full relative bg-white/80 rounded-b-none">
                      <Image
                        src={img}
                        alt={proj.title}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Text */}
            <div className="p-4">
              <h3 className="font-bold text-[#3b2f4a] text-sm mb-1">{proj.title}</h3>
              <p className="text-xs text-[#6a5c7c]">{proj.desc}</p>
              <p className="text-xs text-[#3b2f4a] mt-2 font-semibold">
                Impact:{" "}
                <span className="font-normal text-[#6a5c7c]">{proj.impact}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
