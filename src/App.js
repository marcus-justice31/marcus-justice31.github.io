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
      {/* Hero */}
      <Hero 
        onViewProjects={() =>
            filterRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
        }
      />

      {/* About */}
      {/* <section>
        <h3>About Me</h3>
        <p>
          Software Engineering graduate with experience in full-stack
          development, distributed systems, and data-driven applications.
        </p>
      </section> */}
      <About />

      {/* <section ref={filterRef}>
        <h3>Filter by Technology</h3>

        <div className="tag-legend">
          {allTags.map((tag) => {
            const isActive = activeTags.includes(tag.name);

            return (
              <span
                key={tag.name}
                className={`tag legend-tag ${
                  isActive ? "active-tag" : ""
                }`}
                style={{
                  backgroundColor: tag.color,
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setActiveTags((prev) =>
                    prev.includes(tag.name)
                      ? prev.filter((t) => t !== tag.name)
                      : [...prev, tag.name]
                  )
                }
              >
                {tag.name}
              </span>
            );
          })}
        </div>

        {activeTags.length > 0 && (
          <p style={{ marginTop: "10px" }}>
            Filtering by: <strong>{activeTags.join(", ")}</strong>{" "}
            <button onClick={() => setActiveTags([])}>
              Clear
            </button>
          </p>
        )}
      </section> */}
      <TechFilter
        allTags={allTags}
        activeTags={activeTags}
        setActiveTags={setActiveTags}
        filterRef={filterRef}
      />
      

      {/* Projects */}
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
