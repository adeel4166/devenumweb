"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  MessageCircle,
  Briefcase,
  Layers,
  User,
  DollarSign,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* LOGO */}
        <Link href="/" aria-label="Go to top">
          <img src="/logo/logo.png" alt="Devenum Logo" className="h-10" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 font-medium absolute left-1/2 -translate-x-1/2 text-gray-700">
          <li>
            <Link href="/#services" className="hover:text-purple-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="/#pricing" className="hover:text-purple-600">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/#about" className="hover:text-purple-600">
              About
            </Link>
          </li>

          <li>
            <Link
              href="/portfolio"
              className={`${
                pathname === "/portfolio"
                  ? "text-purple-600 font-semibold"
                  : "hover:text-purple-600"
              }`}
            >
              Portfolio
            </Link>
          </li>
        </ul>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex">
          <Link
            href="/#contact"
            className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:bg-purple-700 transition"
          >
            <MessageCircle size={18} />
            Let’s Talk
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-6 py-8 px-6 text-gray-700">
            <li>
              <Link
                href="/#services"
                onClick={() => setOpen(false)}
                className="flex gap-3"
              >
                <Briefcase size={18} className="text-purple-600" />
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/portfolio"
                onClick={() => setOpen(false)}
                className="flex gap-3 text-purple-600 font-semibold"
              >
                <Layers size={18} />
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                href="/#pricing"
                onClick={() => setOpen(false)}
                className="flex gap-3"
              >
                <DollarSign size={18} className="text-purple-600" />
                Pricing
              </Link>
            </li>

            <li>
              <Link
                href="/#about"
                onClick={() => setOpen(false)}
                className="flex gap-3"
              >
                <User size={18} className="text-purple-600" />
                About
              </Link>
            </li>

            <li className="pt-4">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="w-full flex justify-center gap-2 bg-purple-600 text-white py-3 rounded-xl font-semibold"
              >
                <MessageCircle size={18} />
                Let’s Talk
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
