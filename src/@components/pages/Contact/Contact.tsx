"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_ix4963r",
        "template_84d5uia",
        form.current,
        "e0EOVApd2SACK6J81"
      );

      alert("Message sent successfully 🤍");
      form.current.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="my-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 px-5 py-16 text-white md:px-10 lg:py-20">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl md:grid-cols-2">
          <div className="flex flex-col justify-center border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-14">
            <span className="mb-5 inline-flex w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-200 backdrop-blur">
              📩 Contact Me
            </span>

            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Let’s build something{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                smart
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-300 md:text-lg">
              Have an idea, a project, or just want to say hello? Send a message
              and I’ll reply soon.
            </p>

            <div className="mt-8 space-y-4 text-sm text-gray-300">
              <p className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                💼 Frontend Developer
              </p>
              <p className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                ⚡ React • Next.js • TypeScript
              </p>
            </div>
          </div>

          <div className="p-8 md:p-14">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-200">
                  Your Name
                </label>
                <input
                  type="text"
                  name="User_name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  name="User_email"
                  required
                  placeholder="john@email.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-200">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-xl bg-blue-600 py-3 font-bold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-500 active:scale-95 ${loading ? "cursor-not-allowed opacity-70" : "cursor-pointer"
                  }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;