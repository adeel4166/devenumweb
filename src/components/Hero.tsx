"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const keywords = ["Web", "Mobile", "Design", "Growth"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keywords.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Premium background glow */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-purple-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-indigo-300/30 rounded-full blur-3xl" />

      <div className="relative w-full max-w-6xl rounded-3xl bg-white/80 backdrop-blur-xl border border-black/5 p-10 md:p-20 text-center shadow-[0_0_160px_rgba(139,92,246,0.18)]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-5 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium"
        >
          Digital Solutions Company
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
        >
          Building{" "}
          <span className="relative inline-flex items-center justify-center min-w-[150px] text-purple-600">
            <AnimatePresence mode="wait">
              <motion.span
                key={keywords[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="inline-block"
              >
                {keywords[index]}
              </motion.span>
            </AnimatePresence>

            {/* Gradient underline */}
            <span className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-70" />
          </span>{" "}
          Products
          <br className="hidden md:block" />
          with <span className="text-purple-600">Devenum</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed mb-10"
        >
          We build high-performance web and mobile applications, creative
          design, video content, social media management, and Amazon & Daraz
          e-commerce solutions — all under one roof.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-purple-600 text-white font-semibold shadow-lg shadow-purple-500/30 hover:bg-purple-700 transition"
          >
            Start Your Project
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-xl border border-gray-300 text-gray-800 font-semibold hover:border-purple-500 hover:text-purple-600 transition"
          >
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
