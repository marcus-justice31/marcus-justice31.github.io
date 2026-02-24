import "../styles/TechFilter.css";

const TechFilter = ({ allTags, activeTags, setActiveTags, filterRef }) => {
  const toggleTag = (tagName) => {
    setActiveTags((prev) =>
      prev.includes(tagName)
        ? prev.filter((t) => t !== tagName)
        : [...prev, tagName]
    );
  };

  return (
    <section ref={filterRef} className="tech-filter">
      <h3 className="section-title">Projects</h3>
      <p className="section-subtitle">
        Filter by technology to explore my work
      </p>

      <div className="tag-legend">
        {allTags.map((tag) => {
          const isActive = activeTags.includes(tag.name);

          return (
            <button
              key={tag.name}
              className={`tag-chip ${isActive ? "active" : ""}`}
              style={{
                "--tag-color": tag.color,
              }}
              onClick={() => toggleTag(tag.name)}
            >
              {tag.name}
            </button>
          );
        })}
      </div>

      {activeTags.length > 0 && (
        <div className="filter-summary">
          <span>
            Filtering by <strong>{activeTags.join(", ")}</strong>
          </span>
          <button
            className="clear-btn"
            onClick={() => setActiveTags([])}
          >
            Clear
          </button>
        </div>
      )}
    </section>
  );
};

export default TechFilter;