"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  Video,
  Megaphone,
  ShoppingCart,
  Layers,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        py-28 px-6
        bg-linear-to-r
        from-[#FCEEFF]
        to-[#EEF5FF]
        overflow-hidden
      "
    >
      {/* SOFT BACKGROUND BLOBS */}
      <div className="absolute -top-40 -left-40 w-[26.5px] h-[26.5px] bg-[#FCEEFF] rounded-full blur-3xl opacity-70" />
      <div className="absolute -bottom-40 -right-40 w-[26.5px] h-[26.5px] bg-[#EEF5FF] rounded-full blur-3xl opacity-70" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We are a digital agency helping businesses grow through scalable
            technology, strong branding, and result-driven digital solutions.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT — ABOUT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              About <span className="text-purple-600">Devenum</span>
            </h3>

            <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
              We combine technology, creativity, and strategy to build digital
              solutions that are reliable, scalable, and focused on long-term
              business success.
            </p>

            {/* Value Points */}
            <div className="space-y-6">
              {[
                {
                  icon: <Layers className="w-5 h-5" />,
                  title: "Scalable Solutions",
                  desc: "Technology that grows with your business.",
                },
                {
                  icon: <TrendingUp className="w-5 h-5" />,
                  title: "Growth Focused",
                  desc: "Every project is aligned with business outcomes.",
                },
                {
                  icon: <ShieldCheck className="w-5 h-5" />,
                  title: "Quality & Reliability",
                  desc: "Performance, security, and long-term stability.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg border border-purple-200 bg-white text-purple-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — SERVICES */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {[
              { title: "Web Application Development", icon: <Code2 /> },
              { title: "Mobile App Development", icon: <Smartphone /> },
              { title: "Graphic Design & Branding", icon: <Palette /> },
              { title: "Video Editing & Motion Graphics", icon: <Video /> },
              { title: "Social Media Marketing", icon: <Megaphone /> },
              { title: "Amazon & Daraz Store Management", icon: <ShoppingCart /> },
            ].map((service, i) => (
              <div
                key={i}
                className="
                  p-7 rounded-2xl
                  bg-white
                  border border-gray-200
                  hover:border-purple-500
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                  {service.icon}
                </div>

                <h4 className="text-gray-900 font-medium mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Professional solutions tailored for real business growth.
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
