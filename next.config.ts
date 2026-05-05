import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
