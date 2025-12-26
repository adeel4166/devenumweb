import type { Metadata } from "next";

export const siteConfig = {
  name: "Devenum",
  title: "Devenum — Building Premium Digital Products",
  description:
    "Devenum is a modern digital studio building SaaS products, web apps, and high-performance digital experiences.",
  url: "https://devenum.vercel.app", // will update after deploy
  ogImage: "/og.png",
};

export const seoMetadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: "%s | Devenum",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Devenum – Digital Products Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
  },
};
