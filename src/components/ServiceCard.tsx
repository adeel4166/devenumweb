interface Props {
  title: string;
  desc: string;
  features: string[];
}

export default function ServiceCard({ title, desc, features }: Props) {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-[28px]
        bg-white
        border-2 border-purple-200
        p-10
        min-h-[460px]
        shadow-[0_12px_30px_rgba(0,0,0,0.06)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-purple-600
        hover:shadow-[0_28px_60px_rgba(139,92,246,0.18)]
      "
    >
      {/* Soft bubbles */}
      <div className="absolute -top-32 -right-32 w-[360px] h-[360px] rounded-full bg-purple-100/70" />
      <div className="absolute -bottom-36 -left-36 w-[380px] h-[380px] rounded-full bg-indigo-100/70" />

      <div className="relative flex flex-col h-full">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>

        <p className="text-gray-600 mb-8 leading-relaxed">
          {desc}
        </p>

        {/* FEATURES (Dynamic) */}
        <ul className="space-y-4 text-gray-700 mb-10">
          {features.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/923064166107"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-auto
            w-full
            text-center
            bg-purple-600 text-white
            py-4 rounded-xl
            font-semibold text-lg
            transition
            hover:bg-purple-700
            hover:shadow-lg hover:shadow-purple-500/30
          "
        >
          Let’s Get Started
        </a>
      </div>
    </div>
  );
}
