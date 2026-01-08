import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      className="
        relative overflow-hidden
        bg-gradient-to-r
        from-[#FCEEFF]
        to-[#EEF5FF]
        border-t border-gray-200
      "
    >
      {/* Gradient Accent */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 pointer-events-none" />

      {/* Soft background blobs (FIXED) */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#FCEEFF] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-[#EEF5FF] rounded-full blur-3xl opacity-70 pointer-events-none" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo/logo.png"
                alt="Devenum Logo"
                className="h-10 w-auto"
              />
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              We build high-quality web & mobile applications, creative design,
              and growth-focused digital solutions for modern businesses.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/923064166107"
                target="_blank"
                aria-label="WhatsApp"
                className="p-3 rounded-full border border-gray-300 text-gray-600
                           hover:text-green-600 hover:border-green-600
                           hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="https://www.facebook.com/share/1AfUfhnHVA/"
                aria-label="Facebook"
                className="p-3 rounded-full border border-gray-300 text-gray-600
                           hover:text-blue-600 hover:border-blue-600
                           hover:-translate-y-1 transition-all duration-300"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/devenum01?igsh=MTZ2eWxqa2h2ejc2NQ=="
                aria-label="Instagram"
                className="p-3 rounded-full border border-gray-300 text-gray-600
                           hover:text-pink-600 hover:border-pink-600
                           hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="p-3 rounded-full border border-gray-300 text-gray-600
                           hover:text-sky-500 hover:border-sky-500
                           hover:-translate-y-1 transition-all duration-300"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/devenum/"
                aria-label="LinkedIn"
                className="p-3 rounded-full border border-gray-300 text-gray-600
                           hover:text-blue-700 hover:border-blue-700
                           hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.tiktok.com/@devenum01?_r=1&_t=ZS-92tsW01csYS"
                aria-label="TikTok"
                className="p-3 rounded-full border border-gray-300 text-gray-600
                           hover:text-black hover:border-black
                           hover:-translate-y-1 transition-all duration-300"
              >
                <SiTiktok size={18} />
              </a>

              {/* PHONE (NOW WORKING) */}
              <a
                href="tel:+923064166107"
                aria-label="Phone"
                className="p-3 rounded-full border border-gray-300 text-gray-600
                           hover:text-purple-600 hover:border-purple-600
                           hover:-translate-y-1 transition-all duration-300"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links (NOW WORKING) */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-600">
              {[
                { name: "Home", href: "#" },
                { name: "Services", href: "#services" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" },
                { name: "Portfolio", href: "#portfolio" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="inline-block hover:text-purple-600
                               hover:translate-x-1 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Contact
            </h4>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-purple-600 mt-1" />
                <span>
                  Chinar Bagh Society, Raiwind Road, Lahore <br />
                  Punjab, Pakistan
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-purple-600" />
                <span>devenum01@gmail.com</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-purple-600" />
                <span>+92 306 416 6107</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gray-200" />

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-700">Devenum</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
