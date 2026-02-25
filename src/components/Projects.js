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

      <div className="projects-list">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;