"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923064166107"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        bg-green-500 text-white
        px-5 py-3 rounded-full
        shadow-lg shadow-green-500/30
        transition-all duration-300
        hover:bg-green-600
        hover:-translate-y-1
        hover:shadow-xl hover:shadow-green-500/40
      "
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline font-medium">
        WhatsApp
      </span>
    </a>
  );
}
