"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          About Devenum
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Devenum is a digital solutions company focused on building
          high-quality web applications, user-centric designs and scalable
          software products.
        </p>
      </motion.div>
    </section>
  );
}
