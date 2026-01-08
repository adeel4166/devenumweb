"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PortfolioCard from "@/components/PortfolioCard";

const previewProjects = [
  {
    title: "ASH MEDIA SOLUTIONS",
    image: "/portfolio/ashmedia.jpg",
    service: "web",
    description:
      "A modern music platform with smooth UI, animations and responsive layout.",
    demoLink: "https://ashmediasolutions1.vercel.app",
  },
  {
    title: "CHROMA PIGMENT AND DYESTUFF",
    image: "/portfolio/chromapigment.jpg",
    service: "web",
    description:
      "An eco-friendly business website focused on sustainability and clean design.",
    demoLink: "https://www.chromapigmentanddyestuff.com",
  },
];

export default function PortfolioPreview() {
  return (
    <section
      className="
        relative
        py-24
        bg-gradient-to-r
        from-[#FCEEFF]
        to-[#EEF5FF]
        overflow-hidden
      "
    >
      {/* SOFT BACKGROUND ACCENTS */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#FCEEFF] rounded-full blur-3xl opacity-70" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-[#EEF5FF] rounded-full blur-3xl opacity-70" />

      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-4xl font-bold text-center mb-14 text-gray-900"
      >
        Our Work
      </motion.h2>

      {/* PORTFOLIO GRID */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 px-6">
        {previewProjects.map((project, i) => (
          <PortfolioCard
            key={i}
            title={project.title}
            description={project.description}
            image={project.image}
            demoLink={project.demoLink}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="relative text-center mt-14">
        <Link
          href="/portfolio"
          className="
            inline-block
            rounded-xl
            bg-purple-600
            px-8 py-3
            text-white font-semibold
            hover:bg-purple-700
            transition
          "
        >
          View Full Portfolio
        </Link>
      </div>
    </section>
  );
}
