import "../styles/About.css";

const About = () => {
  return (
    <section className="about">
      <h3>About Me</h3>

      <p>
        Detail-oriented Software Engineering graduate with strong foundational knowledge in 
        data structures, algorithms, and object-oriented programming, 
        complemented by hands-on experience developing and deploying cloud-based systems.
      </p>

      <p>
        I enjoy building full-stack applications, working with APIs, and
        designing systems that are both user-friendly and reliable.
      </p>

      <div className="about-highlights">
        <div>
          <h4>Languages</h4>
          <ul>
            <li>Java</li>
            <li>C</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div>
          <h4>Frameworks</h4>
          <ul>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Node.js</li>
            <li>FastAPI</li>
            <li>Flask</li>
            <li>gRPC</li>
          </ul>
        </div>

        <div>
          <h4>Developer Tools</h4>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Azure</li>
            <li>Google Colab</li>
            <li>Microsoft 365</li>
            <li>RabbitMQ</li>
          </ul>
        </div>

        <div>
          <h4>Libraries</h4>
          <ul>
            <li>OpenCV</li>
            <li>Ultralytics YOLO (YOLOv8/YOLOv11)</li>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Scikit-learn</li>
            <li>MongoDB (NoSQL)</li>
            <li>MySQL</li>
            <li>Oracle SQL</li>
            <li>OpenAI API</li>
          </ul>
        </div>

        <div>
          <h4>Concepts</h4>
          <ul>
            <li>Object-Oriented Programming (OOP)</li>
            <li>Data Structures and Algorithms</li>
            <li>Distributed Systems</li>
            <li>RESTful API Design</li>
            <li>Multithreading</li>
            <li>Networking</li>
            <li>Operating Systems</li>
            <li>Machine Learning Fundamentals</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;