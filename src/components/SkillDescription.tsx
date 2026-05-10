interface Props {
  title: string;
  period: number;
}

const SkillDescription = ({ title, period }: Props) => {
  return (
    <li className="skill">
      <h2 className="heading-large">{title}</h2>
      <p>{period} Years of Experience</p>
    </li>
  )
}

export default SkillDescription