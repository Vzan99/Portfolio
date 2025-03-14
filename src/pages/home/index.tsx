import HeroView from "./sections/hero";
import AboutMe from "./sections/aboutme";
import Skills from "./sections/skills";
import Portfolio from "./sections/portfolio";
import Experience from "./sections/experience";
import Testimonial from "./sections/testimonial";
import ContactMe from "./sections/contactme";

export default function HomeView() {
  return (
    <>
      {/* Hero Section */}
      <div>
        <HeroView />
      </div>

      {/* About Me Section */}
      <div>
        <AboutMe />
      </div>

      {/* Skills Section */}
      <div>
        <Skills />
      </div>

      {/* Portfolio Section */}
      <div>
        <Portfolio />
      </div>

      {/* Experience Section */}
      <div>
        <Experience />
      </div>

      {/* Testimonial Section */}
      <div>
        <Testimonial />
      </div>

      {/* Contact Me Section */}
      <div>
        <ContactMe />
      </div>
    </>
  );
}
