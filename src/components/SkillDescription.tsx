interface Props {
  title: string;
  period: string;
}

const SkillDescription = ({ title, period }: Props) => {
  return (
    <li className="skill">
      <h2 className="heading-large">{title}</h2>
      <p>{period} of Experience</p>
    </li>
  )
}

export default SkillDescription