"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const keywords = ["Web", "Mobile", "Design", "Growth"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % keywords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-violet-50 via-white to-indigo-50">
      {/* Soft glows */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-indigo-300/30 rounded-full blur-3xl" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Small label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-wide text-purple-600 mb-6"
          >
            DIGITAL AGENCY
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight"
          >
            Scale Your Business
            <br />
            with Expert{" "}
            <span className="relative inline-block min-w-[120px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={keywords[index]}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent"
                >
                  {keywords[index]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            Solutions
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-purple-600"
          >
            Innovate. Elevate. Dominate.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed"
          >
            We help growing businesses scale through modern technology,
            high-impact digital marketing, and reliable systems built for
            long-term success.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-purple-600 text-white text-sm shadow-md shadow-purple-600/30 hover:bg-purple-700 transition"
            >
              Let’s Talk
            </a>

            <a
              href="#services"
              className="px-8 py-3 rounded-lg border border-gray-300 text-gray-800 text-sm hover:border-purple-600 hover:text-purple-600 transition"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
