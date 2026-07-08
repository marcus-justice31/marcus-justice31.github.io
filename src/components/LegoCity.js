import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import legoBuilds from "../data/legobuilds";
import "../styles/Legocity.css";

const CATEGORY_COLORS = {
  Downtown: "#e3000b",
  Harbor: "#0057a8",
  Vehicles: "#ffd500",
};
const DEFAULT_COLOR = "#38bdf8";

/**
 * Renders a single build's card: photo(s) + carousel, title, tag,
 * description, and an optional fun-fact toggle. Kept as its own
 * function (rather than inlined in the .map below) purely so each
 * card instance gets its own useState — carousel position and
 * fun-fact visibility shouldn't be shared across cards.
 */
function LegoBuildCard({ build }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFunFact, setShowFunFact] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images = build.images?.length ? build.images : [];
  const hasMultipleImages = images.length > 1;
  const tagColor = CATEGORY_COLORS[build.category] || DEFAULT_COLOR;

  const openLightbox = (e) => {
    e.stopPropagation();
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  // Close on Escape, and lock background scroll while open
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxOpen]);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="lego-card">
      <div className="lego-card-studs" style={{ "--stud-color": tagColor }} />

      <div className="lego-card-image-wrapper">
        {images.length > 0 && (
          <img
            src={images[currentImageIndex]}
            alt={`${build.title} ${currentImageIndex + 1}`}
            onClick={openLightbox}
            style={{ cursor: "zoom-in" }}
          />
        )}

        {hasMultipleImages && (
          <>
            <button
              className="lego-carousel-btn lego-carousel-btn--prev"
              onClick={prevImage}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              className="lego-carousel-btn lego-carousel-btn--next"
              onClick={nextImage}
              aria-label="Next photo"
            >
              ›
            </button>
            <div className="lego-carousel-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`lego-carousel-dot ${i === currentImageIndex ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(i);
                  }}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {build.pieceCount && (
          <div className="lego-piece-badge">{build.pieceCount.toLocaleString()} pcs</div>
        )}
      </div>

      <div className="lego-card-body">
        <div className="lego-card-heading">
          <h4>{build.title}</h4>
          {build.category && (
            <span className="lego-tag" style={{ "--tag-color": tagColor }}>
              {build.category}
            </span>
          )}
        </div>

        <p className="lego-description">{build.description}</p>

        {build.funFact && (
          <>
            <button
              className="lego-funfact-toggle"
              onClick={() => setShowFunFact((prev) => !prev)}
            >
              {showFunFact ? "Hide fun fact ▲" : "Fun fact ▼"}
            </button>
            {showFunFact && <p className="lego-funfact">{build.funFact}</p>}
          </>
        )}
      </div>

      {lightboxOpen &&
        createPortal(
          <div className="lego-lightbox-backdrop" onClick={closeLightbox}>
            <button
              className="lego-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              ×
            </button>

            <div
              className="lego-lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentImageIndex]}
                alt={`${build.title}, full size, ${currentImageIndex + 1}`}
                className="lego-lightbox-image"
              />

              {hasMultipleImages && (
                <>
                  <button
                    className="lego-carousel-btn lego-carousel-btn--prev lego-lightbox-btn"
                    onClick={prevImage}
                    aria-label="Previous photo"
                  >
                    ‹
                  </button>
                  <button
                    className="lego-carousel-btn lego-carousel-btn--next lego-lightbox-btn"
                    onClick={nextImage}
                    aria-label="Next photo"
                  >
                    ›
                  </button>
                  <div className="lego-carousel-dots lego-lightbox-dots">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        className={`lego-carousel-dot ${i === currentImageIndex ? "active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(i);
                        }}
                        aria-label={`Go to photo ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

const LegoCity = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} className="lego-city" id="lego-city">
      <div className="lego-city-header">
        <div className="lego-badge">
          <span className="lego-badge-dot" />
          My Favourite Hobby
        </div>

        <h2 className="lego-h2">
          My LEGO <span className="lego-h2-accent">City</span>
        </h2>

        <p className="lego-subtitle">
          When I'm not writing real code, I'm building a slightly less
          scalable city out of plastic bricks. Here's what's been built so far.
        </p>
      </div>

      <div className="lego-grid">
        {legoBuilds.map((build) => (
          <LegoBuildCard key={build.id} build={build} />
        ))}
      </div>
    </section>
  );
};

export default LegoCity;