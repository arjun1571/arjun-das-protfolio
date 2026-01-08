"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const BannerIcon = () => {
  return (
    <div className="flex justify-center lg:justify-start gap-4">
      <a
        href="https://www.facebook.com/profile.php?id=100027943727580"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition"
      >
        <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
      </a>

      <a
        href="https://github.com/arjun1571"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-800 transition"
      >
        <FontAwesomeIcon icon={faSquareGithub} size="2x" />
      </a>

      <a
        href="https://www.linkedin.com/in/arjundasbd/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700 transition"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
};

export default BannerIcon;
