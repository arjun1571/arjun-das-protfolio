"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      delay: 0,
      mirror: false,
      disable: () => window.innerWidth < 768,
    });

    window.addEventListener("load", AOS.refresh);

    return () => {
      window.removeEventListener("load", AOS.refresh);
    };
  }, []);

  return <>{children}</>;
}