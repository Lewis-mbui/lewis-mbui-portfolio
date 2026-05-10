import skills from "../data/skills"
import SkillDescription from "./SkillDescription"

const SkillsSection = () => {
  return (
    <section className="skills">
      <div className="skills__wrapper wrapper">
        <ul className="skills__list" role="list">
          {skills.map(s => <SkillDescription key={s.id} title={s.title} period={s.period} />)}
        </ul>
      </div>
    </section>
  )
}

export default SkillsSection