"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Adeel Ahmad",
    role: "Project Manager",
    image: "/team/adeel1.jpeg",
  },
  {
    name: "Talha Naeem",
    role: "Full-Stack Developer",
    image: "/team/nauman.jpg",
  },
  {
    name: "Abdul Haseeb",
    role: "Mobile App Developer",
    image: "/team/hassan.jpg",
  },
  {
    name: "Umair Tahir",
    role: "UI / UX Designer",
    image: "/team/umair.jpeg",
  },
  {
    name: "Shehryar Khan",
    role: "Video Editor",
    image: "/team/shery.jpeg",
  },
  {
    name: "Shami Khan",
    role: "Digital Marketing Specialist",
    image: "/team/shami.jpeg",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white"
    >
      {/* Background blobs */}
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-purple-200/40 blur-3xl" />
      <div className="absolute bottom-0 -left-40 w-[460px] h-[460px] rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Meet Our <span className="text-purple-600">Expert Team</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Professionals behind our success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="
                group relative overflow-hidden rounded-3xl
                bg-white/80 backdrop-blur-xl
                border border-purple-100
                shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                hover:shadow-[0_35px_80px_rgba(139,92,246,0.25)]
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="
                    w-full h-full object-cover
                    grayscale-[40%] brightness-[0.95]
                    group-hover:grayscale-0 group-hover:brightness-100
                    scale-100 group-hover:scale-105
                    transition-all duration-700 ease-out
                  "
                />

                {/* Hover Overlay (soft) */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t from-purple-900/30 via-purple-500/10 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                " />
              </div>

              {/* Info */}
              <div className="relative p-6 text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-sm text-purple-600 font-medium">
                  {member.role}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="
                absolute bottom-0 left-1/2 -translate-x-1/2
                h-[3px] w-0 rounded-full
                bg-gradient-to-r from-purple-500 to-indigo-500
                group-hover:w-2/3
                transition-all duration-300
              " />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
