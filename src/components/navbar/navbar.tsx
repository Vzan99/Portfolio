"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/">
        <img className="mylogo" src="logo-p2.png" alt="logo-p" />
      </Link>
      <div className="navbar-links-group">
        <button
          onClick={() => scrollToSection("about")}
          className="navbar-button"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("portfolio")}
          className="navbar-button"
        >
          Portfolio
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="navbar-button"
        >
          Contact
        </button>
      </div>
    </div>
  );
}
