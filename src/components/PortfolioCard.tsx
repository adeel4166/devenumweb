"use client";

import { useRef } from "react";

interface Props {
  title: string;
  framework: string;
  image?: string;
  video?: string;
  demoLink?: string;
  index?:number;
}

export default function PortfolioCard({
  title,
  framework,
  image,
  video,
  demoLink = "#",
  index =0
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 🔥 NEW: animation controller (this fixes speed issue)
  const animationRef = useRef<number | null>(null);

  // 🔥 FIXED smooth image scroll (now duration REALLY works)
  const smoothScroll = (down: boolean) => {
    const el = scrollRef.current;
    if (!el) return;

    // cancel any running animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const start = el.scrollTop;
    const end = down ? el.scrollHeight - el.clientHeight : 0;
    const duration = 2500; // ⏱️ CHANGE THIS to control speed
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      el.scrollTop = start + (end - start) * progress;

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <div
      onMouseEnter={() => {
        smoothScroll(true);
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        smoothScroll(false);
        videoRef.current?.pause();
      }}
      className="
        bg-white
        rounded-3xl
        border border-purple-100
        shadow-[0_16px_40px_rgba(0,0,0,0.08)]
        overflow-hidden
      "
      data-aos='flip-up'
       data-aos-delay={index * 200}
    >
      {/* MEDIA */}
      {image && (
        <div ref={scrollRef} className="h-50 overflow-hidden">
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
        <h3 className="text-lg font-semibold text-gray-900 ">
          {title}
        </h3>
        <div className="text-center text-[12px] text-gray-500  mb-[5]" >
          ({framework})
        </div>


        {demoLink !== "#" &&
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
        }

      </div>
    </div>
  );
}
