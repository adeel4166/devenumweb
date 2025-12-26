"use client";

import { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Briefcase,
  Layers,
  User,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // 🔹 Smooth scroll helper
  const scrollToId = (id?: string) => {
    setOpen(false);

    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/70 backdrop-blur-xl
        border-b border-black/5
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* LOGO (LEFT) */}
        <button
          onClick={() => scrollToId()}
          className="flex items-center"
          aria-label="Go to top"
        >
          <img
            src="/logo/logo.png"
            alt="Devenum Logo"
            className="h-10 w-auto cursor-pointer"
          />
        </button>

        {/* DESKTOP MENU (CENTER) */}
        <ul className="hidden md:flex gap-10 font-medium absolute left-1/2 -translate-x-1/2 text-gray-700">
          {[
            { name: "Services", id: "services" },
            { name: "Portfolio", id: "portfolio" },
            { name: "About", id: "about" },
          ].map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToId(item.id)}
                className="
                  relative group transition
                  hover:text-purple-600
                "
              >
                {item.name}
                <span
                  className="
                    absolute left-0 -bottom-1
                    w-0 h-[2px]
                    bg-purple-600
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </button>
            </li>
          ))}
        </ul>

        {/* RIGHT ACTIONS (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollToId("contact")}
            className="
              flex items-center gap-2
              bg-purple-600 text-white
              px-5 py-2.5 rounded-xl font-semibold
              shadow-[0_10px_40px_rgba(139,92,246,0.35)]
              transition-all duration-300
              hover:bg-purple-700 hover:scale-105
              active:scale-95
            "
          >
            <MessageCircle size={18} />
            Let’s Talk
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-black/5">
          <ul className="flex flex-col gap-6 py-8 px-6 font-medium text-gray-700">
            <li>
              <button
                onClick={() => scrollToId("services")}
                className="flex items-center gap-3"
              >
                <Briefcase size={18} className="text-purple-600" />
                Services
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToId("portfolio")}
                className="flex items-center gap-3"
              >
                <Layers size={18} className="text-purple-600" />
                Portfolio
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToId("about")}
                className="flex items-center gap-3"
              >
                <User size={18} className="text-purple-600" />
                About
              </button>
            </li>

            {/* CTA (MOBILE) */}
            <li className="pt-4">
              <button
                onClick={() => scrollToId("contact")}
                className="
                  w-full
                  flex items-center justify-center gap-2
                  bg-purple-600 text-white
                  py-3 rounded-xl font-semibold
                "
              >
                <MessageCircle size={18} />
                Let’s Talk
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
