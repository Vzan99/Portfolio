"use client";
export default function HeroView() {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <p className="hero-text">Hello, I'm</p>
        <p className="hero-name">Prasetyo Aji Nugroho</p>
        <p className="hero-text">Full-Stack Web Developer</p>
        {/* <p className="description">
          Building scalable and high-performance web solutions for your business
          needs.
        </p> */}
        <button
          className="contact-btn"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            contactSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}
