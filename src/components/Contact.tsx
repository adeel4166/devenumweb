"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* BACKGROUND BUBBLES */}
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#F3E8FF] opacity-70" />
      <div className="absolute top-1/3 -left-40 w-[460px] h-[460px] rounded-full bg-[#EEF2FF] opacity-70" />

      {/* DOT PATTERN (RIGHT SIDE) */}
      <div className="absolute top-1/2 right-16 grid grid-cols-4 gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="w-[5px] h-[5px] rounded-full bg-purple-400"
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto"
      >
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Need Any Help?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            There are many variations of passages of Lorem Ipsum available
            but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* FORM CARD */}
        <div
          className="
            bg-white
            border border-blue-100
            rounded-[28px]
            p-10 md:p-14
            shadow-[0_20px_40px_rgba(0,0,0,0.06)]
          "
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FIRST NAME */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-900">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full border border-blue-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* LAST NAME */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-900">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full border border-blue-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-900">
                Business Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-blue-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-900">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-blue-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* MESSAGE */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2 text-gray-900">
                What are you looking for?
              </label>
              <textarea
                rows={5}
                placeholder="Enter your message"
                className="w-full border border-blue-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* SUBMIT */}
            <div className="md:col-span-2 flex justify-center pt-4">
              <button
                type="button"
                className="
                  bg-purple-600 text-white
                  px-10 py-4 rounded-xl
                  font-semibold text-lg
                  transition hover:bg-purple-700
                "
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
