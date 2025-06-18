import { useState } from "react";
import AboutMe from "./About";
import Experience from "./Experience";
import MyProjects from "./Projects";
import MyResume from "./Resume";
import GetInTouch from "./GetInTouch";
import Certifications from "./Certifications";

export default function MainSections() {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavigation = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="main-sections bg-black min-h-screen py-10 flex justify-center">
      <div className="w-full max-w-4xl border border-white rounded-lg overflow-hidden shadow-lg bg-black">
        {/* Sticky navigation inside the container, no border */}
        <div className="sticky top-0 z-20 bg-black flex justify-center gap-4 py-6">
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
            Experiences
          </button>
          {/* <button
            className={`nav-button ${activeSection === "projects" ? "active" : ""}`}
            onClick={() => handleNavigation("projects")}
          >
            Projects
          </button> */}
          <button
            className={`nav-button ${activeSection === "certifications" ? "active" : ""}`}
            onClick={() => handleNavigation("certifications")}
          >
            Certifications
          </button>
          <button
            className={`nav-button ${activeSection === "resume" ? "active" : ""}`}
            onClick={() => handleNavigation("resume")}
          >
            Resume
          </button>
          <button
            className={`nav-button ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => handleNavigation("contact")}
          >
            Contact
          </button>
        </div>
        {/* Section content */}
        <div className="bg-black p-8">
          {activeSection === "about" && <AboutMe />}
          {activeSection === "experience" && <Experience />}
          {/* {activeSection === "projects" && <MyProjects />} */}
          {activeSection === "certifications" && <Certifications />}
          {activeSection === "resume" && <MyResume />}
          {activeSection === "contact" && <GetInTouch />}
        </div>
      </div>
    </div>
  );
}