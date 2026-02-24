import "../styles/About.css";

const About = () => {
  return (
    <section className="about">
      <h3>About Me</h3>

      <p>
        I’m a software engineering graduate with a strong foundation in
        JavaScript, Python, and modern web technologies.
      </p>

      <p>
        I enjoy building full-stack applications, working with APIs, and
        designing systems that are both user-friendly and technically sound.
      </p>

      <div className="about-highlights">
        <div>
          <h4>💻 Frontend</h4>
          <span>React, HTML, CSS</span>
        </div>
        <div>
          <h4>⚙️ Backend</h4>
          <span>Python, FastAPI, Flask</span>
        </div>
        <div>
          <h4>🧠 Data & AI</h4>
          <span>MongoDB, OpenAI API, YOLO</span>
        </div>
      </div>
    </section>
  );
};

export default About;