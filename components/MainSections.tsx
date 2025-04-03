import { useState } from "react";
import AboutMe from "./About";
import Experience from "./Experience";
import MyProjects from "./Projects";
import MyResume from "./Resume";
import GetInTouch from "./GetInTouch";

export default function MainSections() {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavigation = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="main-sections">
      {/* Navigation Buttons */}
      <div className="navigation-buttons flex justify-center gap-4 py-4 bg-black text-white sticky top-0 z-10">
        <button
          className={`nav-button ${activeSection === "about" ? "active" : ""}`}
          onClick={() => handleNavigation("about")}
        >
          About Me
        </button>
        <button
          className={`nav-button ${activeSection === "experience" ? "active" : ""}`}
          onClick={() => handleNavigation("experience")}
        >
          Experience
        </button>
        <button
          className={`nav-button ${activeSection === "projects" ? "active" : ""}`}
          onClick={() => handleNavigation("projects")}
        >
          My Projects
        </button>
        <button
          className={`nav-button ${activeSection === "resume" ? "active" : ""}`}
          onClick={() => handleNavigation("resume")}
        >
          My Resume
        </button>
      </div>

      {/* Sections Container */}
      <div className="sections-container relative overflow-hidden">
        <div
          className={`section ${activeSection === "about" ? "active" : ""}`}
          id="about"
        >
          <AboutMe />
        </div>
        <div
          className={`section ${activeSection === "experience" ? "active" : ""}`}
          id="experience"
        >
          <Experience />
        </div>
        <div
          className={`section ${activeSection === "projects" ? "active" : ""}`}
          id="projects"
        >
          <MyProjects />
        </div>
        <div
          className={`section ${activeSection === "resume" ? "active" : ""}`}
          id="resume"
        >
          <MyResume />
        </div>
      </div>

      {/* Get in Touch Section */}
      <div id="get-in-touch" className="section">
        <GetInTouch />
      </div>
    </div>
  );
}