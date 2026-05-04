import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/@components/core/AOSProvider/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arjun-das-protfolio.vercel.app"),
  title: {
    default: "Arjun Chandra Das | Frontend Developer",
    template: "%s | Arjun Chandra Das",
  },
  description:
    "Portfolio of Arjun Chandra Das, a Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and modern web application development.",
  keywords: [
    "Arjun Chandra Das",
    "Arjun Das",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Tailwind CSS Developer",
    "JavaScript Developer",
    "Web Developer Bangladesh",
    "Portfolio Website",
  ],
  authors: [{ name: "Arjun Chandra Das" }],
  creator: "Arjun Chandra Das",
  publisher: "Arjun Chandra Das",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arjun Chandra Das | Frontend Developer",
    description:
      "Frontend Developer experienced in React, Next.js, TypeScript, Tailwind CSS, and scalable web application development.",
    url: "/",
    siteName: "Arjun Chandra Das Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arjun Chandra Das Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Chandra Das | Frontend Developer",
    description:
      "Frontend Developer skilled in React, Next.js, TypeScript, Tailwind CSS, and modern UI development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          min-h-screen
          antialiased
          bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_32%),linear-gradient(135deg,#020617_0%,#0f172a_45%,#111827_100%)]
          text-white
        `}
      >
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}