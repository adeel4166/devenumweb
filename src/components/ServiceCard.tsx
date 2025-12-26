import { Check } from "lucide-react";

interface Props {
  title: string;
  desc: string;
}

export default function ServiceCard({ title, desc }: Props) {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-[28px]
        bg-white
        border border-purple-300
        p-10
        min-h-[460px]
        shadow-[0_10px_25px_rgba(0,0,0,0.06)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-purple-600
        hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)]
      "
    >
      {/* DOT PATTERN — TOP CENTER (REFERENCE STYLE) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 grid grid-cols-5 gap-[6px]">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="w-[6px] h-[6px] rounded-full bg-purple-300"
          />
        ))}
      </div>

      {/* SOFT SMALL BUBBLE — TOP RIGHT */}
      <div
        className="
          absolute
          -top-24 -right-24
          w-[300px] h-[300px]
          rounded-full
          bg-[#F3E8FF]
          opacity-60
        "
      />

      {/* SOFT SMALL BUBBLE — BOTTOM LEFT */}
      <div
        className="
          absolute
          -bottom-28 -left-28
          w-[320px] h-[320px]
          rounded-full
          bg-[#EEF2FF]
          opacity-60
        "
      />

      {/* CONTENT */}
      <div className="relative">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>

        <p className="text-gray-600 mb-10 leading-relaxed">
          {desc}
        </p>

        {/* FEATURES */}
        <ul className="space-y-4 text-gray-700 mb-12">
          <li className="flex items-center gap-3">
            <Check size={18} className="text-purple-600" />
            Premium quality
          </li>
          <li className="flex items-center gap-3">
            <Check size={18} className="text-purple-600" />
            Scalable solution
          </li>
          <li className="flex items-center gap-3">
            <Check size={18} className="text-purple-600" />
            Support included
          </li>
        </ul>

        {/* CTA */}
        <button
          className="
            w-full
            bg-purple-600 text-white
            py-4 rounded-xl
            font-semibold text-lg
            transition hover:bg-purple-700
          "
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
