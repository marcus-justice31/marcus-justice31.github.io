import ProjectCard from "./ProjectCard";

function Projects({ projects, activeTags }) {
  const filteredProjects =
    activeTags.length === 0
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) =>
            activeTags.includes(tag.name)
          )
        );

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h3>Projects</h3>
        <p>A selection of applications and systems I’ve built.</p>
      </div>

      <div className="projects-list">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;