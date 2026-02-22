import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Marcus Uy</h1>
        <h2>Software Engineering Graduate</h2>
        <p>Detail-oriented Software Engineering graduate with strong foundational knowledge in data structures, algorithms, and object-oriented programming, complemented by hands-on experience developing and deploying cloud-based systems.</p>
      </header>

      <section>
        <h3>About Me</h3>
        <p>
          I am a Software Engineering graduate with a strong foundation in
          Java, Python, and web development. I enjoy building applications
          that solve real-world problems and continuously improving my skills.
        </p>
      </section>

      <section>
        <h3>Projects</h3>

        <div className="project">
          <h4>Meal Planning App</h4>
          <p>
            A React application that generates personalized meal plans based
            on user goals, using the OpenAI API.
          </p>
        </div>

        <div className="project">
          <h4>Peer-to-Peer File Sharing System</h4>
          <p>
            A distributed system using UDP and TCP that allows peers to
            register, discover, and download content.
          </p>
        </div>
      </section>

    </div>
  );
}

export default App;
