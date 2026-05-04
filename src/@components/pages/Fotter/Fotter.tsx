"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 px-6 py-12 text-white">

        {/* Glow */}
        <div className="absolute -left-20 top-10 h-60 w-60 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute -right-20 bottom-10 h-60 w-60 bg-cyan-400/20 blur-3xl rounded-full" />

        <div className="relative z-10 flex flex-col items-center text-center gap-6">

          {/* Name / Branding */}
          <h2 className="text-2xl font-extrabold">
            Arjun Chandra Das
          </h2>

          <p className="text-gray-400 max-w-md text-sm leading-7">
            Frontend Developer specializing in React, Next.js & modern web technologies.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4">

            <a
              href="https://www.facebook.com/profile.php?id=100027943727580"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/10 backdrop-blur transition-all duration-300 group-hover:bg-blue-500 group-hover:scale-110">
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  className="text-lg text-white"
                />
              </div>
            </a>

            <a
              href="https://github.com/arjun1571"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/10 backdrop-blur transition-all duration-300 group-hover:bg-gray-800 group-hover:scale-110">
                <FontAwesomeIcon
                  icon={faSquareGithub}
                  className="text-lg text-white"
                />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/arjundasbd/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/10 backdrop-blur transition-all duration-300 group-hover:bg-cyan-500 group-hover:scale-110">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-lg text-white"
                />
              </div>
            </a>

          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mt-6" />

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2026 – All rights reserved by{" "}
            <span className="font-semibold text-white">
              Arjun Chandra Das
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;