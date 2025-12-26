import "./globals.css";
import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";

/* ================================
   SEO / METADATA
================================ */
export const metadata: Metadata = {
  title: {
    default: "Devenum — Building Premium Digital Products",
    template: "%s | Devenum",
  },
  description:
    "Devenum is a modern digital solutions company specializing in SaaS products, web apps, and high-performance digital experiences.",

  metadataBase: new URL("https://devenum.vercel.app"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devenum.vercel.app",
    title: "Devenum — Building Premium Digital Products",
    description:
      "Modern SaaS, web apps, and premium digital experiences crafted by Devenum.",
    siteName: "Devenum",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Devenum – Digital Products Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Devenum — Building Premium Digital Products",
    description:
      "Modern SaaS, web apps, and premium digital experiences crafted by Devenum.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

/* ================================
   ROOT LAYOUT (LIGHT MODE ONLY)
================================ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="
          min-h-screen
          bg-gradient-to-r
          from-[#FCEEFF]
          to-[#EEF5FF]
          text-gray-900
        "
      >
        {children}

        {/* Sticky WhatsApp Floating Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
