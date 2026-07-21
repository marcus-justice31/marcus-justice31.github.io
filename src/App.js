import { useState, useRef } from "react";
import projects from "./data/projects";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import About from "./components/About";
import TechFilter from "./components/TechFilter";
import Certifications from "./components/Certifications";
import LegoCity from "./components/LegoCity";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [activeTags, setActiveTags] = useState([]);

  const filterRef = useRef(null);
  const legoRef = useRef(null);
  const certRef = useRef(null);

  const allTags = Array.from(
    new Map(
      projects
        .flatMap((project) => project.tags)
        .map((tag) => [tag.name, tag])
    ).values()
  );
  return (
    <div className="container">
      <Hero 
        onViewProjects={() =>
            filterRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
        }
        onViewLego={() =>
            legoRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
        }
        onViewCertifications={() =>
            certRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
        }
      />

      <About />

      <TechFilter
        allTags={allTags}
        activeTags={activeTags}
        setActiveTags={setActiveTags}
        filterRef={filterRef}
      />
      
      <section>
        <Projects
          projects={projects}
          activeTags={activeTags}
        />
      </section>

      <Certifications sectionRef={certRef} />

      <LegoCity sectionRef={legoRef} />

      {/* Contact */}
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;