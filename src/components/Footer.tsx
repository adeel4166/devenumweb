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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-50 border-t border-gray-200">
      {/* Gradient Accent */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                D
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Devenum
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              We build high-quality web & mobile applications, creative
              design, and growth-focused digital solutions for modern
              businesses.
            </p>

            {/* Social Icons (FINAL SET) */}
            <div className="flex items-center gap-3">
              {/* WhatsApp */}
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

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="p-3 rounded-full border border-gray-300 text-gray-600
                           hover:text-blue-600 hover:border-blue-600
                           hover:-translate-y-1 transition-all duration-300"
              >
                <Facebook size={18} />
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="p-3 rounded-full border border-gray-300 text-gray-600
                           hover:text-pink-600 hover:border-pink-600
                           hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter"
                className="p-3 rounded-full border border-gray-300 text-gray-600
                           hover:text-sky-500 hover:border-sky-500
                           hover:-translate-y-1 transition-all duration-300"
              >
                <Twitter size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-3 rounded-full border border-gray-300 text-gray-600
                           hover:text-blue-700 hover:border-blue-700
                           hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>

              {/* Email */}
              <a
                href="mailto:devenum01@gmail.com"
                aria-label="Email"
                className="p-3 rounded-full border border-gray-300 text-gray-600
                           hover:text-purple-600 hover:border-purple-600
                           hover:-translate-y-1 transition-all duration-300"
              >
                <Mail size={18} />
              </a>

              {/* Phone */}
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

          {/* Quick Links */}
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
                  Raiwind Road, Lahore <br />
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
