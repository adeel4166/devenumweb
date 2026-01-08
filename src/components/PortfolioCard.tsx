"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface Props {
  title: string;
  description: string;
  image?: string;
  video?: string;
  demoLink?: string;
}

export default function PortfolioCard({
  title,
  description,
  image,
  video,
  demoLink = "#",
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // smooth image scroll
  const smoothScroll = (down: boolean) => {
    const el = scrollRef.current;
    if (!el) return;

    const start = el.scrollTop;
    const end = down ? el.scrollHeight - el.clientHeight : 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      el.scrollTop = start + (end - start) * progress;
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <motion.div
      onMouseEnter={() => {
        smoothScroll(true);
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        smoothScroll(false);
        videoRef.current?.pause();
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        bg-white
        rounded-3xl
        border border-purple-100
        shadow-[0_16px_40px_rgba(0,0,0,0.08)]
        overflow-hidden
      "
    >
      {/* MEDIA */}
      {image && (
        <div
          ref={scrollRef}
          className="h-[280px] overflow-hidden"
        >
          <img
            src={image}
            alt={title}
            className="w-full object-cover"
          />
        </div>
      )}

      {video && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          className="w-full h-[280px] object-cover"
        />
      )}

      {/* CONTENT */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <a
          href={demoLink}
          target="_blank"
          className="
            inline-block
            rounded-full
            bg-gradient-to-r from-purple-500 to-indigo-500
            px-5 py-2
            text-white text-sm font-medium
            shadow-md
            transition
            hover:opacity-90
          "
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
}
