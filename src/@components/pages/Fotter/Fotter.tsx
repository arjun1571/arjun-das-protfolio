"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-300 mt-20 rounded-xl">
      <div className="flex justify-center gap-2 pt-8  pb-4">
        <a
          href="https://www.facebook.com/profile.php?id=100027943727580"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FontAwesomeIcon
            icon={faSquareFacebook}
            size="2x"
            className="w-20 h-20 hover:text-primary transition"
          />
        </a>

        <a
          href="https://github.com/arjun1571"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon
            icon={faSquareGithub}
            size="2x"
            className="w-20 h-20 hover:text-primary transition"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/arjundasbd/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="w-20 h-20 hover:text-primary transition"
          />
        </a>
      </div>

      <p className="text-center pb-6 text-sm opacity-70">
        © 2026 – All rights reserved by{" "}
        <span className="font-semibold">Arjun Chandra Das</span>
      </p>
    </footer>
  );
};

export default Footer;
