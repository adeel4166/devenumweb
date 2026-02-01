"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import Image from "next/image";

const services = [
  {
    key: "web",
    title: "Web Development",
    img: "/portfolio/web-development.png",
    subtitle:
      "Modern, responsive and high-performance websites built for real businesses.",
  },
  {
    key: "portal",
    title: "Admin Panels",
    img: "/portfolio/dashboard.png",
    subtitle:
      "Custom dashboards and admin systems for managing data efficiently.",
  },
  {
    key: "marketing",
    title: "Digital Marketing",
    img: "/portfolio/digital-marketing.png",
    subtitle:
      "SEO, ads and growth strategies to boost your online presence.",
  },
  {
    key: "design",
    title: "Graphic Designing",
    img: "/portfolio/vector.png",

    subtitle:
      "Creative visual designs that strengthen brand identity.",
  },
  {
    key: "video",
    title: "Video Editing",
    img: "/portfolio/video-editor.png",
    subtitle:
      "Professional video editing for promotions and social media.",
  },
];

const PROJECTS = [
  {
    title: "ASH MEDIA SOLUTIONS",
    image: "/portfolio/ashmedia.jpg",
    service: "web",
    framework: 'Next JS',
    description:
      "A modern music platform with smooth UI and responsive layout.",
    demoLink: "https://ashmediasolutions1.vercel.app",
  },
  {
    title: "HSE Experts & Consultancy",
    image: "/portfolio/hse-experts-consultancy.png",
    service: "web",
    framework: 'Next JS',
    description:
      "Designed and developed the HSE Experts & Consultancy website using Next.js, featuring a fast, SEO-friendly, and user-friendly interface. The platform showcases professional safety courses with online enrollment and secure payment for course fees.",
    demoLink: "https://www.hseexpertsconsultancy.com/",
  },
  {
    title: "Koheshifa",
    image: "/portfolio/koheshifa.png",
    service: "web",
    framework: 'Wordpress',
    description:
      "Designed and developed the Koh e Shifa website using WordPress, focusing on a fast, SEO‑friendly, and user‑centred experience. The site highlights health and wellness services with clear navigation and engaging content to attract and inform visitors.",
    demoLink: "https://koheshifa.pk/",
  },
  {
    title: "Techmatch Solutions",
    image: "/portfolio/techmatch-solutions.png",
    service: "web",
    framework: 'Wordpress',
    description:
      "Designed and developed the TechMatch Solution website using WordPress, focusing on a responsive, SEO-friendly, and intuitive user experience. The platform showcases IT services and solutions with easy navigation, engaging content, and clear call-to-actions.",
    demoLink: "https://techmatchsolution.com/",
  },
  {
    title: "Edlink Education & Visa Services",
    image: "/portfolio/edlink.png",
    service: "web",
    framework: 'Wordpress',
    description:
      "Designed and developed the EdLink Education & Visa Services website using WordPress, focusing on responsiveness, SEO, and a clear user journey. The site highlights global study abroad consulting, visa support, and scholarship services to help students pursue opportunities overseas.",
    demoLink: "https://edlink.com.au/",
  },
  {
    title: "CHROMA PIGMENT AND DYESTUFF",
    image: "/portfolio/chromapigment.jpg",
    service: "web",
    framework: 'Next JS',
    description:
      "An eco-friendly business website focused on sustainability.",
    demoLink: "https://www.chromapigmentanddyestuff.com",
  },
  {
    title: "ABDUL HASEEB PORTFOLIO",
    image: "/portfolio/abdul1.jpg",
    service: "web",
    framework: 'Next JS',
    description:
      "Personal developer portfolio with clean UI.",
    demoLink: "https://abduldeveloper.vercel.app",
  },
  {
    title: "Salman Marble Traders",
    image: "/portfolio/salman-marble-traders.png",
    service: "web",
    framework: 'Next JS',
    description:
      "Designed and developed the Salman Marble Traders website using Next.js, with a responsive, SEO-optimized structure and modern UI. The site showcases premium marble panels, tiles, and natural stone products, helping customers explore options and contact or inquire easily.",
    demoLink: "https://salmanmarbletraders.com/",
  },
  {
    title: "HSE Experts Admin Portal",
    image: "/portfolio/hse-portal.png",
    service: "portal",
    framework: 'React JS / Node JS',
    description:
      "Designed and developed a centralized Admin and Unit Admin portal to manage complete student records and operational data. The system allows admins to calculate monthly, yearly, and lifetime budgets, with full control and access managed by the main administrator.",
    demoLink: "#",
  },
  {
    title: "KBL Inventory Portal",
    image: "/portfolio/inventory.png",
    service: "portal",
    framework: 'React JS / Node JS',
    description:
      "Developed a role-based inventory management portal using React and Node.js. The system includes Admin, Product Manager, and Inventory Manager roles, where admins control the platform, product managers handle product data, and inventory managers manage inbound and outbound stock logging.",
    demoLink: "#",
  },
  {
    title: "LWMC Attendence Portal",
    image: "/portfolio/lwmc-portal.png",
    service: "portal",
    framework: 'React JS / Node JS',
    description:
      "Designed and developed a digital attendance management portal for LWMC to record and monitor staff attendance efficiently. The system enables admins to track daily attendance, manage employee records, and generate reports for operational and payroll support.",
    demoLink: "#",
  },
  {
    title: "Promo Video",
    video: "/portfolio/demo.mp4",
    service: "video",
    framework: 'Adobe Primemer Pro',
    description:
      "High-quality promotional video.",
    demoLink: "#",
  },
  {
    title: "Brand Poster",
    image: "/portfolio/design.jpg",
    service: "design",
    framework: 'Next JS',
    description:
      "Creative graphic design for branding.",
    demoLink: "#",
  },
];

export default function PortfolioPage() {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);


  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const activeTab = services[index].key;

  // START / RESTART INTERVAL
  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 20000);
  };

  // STOP INTERVAL
  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // INITIAL START
  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  // TAB CLICK
  const handleTabClick = (key: string) => {
    const newIndex = services.findIndex((s) => s.key === key);
    setIndex(newIndex);
    startInterval(); // 🔥 reset to full 10s
  };

  return (
    <main className="min-h-screen bg-linear-to-r from-[#FCEEFF] to-[#EEF5FF]">
      <Navbar />

      <section className="pt-40 pb-28 px-6">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-32"
        >
          <div className="inline-flex px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-6">
            ✨ Our Services Portfolio
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Delivering Digital Solutions
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore our work across different services.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto flex gap-10 flex-wrap lg:flex-nowrap">
          {/* TABS */}
          <div className="w-full md:w-[50%] mx-auto lg:w-[25%] lg:mx-0 static lg:sticky top-24 h-fit bg-white p-6 rounded-3xl shadow-lg">
            <div className="bg-purple-200 rounded-xl p-2">
              {services.map((service, i) => (
                <button
                  key={service.key}
                  onClick={() => handleTabClick(service.key)}
                  className={`relative w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition overflow-hidden
                  ${index === i
                      ? `bg-white shadow-lg active-button ${isPaused ? "paused" : ""}`
                      : "hover:bg-white/60"
                    }

                  `}
                >
                  <Image
                    src={service.img}
                    alt=""
                    width={20}
                    height={20}
                    className={index === i ? "" : "invert-50 "}
                  />
                  <span className="relative z-20">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CARDS (PAUSE ON HOVER) */}
          <div
            className="w-full lg:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-6"
            onMouseEnter={() => {
              stopInterval();
              setIsPaused(true);
            }}
            onMouseLeave={() => {
              startInterval();
              setIsPaused(false);
            }}
          >
            {PROJECTS.filter((p) => p.service === activeTab).map((project, i) => (
              <div
                key={i}
                onClick={() => setActiveProject(project)}
                className="cursor-pointer"
              >
                <PortfolioCard {...project} index={i} />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center px-6">
          <button
            onClick={() => setActiveProject(null)}
            className="absolute top-4 right-4 text-2xl font-bold text-white"
          >
            ✕
          </button>
          <div className="relative bg-white rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl">
            <div className="py-2 text-center bg-linear-to-r from-purple-500 to-indigo-500">
              <h3 className="text-lg text-white font-bold">
                {activeProject.title}
              </h3>
            </div>

            {activeProject.image && (
              <div className="h-[60vh] overflow-auto">
                <img src={activeProject.image} className="w-full" />
              </div>
            )}

            {activeProject.video && (
              <video
                src={activeProject.video}
                autoPlay
                muted
                controls
                className="w-full h-[60vh] object-contain bg-black"
              />
            )}

            <div className="pb-4">
              <p className="text-gray-600 text-sm p-[8_30] text-center">
                {activeProject.description}
              </p>
              {activeProject.demoLink !== "#" &&

                <a
                  href={activeProject.demoLink}
                  target="_blank"
                  className="rounded-full bg-linear-to-r from-purple-500 to-indigo-500 px-5 py-2 text-white text-sm font-medium block mx-auto w-fit"
                >
                  View Project
                </a>
              }
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
