"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Web Development",
    desc: "Modern, fast and scalable websites using latest technologies.",
  },
  {
    title: "UI / UX Design",
    desc: "Clean, user-friendly and conversion focused designs.",
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications for Android & iOS.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
      >
        Our Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <ServiceCard title={item.title} desc={item.desc} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
