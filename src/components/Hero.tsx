"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-[80vh] md:h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-6xl rounded-3xl bg-white/80 backdrop-blur-xl border border-black/5 p-10 md:p-16 shadow-[0_0_120px_rgba(139,92,246,0.15)]">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-center leading-tight text-gray-900"
        >
          Building Digital Products with{" "}
          <span className="text-purple-600">Devenum</span>
        </motion.h1>
      </div>
    </section>
  );
}
