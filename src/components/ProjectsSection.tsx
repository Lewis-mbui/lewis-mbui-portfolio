import projects from "../data/projects"
import ProjectCard from "./ProjectCard"

const ProjectsSection = () => {
  return (
    <section className="projects">
      <div className="projects__wrapper wrapper">
        <header className="projects__header | flex">
          <h2 className="heading-xl">Projects</h2>
          <a href="mailto: lewmugo14479@gmail.com" className="link">Contact me</a>
        </header>
        <ul className="projects__list | grid" role="list">
          {projects.map(p => <ProjectCard key={p.id} image={p.image} title={p.title} skills={p.skills} projectUrl={p.projectUrl} codeUrl={p.codeUrl} />)}
        </ul>
      </div>
    </section>
  )
}

export default ProjectsSection