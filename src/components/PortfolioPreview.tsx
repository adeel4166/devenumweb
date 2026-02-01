"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PortfolioCard from "@/components/PortfolioCard";

const previewProjects = [
  {
    title: "ASH MEDIA SOLUTIONS",
    image: "/portfolio/ashmedia.jpg",
    service: "web",
    framework:
      "Next JS",
    demoLink: "https://ashmediasolutions1.vercel.app",
  },
  {
    title: "CHROMA PIGMENT AND DYESTUFF",
    image: "/portfolio/chromapigment.jpg",
    service: "web",
    framework:
      "Next JS",
    demoLink: "https://www.chromapigmentanddyestuff.com",
  },
   {
    title: "Edlink Education & Visa Services",
    image: "/portfolio/edlink.png",
    service: "web",
    framework: 'Wordpress',
    description:
      "Designed and developed the EdLink Education & Visa Services website using WordPress, focusing on responsiveness, SEO, and a clear user journey. The site highlights global study abroad consulting, visa support, and scholarship services to help students pursue opportunities overseas.",
    demoLink: "https://edlink.com.au/",
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
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {previewProjects.map((project, i) => (
          <PortfolioCard
            key={i}
            title={project.title}
            framework={project.framework}
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
