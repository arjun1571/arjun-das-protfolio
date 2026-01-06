"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ix4963r",
        "template_84d5uia",
        form.current,
        "e0EOVApd2SACK6J81"
      )
      .then(() => {
        alert("Message sent successfully 🤍");
        form.current?.reset();
      })
      .catch(() => {
        alert("Failed to send message ❌");
      });
  };

  return (
    <section className=" flex items-center justify-center px-3 ">
      <div className="w-full  grid md:grid-cols-2 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
        {/* LEFT CONTENT */}
        <div className="p-10 md:p-14 flex flex-col justify-center bg-gray-200 from-white to-gray-50">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Let’s build something <span className="text-gray-500">smart</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Have an idea, a project, or just want to say hello? Send a message
            and I’ll reply soon.
          </p>
        </div>

        {/* FORM */}
        <div className="p-10 md:p-14 bg-white">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="User_name"
                required
                placeholder="John Doe"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="User_email"
                required
                placeholder="john@email.com"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gray-900 py-3 text-white font-semibold tracking-wide transition hover:bg-gray-800 active:scale-95 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
