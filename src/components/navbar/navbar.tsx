"use client";

import Link from "next/link";
export default function NavBar() {
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
    <div className="navbar">
      <Link href="/">
        <img className="mylogo" src="logo-p2.png" alt="logo-p"></img>
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
      <div></div>
    </div>
  );
}
