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
    <section>
      <h3>Projects</h3>

      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  );
}

export default Projects;