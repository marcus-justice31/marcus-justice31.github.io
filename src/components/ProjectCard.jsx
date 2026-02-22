import { useState } from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ title, description, tags, github, banner, author }) {
  const maxVisibleTags = 4; // Number of tags shown initially
  const [showAll, setShowAll] = useState(false);

  // If showAll is true, show all tags; otherwise slice the first few
  const visibleTags = showAll ? tags : tags.slice(0, maxVisibleTags);
  const remainingCount = tags.length - maxVisibleTags;

  return (
    <article className="project-card">
      <img
        src={require(`../assets/banners/${banner}`)}
        alt={title}
        className="banner"
      />

      <section className="hero">
        <div className="tags">
          {visibleTags.map((tag, index) => (
            <span key={index} style={{ backgroundColor: tag.color }}>
              {tag.name}
            </span>
          ))}

          {tags.length > maxVisibleTags && (
            <button
              className="expand-tags"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "- Collapse" : `+${remainingCount} more`}
            </button>
          )}
        </div>

        <a href={github} target="_blank" rel="noopener noreferrer">
          <h1>{title}</h1>
        </a>

        <p>{description}</p>
      </section>

      <div className="author">
        <span>{author}</span>
      </div>
    </article>
  );
}

export default ProjectCard;