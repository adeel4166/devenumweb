"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        className="py-24 px-6 bg-white relative overflow-hidden"
      >
        {/* Background Accents */}
        <div className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-purple-100 opacity-60" />
        <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] rounded-full bg-indigo-100 opacity-60" />

        <div className="relative max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              About <span className="text-purple-600">Devenum</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Devenum is a modern digital solutions company delivering scalable
              software, creative design, and growth-driven digital services for
              startups and businesses.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Who We Are
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We combine technology, creativity, and strategy to build powerful
                digital experiences. From high-performance web and mobile apps
                to branding, video content, and e-commerce management — we help
                businesses grow with confidence.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our focus is on quality, scalability, and results that actually
                matter.
              </p>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                "Web Application Development",
                "Mobile App Development",
                "Graphic Designing & Branding",
                "Video Editing & Motion Graphics",
                "Social Media Handling & Marketing",
                "Amazon & Daraz Store Management",
              ].map((service, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-gray-200 hover:border-purple-500 transition"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {service}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Professional solutions tailored for real business growth.
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

     
    </>
  );
}
