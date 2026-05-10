interface Skill {
  id: string;
  title: string;
  period: number;
}

const skills: Skill[] = [
  {
    id: "html",
    title: "HTML",
    period: 4,
  },
  {
    id: "css",
    title: "CSS",
    period: 4,
  },
  {
    id: "javascript",
    title: "Javascript",
    period: 4,
  },
  {
    id: "typescript",
    title: "Typescript",
    period: 3,
  },
  {
    id: "react",
    title: "React",
    period: 3,
  },
];

export default skills;
