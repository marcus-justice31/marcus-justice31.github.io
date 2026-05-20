import { useState } from "react";
import "../styles/ProjectCard.css";
 
function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
  // Support both single `image` and multiple `images`
  const images = project.images?.length
    ? project.images
    : project.image
    ? [project.image]
    : [];
 
  const hasMultipleImages = images.length > 1;
 
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
 
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
 
  return (
    <div className="project-card">
      {/* Image Carousel */}
      <div className="project-image-wrapper">
        {images.length > 0 && (
          <img
            src={images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
          />
        )}
 
        {hasMultipleImages && (
          <>
            <button
              className="carousel-btn carousel-btn--prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="carousel-btn carousel-btn--next"
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>
 
            <div className="carousel-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === currentImageIndex ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(i);
                  }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
 
            <div className="carousel-counter">
              {currentImageIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
 
      <div className="project-content">
        <h4>{project.title}</h4>
 
        <p className="project-description">{project.description}</p>
 
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
 
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          View on GitHub →
        </a>
      </div>
    </div>
  );
}
 
export default ProjectCard;
 