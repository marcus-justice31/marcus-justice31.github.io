import "../styles/About.css";
import languages from "../data/languages";
import frameworks from "../data/frameworks";
import developerTools from "../data/developerTools";
import libraries from "../data/libraries";
import concepts from "../data/concepts";

const About = () => {
  const aboutData = {
    Languages: [...languages || []].sort(),
    Frameworks: [...frameworks || []].sort(),
    "Developer Tools": [...developerTools || []].sort(),
    Libraries: [...libraries || []].sort(),
    Concepts: [...concepts || []].sort(),
  };

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
        {Object.entries(aboutData).map(([category, items]) => (
          <div key={category}>
            <h4>{category}</h4>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;