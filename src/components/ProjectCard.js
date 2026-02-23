import { useState } from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />

      <div className="project-content">
        <h4>{project.title}</h4>

        <p className="project-description">
          {project.description}
        </p>

        {/* Tags */}
        <div className="tags">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="tag"
              style={{
                backgroundColor: tag.color,
                color: "#fff",
              }}
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Toggle Button */}
        {project.details && (
          <button
            className="details-toggle"
            onClick={() => setShowDetails((prev) => !prev)}
          >
            {showDetails ? "Hide details ▲" : "Show details ▼"}
          </button>
        )}

        {/* Details */}
        {showDetails && (
          <ul className="project-details">
            {project.details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;