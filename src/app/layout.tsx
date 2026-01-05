import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arjun Chandra Das | Frontend Developer",
  description:
    "Arjun Chandra Das is a Frontend Developer specializing in React, Next.js, and modern web technologies. Building scalable and user-friendly web applications.",
  keywords: [
    "Arjun Chandra Das",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Arjun Chandra Das" }],
  creator: "Arjun Chandra Das",
  openGraph: {
    title: "Arjun Chandra Das | Frontend Developer",
    description:
      "Frontend Developer with experience in React, Next.js, Tailwind CSS, and SaaS products.",
    url: "https://your-portfolio-link.com",
    siteName: "Arjun Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arjun Chandra Das Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Chandra Das | Frontend Developer",
    description:
      "Frontend Developer skilled in React, Next.js, and modern UI development.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
