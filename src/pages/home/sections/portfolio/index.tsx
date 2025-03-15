"use client";

import { useState } from "react";

interface Project {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  details: string[];
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      image: "card-perfume.png",
      alt: "perfume-image",
      title: "Gabrielle Essence Eau De Parfum",
      description:
        "A premium fragrance retailer wanted a digital solution to help customers explore and personalize perfume recommendations.",
      details: [
        "I was responsible for developing both the front-end and back-end of the platform using Next.js, React.js, and Tailwind CSS, ensuring seamless integration with the client’s inventory and payment systems. I was responsible for developing both the front-end and back-end of the platform using Next.js, React.js, and Tailwind CSS, ensuring seamless integration with the client’s inventory and payment systems. I implemented advanced filtering algorithms for personalized recommendations and optimized performance through caching and lazy loading. These enhancements led to a 40% increase in user engagement post-launch, significantly improving user experience and efficiency.",
      ],
    },
    {
      id: 2,
      image: "card-htmlcss.png",
      alt: "htmlcss-image",
      title: "HTML & CSS Card",
      description:
        "A showcase of HTML & CSS projects demonstrating modern design principles and responsive layouts.",
      details: [
        "I was responsible for designing and developing a collection of projects showcasing modern design principles and responsive layouts using semantic HTML and advanced CSS techniques. I ensured full responsiveness across all devices and integrated smooth animations and transitions to enhance user experience. The projects received positive feedback for their design clarity and accessibility.",
      ],
    },
  ];

  const selectedProjectData =
    projects.find((p) => p.id === selectedProject) || null;

  return (
    <div className="portfolio-section" id="portfolio">
      <p className="portfolio-title">Portfolio</p>
      <div className="portfolio-group">
        {projects.map((project) => (
          <div
            key={project.id}
            className="portfolio-image-container group cursor-pointer"
            onClick={() =>
              setSelectedProject(
                selectedProject === project.id ? null : project.id
              )
            }
          >
            <img
              src={project.image}
              alt={project.alt}
              className="portfolio-image"
            />
            <div className="portfolio-overlay">{project.title}</div>
          </div>
        ))}
      </div>

      {selectedProjectData && (
        <div className="portfolio-details ">
          <p className="portfolio-card-title">{selectedProjectData.title}</p>
          <p className="portfolio-text-desc">
            {selectedProjectData.description}
          </p>
          <ul className="portfolio-text-list">
            {selectedProjectData.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
