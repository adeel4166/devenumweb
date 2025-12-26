"use client";

import { motion } from "framer-motion";

/* =========================
   TYPES
========================= */

interface PricingPlan {
  name: string;
  price: string;
  tag: string;
  highlight: boolean;
  features: string[];
}

/* =========================
   PRICING DATA
========================= */

const devPlans: PricingPlan[] = [
  {
    name: "Web Starter",
    price: "$149",
    tag: "Best for Small Businesses",
    highlight: false,
    features: [
      "Business website (up to 5 pages)",
      "Responsive UI / UX design",
      "Basic SEO optimization",
      "Contact & inquiry forms",
      "1 month free support",
    ],
  },
  {
    name: "Web + Mobile Growth",
    price: "$399",
    tag: "Most Popular",
    highlight: true,
    features: [
      "Custom web application",
      "Cross-platform mobile app",
      "Advanced UI / UX design",
      "API & backend integration",
      "3 months priority support",
    ],
  },
  {
    name: "Enterprise Development",
    price: "$799",
    tag: "For Large Scale Products",
    highlight: false,
    features: [
      "Web + Mobile App (Full Stack)",
      "Admin dashboard",
      "Advanced security & scalability",
      "Performance optimization",
      "6 months premium support",
    ],
  },
];

const socialPlans: PricingPlan[] = [
  {
    name: "Social Starter",
    price: "$99",
    tag: "Brand Presence",
    highlight: false,
    features: [
      "2 social platforms",
      "12 posts per month",
      "Basic creatives",
      "Hashtag strategy",
      "Monthly report",
    ],
  },
  {
    name: "Social Growth",
    price: "$249",
    tag: "Most Popular",
    highlight: true,
    features: [
      "4 social platforms",
      "20 posts + reels",
      "Advanced creatives",
      "Audience engagement",
      "Ad campaign setup",
    ],
  },
  {
    name: "Social Authority",
    price: "$399",
    tag: "Full Social Management",
    highlight: false,
    features: [
      "All major platforms",
      "Daily posting & reels",
      "Professional video editing",
      "Growth & analytics reports",
      "Dedicated social manager",
    ],
  },
];

/* =========================
   COMPONENT
========================= */

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-28 px-6 bg-white overflow-hidden"
    >
      {/* Background bubbles */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-200/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-indigo-200/40 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Flexible pricing tailored for development projects and digital growth.
          </p>
        </div>

        <SectionTitle title="Web & Mobile Development" />
        <PricingGrid plans={devPlans} />

        <div className="mt-32">
          <SectionTitle title="Social Media Management" />
          <PricingGrid plans={socialPlans} />
        </div>
      </div>
    </section>
  );
}

/* =========================
   HELPERS
========================= */

function SectionTitle({ title }: { title: string }) {
  return (
    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-14 text-center">
      {title}
    </h3>
  );
}

function FeatureDot() {
  return (
    <span className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex-shrink-0" />
  );
}

function PricingGrid({ plans }: { plans: PricingPlan[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {plans.map((plan, i) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="relative"
        >
          {/* Badge */}
          {plan.highlight && (
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
              <span className="px-5 py-1.5 rounded-full bg-purple-600 text-white text-sm font-semibold shadow-md">
                Most Popular
              </span>
            </div>
          )}

          {/* Card */}
          <div
            className={`relative overflow-hidden rounded-[28px] p-10 bg-white border-2
            transition-all duration-300 hover:-translate-y-2
            hover:shadow-[0_40px_90px_rgba(139,92,246,0.22)]
            ${
              plan.highlight
                ? "border-purple-600 hover:border-purple-700"
                : "border-gray-200 hover:border-purple-400"
            }`}
          >
            {/* Inner bubbles */}
            <div className="absolute -top-32 -right-32 w-[360px] h-[360px] rounded-full bg-purple-100/70" />
            <div className="absolute -bottom-36 -left-36 w-[380px] h-[380px] rounded-full bg-indigo-100/70" />

            <div className="relative z-10">
              <h4 className="text-xl font-bold text-gray-900 mb-1">
                {plan.name}
              </h4>
              <p className="text-gray-500 mb-6">{plan.tag}</p>

              <div className="mb-8">
                <span className="text-4xl font-extrabold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500"> / package</span>
              </div>

              <ul className="space-y-4 mb-10 text-gray-700">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <FeatureDot />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/923064166107"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-4 rounded-xl font-semibold text-lg transition
                ${
                  plan.highlight
                    ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/30"
                    : "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                }`}
              >
                Get Started on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
