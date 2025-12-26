"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Web Application Development",
    desc: "High-performance, scalable and secure web applications built with modern technologies.",
    features: [
      "Custom web apps (React / Next.js)",
      "Fast & secure backend integration",
      "SEO & performance optimized",
    ],
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps for Android & iOS with smooth UI and reliable performance.",
    features: [
      "Android & iOS apps",
      "Flutter / React Native",
      "Smooth UI & app performance",
    ],
  },
  {
    title: "UI / UX & Graphic Design",
    desc: "Clean, user-focused designs that improve usability, engagement, and conversions.",
    features: [
      "UI / UX wireframes",
      "Branding & graphic design",
      "Conversion-focused layouts",
    ],
  },
  {
    title: "Video Editing & Motion Graphics",
    desc: "Professional video editing, reels, ads, and motion graphics for strong brand presence.",
    features: [
      "Reels & short videos",
      "Ads & promo videos",
      "Motion graphics & animations",
    ],
  },
  {
    title: "Social Media Management",
    desc: "Content creation, posting strategy, and growth-focused social media handling.",
    features: [
      "Content planning & posting",
      "Audience growth strategy",
      "Analytics & reporting",
    ],
  },
  {
    title: "Amazon & Daraz Management",
    desc: "Complete e-commerce solutions including product listing, optimization, and store growth.",
    features: [
      "Product listing & optimization",
      "Store management",
      "Sales & growth strategy",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 px-6 bg-gray-50 overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-purple-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-indigo-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            End-to-end digital services designed to help businesses grow and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <ServiceCard
                title={item.title}
                desc={item.desc}
                features={item.features}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
