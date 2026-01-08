"use client";

import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // NEW STATES
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  // AUDIO REFS
  const successAudio = useRef<HTMLAudioElement | null>(null);
  const errorAudio = useRef<HTMLAudioElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!captcha) {
      setStatus("error");
      setStatusMessage("Please verify reCAPTCHA.");
      errorAudio.current?.play();
      return;
    }

    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;

    const payload = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement)
        .value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone,
      countryCode: "+" + phone.replace(/\D/g, "").slice(0, phone.length - 10),
      services,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      recaptchaToken: captcha,
    };

    const res = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      setStatus("success");
      setStatusMessage("Message sent successfully! We’ll contact you shortly.");
      successAudio.current?.play();

      form.reset();
      setServices([]);
      setPhone("");
      setCaptcha(null);
    } else {
      setStatus("error");
      setStatusMessage("Failed to send message. Please try again.");
      errorAudio.current?.play();
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-28 py-24 px-6 bg-linear-to-br from-purple-50 to-indigo-50"
    >
      {/* AUDIO */}
      <audio ref={successAudio} src="/sounds/success.mp3" preload="auto" />
      <audio ref={errorAudio} src="/sounds/error.mp3" preload="auto" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white rounded-[28px] shadow-xl p-10 md:p-14"
      >
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Need Any Help?
          </h2>
          <p className="text-gray-500">
            Tell us about your project and we’ll contact you shortly.
          </p>
        </div>

        {/* STATUS MESSAGE (INLINE) */}
        {status && (
          <div
            className={`mb-6 rounded-xl px-6 py-4 text-sm font-medium ${
              status === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {statusMessage}
          </div>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            name="firstName"
            placeholder="First Name"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            name="lastName"
            placeholder="Last Name"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Business Email"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <PhoneInput
            country="us"
            value={phone}
            onChange={setPhone}
            enableSearch
            inputStyle={{
              width: "100%",
              height: "48px",
              borderRadius: "12px",
              border: "1px solid #d1d5db",
              fontSize: "14px",
            }}
            buttonStyle={{
              borderRadius: "12px 0 0 12px",
              border: "1px solid #d1d5db",
            }}
          />

          {/* SERVICES */}
          <div className="md:col-span-2">
            <p className="font-semibold text-gray-900 mb-3">
              Services you are looking for
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Web Development",
                "Mobile App Development",
                "Graphic Design",
                "Video Editing",
                "UI / UX Design",
                "SEO & Marketing",
              ].map((s) => (
                <label
                  key={s}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-purple-600"
                    checked={services.includes(s)}
                    onChange={() =>
                      setServices((prev) =>
                        prev.includes(s)
                          ? prev.filter((x) => x !== s)
                          : [...prev, s]
                      )
                    }
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            className="md:col-span-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="md:col-span-2">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={(val: string | null) => setCaptcha(val)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
