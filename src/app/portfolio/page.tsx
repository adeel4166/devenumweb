"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";

const services = [
  {
    key: "web",
    title: "Web Development",
    subtitle:
      "Modern, responsive and high-performance websites built for real businesses.",
  },
  {
    key: "video",
    title: "Video Editing",
    subtitle:
      "Professional video editing for promotions, brands and social media.",
  },
  {
    key: "design",
    title: "Graphic Designing",
    subtitle:
      "Creative visual designs that strengthen brand identity and engagement.",
  },
];

const PROJECTS = [
  {
    title: "ASH MEDIA SOLUTIONS",
    image: "/portfolio/ashmedia.jpg",
    service: "web",
    description:
      "A modern music platform with smooth UI, animations and responsive layout.",
    demoLink: "https://ashmediasolutions1.vercel.app",
  },
  {
    title: "CHROMA PIGMENT AND DYESTUFF",
    image: "/portfolio/chromapigment.jpg",
    service: "web",
    description:
      "An eco-friendly business website focused on sustainability and clean design.",
    demoLink: "https://www.chromapigmentanddyestuff.com",
  },
  {
    title: "ABDUL HASEEB PORTFOLIO",
    image: "/portfolio/abdul1.jpg",
    service: "web",
    description:
      "An eco-friendly business website focused on sustainability and clean design.",
    demoLink: "https://abduldeveloper.vercel.app",
  },
  {
    title: "Promo Video",
    video: "/portfolio/demo.mp4",
    service: "video",
    description:
      "High-quality promotional video with smooth playback and clean visuals.",
    demoLink: "https://example.com",
  },
  {
    title: "Brand Poster",
    image: "/portfolio/design.jpg",
    service: "design",
    description:
      "Creative graphic design for branding, marketing and social media.",
    demoLink: "https://example.com",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<any>(null);

  return (
    <main className="min-h-screen bg-linear-to-r from-[#FCEEFF] to-[#EEF5FF]">
      <Navbar />

      <section className="pt-40 pb-28 px-6">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-32 relative"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[26.25px] h-[26.25px] bg-purple-200/40 rounded-full blur-3xl -z-10" />

          <div className="inline-flex px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-6">
            ✨ Our Services Portfolio
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Delivering Digital Solutions
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore our work across different services — from web development
            to video editing and graphic design.
          </p>
        </motion.div>

        {/* ===== SERVICE WISE SECTIONS ===== */}
        {services.map((service) => (
          <section key={service.key} className="mb-32">
            {/* SECTION HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 text-lg">
                {service.subtitle}
              </p>
            </div>

            {/* CARDS */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
              {PROJECTS.filter(
                (p) => p.service === service.key
              ).map((project, i) => (
                <div
                  key={i}
                  onClick={() => setActive(project)}
                  className="cursor-pointer"
                >
                  <PortfolioCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    video={project.video}
                    demoLink={project.demoLink}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </section>

      {/* MODAL */}
      {active && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center px-6">
          <div className="relative bg-white rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl">
            <button
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 text-2xl font-bold"
            >
              ✕
            </button>

            {active.image && (
              <div className="h-[80vh] overflow-auto">
                <img src={active.image} className="w-full" />
              </div>
            )}

            {active.video && (
              <video
                src={active.video}
                autoPlay
                muted
                controls
                className="w-full h-[80vh] object-contain bg-black"
              />
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
