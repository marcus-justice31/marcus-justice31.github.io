import "../styles/Hero.css";

const Hero = ({ onViewProjects }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I’m <span className="highlight">Marcus Uy</span>
        </h1>
        <h2>Software Engineer Graduate</h2>

        <p>
          I build scalable, user-focused applications with strong foundations
          in software engineering principles.
        </p>

        <div className="hero-actions">
          <button
            className="btn primary"
            onClick={onViewProjects}
          >
            View Projects
          </button>

          <a
            href="/resume.html" // works cuz public is the root for static assets when deployed
            target="_blank"       // opens in a new tab
            rel="noopener noreferrer"
            className="btn secondary"
          >
            View Resume
          </a>

          <a
            href="https://github.com/marcus-justice31"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;