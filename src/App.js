import { useState, useRef } from "react";
import projects from "./data/projects";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import About from "./components/About";
import TechFilter from "./components/TechFilter";
import "./App.css";

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
        <h3>Contact</h3>
        <p>Email: marcusjustice.uy@gmail.com</p>
        <p>GitHub: github.com/marcus-justice31</p>
        <p>LinkedIn: linkedin.com/in/marcus-uy</p>
      </section>
    </div>
  );
}

export default App;
