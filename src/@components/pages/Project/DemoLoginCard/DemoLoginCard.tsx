"use client";

import { useState } from "react";

type DemoLoginCardProps = {
  email: string;
  password: string;
  liveUrl: string;
  adminUrl?: string;
};

const DemoLoginCard = ({ email, password, liveUrl, adminUrl }: DemoLoginCardProps) => {
  const [copiedField, setCopiedField] = useState<"email" | "password" | null>(
    null
  );

  const copyToClipboard = async (value: string, field: "email" | "password") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  const credentials = [
    {
      key: "email" as const,
      label: "Email Address",
      value: email,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      key: "password" as const,
      label: "Password",
      value: password,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative pt-4">
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-slate-950 shadow-lg shadow-emerald-500/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="h-3.5 w-3.5"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Free Login
        </span>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 via-[#0a1628] to-cyan-500/10 p-[1px] shadow-2xl shadow-emerald-950/40">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0a1220]/95 p-6 pt-8 backdrop-blur-xl">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />

        <div className="relative">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-6 w-6"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
                Live Demo
              </p>
              <h3 className="text-2xl font-black text-white">Demo Login</h3>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            Copy the credentials below and sign in to explore the full
            application — dashboard, orders, products & more.
          </p>

          <div className="mt-6 space-y-3">
            {credentials.map((item) => (
              <div
                key={item.key}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-emerald-400/30 hover:bg-emerald-500/5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
                      {item.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-1 truncate font-mono text-sm font-bold text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(item.value, item.key)}
                    className="flex shrink-0 items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-emerald-400/40 hover:bg-emerald-500/15 hover:text-emerald-200"
                  >
                    {copiedField === item.key ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="h-3.5 w-3.5 text-emerald-400"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-3.5 w-3.5"
                        >
                          <rect x="9" y="9" width="13" height="13" rx="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-dashed border-white/10 bg-black/20 px-4 py-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Demo URL
            </p>
            <p className="mt-1 truncate text-sm font-semibold text-cyan-300">
              {liveUrl.replace(/^https?:\/\//, "")}
            </p>
          </div>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-4 text-sm font-black text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:shadow-emerald-400/40"
          >
            Launch Live Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="h-4 w-4"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>

          {adminUrl && (
            <a
              href={adminUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-6 py-3.5 text-sm font-bold text-emerald-200 transition hover:bg-emerald-500/20 hover:text-white"
            >
              Open Admin Panel
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-4 w-4"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </a>
          )}

          <p className="mt-4 text-center text-xs text-slate-500">
            Read-only demo • No registration required
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DemoLoginCard;
