interface Props {
  image: {
    small: string;
    large: string;
  }
  title: string;
  skills: string[];
  projectUrl: string;
  codeUrl: string;
}

const ProjectCard = ({ image, title, skills, projectUrl, codeUrl }: Props) => {
  return (
    <li className="project">
      <picture>
        <source
          media="(min-width: 600px)"
          srcSet={image.large}
        />
        <img src={image.small} alt="" />
      </picture>
      <h3 className="project__title heading-medium">{title}</h3>
      <div className="project__skills">
        {skills.map(s => <p key={s} className="project__skill">{s}</p>)}
      </div>
      <div className="project__actions">
        <a href={projectUrl} className="link">View Projet</a>
        <a href={codeUrl} className="link">View Code</a>
      </div>
    </li>
  )
}

export default ProjectCard