import { useState } from "react";
import projects from "./data/projects";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  const [activeTags, setActiveTags] = useState([]);

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
      <header className="hero">
        <h1>Marcus Uy</h1>
        <h2>Software Engineering Graduate</h2>
        <p>
          I build scalable, user-focused applications with strong foundations
          in software engineering principles.
        </p>
      </header>

      {/* About */}
      <section>
        <h3>About Me</h3>
        <p>
          Software Engineering graduate with experience in full-stack
          development, distributed systems, and data-driven applications.
        </p>
      </section>

      <section>
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
      </section>

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
        <p>Email: marcus@example.com</p>
        <p>GitHub: github.com/marcus-justice31</p>
        <p>LinkedIn: linkedin.com/in/marcusuy</p>
      </section>
    </div>
  );
}

export default App;
