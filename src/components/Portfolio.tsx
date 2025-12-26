"use client";

import { motion } from "framer-motion";

const projects = [
  "E-commerce Platform",
  "Business Website",
  "Mobile App UI",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-24 bg-white/40">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900"
      >
        Our Portfolio
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {projects.map((title, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-white/90 border border-black/5 rounded-2xl p-6 backdrop-blur-xl shadow-lg transition hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(139,92,246,0.25)]"
          >
            <div className="h-40 bg-purple-100 rounded-xl mb-4" />
            <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm">
              High quality digital solution.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
