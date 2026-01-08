"use client";

import { motion } from "framer-motion";

const leadership = [
  {
    name: "Adeel Ahmad",
    role: "Web & Mobile Developer",
    badge: "CEO",
    image: "/team/adeel1.jpeg",
    desc: "Leading projects with a focus on strategy, execution, and delivering scalable digital solutions that drive long-term business success.",
  },
];

const teamMembers = [
  {
    name: "Talha Naeem",
    role: "Creative Director",
    image: "/team/nauman.jpg",
  },
  {
    name: "Abdul Haseeb",
    role: "Game Developer",
    image: "/team/hassan.jpg",
  },
  {
    name: "Danish Khan",
    role: "Amazon Specialist",
    image: "/team/danish.jpeg",
  },
  {
    name: "Abubakar",
    role: "Tech lead",
    image: "/team/abubakr.jpeg",
  },
  {
    name: "Umair Tahir",
    role: "Video Editor",
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
      className="
        relative
        py-24 px-6
        bg-gradient-to-r
        from-[#FCEEFF]
        to-[#EEF5FF]
        overflow-hidden
      "
    >
      {/* SOFT BACKGROUND ACCENTS */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#FCEEFF] rounded-full blur-3xl opacity-70" />
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-[#EEF5FF] rounded-full blur-3xl opacity-70" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm tracking-[0.25em] text-purple-600 mb-4">
            OUR TEAM
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">
            Leadership & Team
          </h2>
          <p className="text-gray-600">
            Experienced professionals driving Devenum forward.
          </p>
        </motion.div>

        {/* 👑 LEADERSHIP */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-20"
        >
          {leadership.map((leader, i) => (
            <div
              key={i}
              className="
                w-full max-w-4xl
                flex flex-col sm:flex-row items-center
                gap-6 p-8
                rounded-3xl
                border border-purple-200
                bg-white/70
                backdrop-blur-sm
              "
            >
              {/* Avatar */}
              <img
                src={leader.image}
                alt={leader.name}
                className="
                  w-[88px] h-[88px]
                  rounded-full object-cover
                  border border-purple-200
                "
              />

              {/* Info */}
              <div className="text-center sm:text-left">
                {/* Name + Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <h3 className="text-xl font-medium text-gray-900">
                    {leader.name}
                  </h3>

                  <span
                    className="
                      inline-flex items-center
                      px-3 py-1
                      rounded-full
                      text-xs font-medium
                      bg-purple-600/10
                      text-purple-700
                    "
                  >
                    {leader.badge}
                  </span>
                </div>

                {/* Role */}
                <p className="text-purple-600 text-sm mt-1">
                  {leader.role}
                </p>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {leader.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 👥 TEAM GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="
                flex items-center gap-6
                p-6 rounded-2xl
                border border-gray-200
                bg-white
                hover:border-purple-500
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <img
                src={member.image}
                alt={member.name}
                className="
                  w-[72px] h-[72px]
                  rounded-full object-cover
                  border border-gray-200
                "
              />

              <div>
                <h4 className="text-lg font-medium text-gray-900 leading-tight">
                  {member.name}
                </h4>
                <p className="text-sm text-purple-600 mt-0.5">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
