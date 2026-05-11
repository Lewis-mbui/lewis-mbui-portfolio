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
      <picture className="project__image">
        <source
          media="(min-width: 600px)"
          srcSet={image.large}
        />
        <img src={image.small} alt="" />
      </picture>
      <div className="project__text">
        <h3 className="project__title heading-medium">{title}</h3>
        <div className="project__skills | flex">
          {skills.map(s => <p key={s} className="project__skill">{s}</p>)}
        </div>
      </div>
      <div className="project__actions | flex">
        <a href={projectUrl} className="link">View Projet</a>
        <a href={codeUrl} className="link">View Code</a>
      </div>
    </li>
  )
}

export default ProjectCard