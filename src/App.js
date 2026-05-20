import { useState, useRef } from "react";
import projects from "./data/projects";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import About from "./components/About";
import TechFilter from "./components/TechFilter";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [activeTags, setActiveTags] = useState([]);

  const filterRef = useRef(null);

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

      {/* Contact */}
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
