interface Skill {
  id: string;
  title: string;
  period: number;
}

const skills: Skill[] = [
  {
    id: "html",
    title: "HTML",
    period: 2,
  },
  {
    id: "css",
    title: "CSS",
    period: 2,
  },
  {
    id: "javascript",
    title: "Javascript",
    period: 1.5,
  },
  {
    id: "typescript",
    title: "Typescript",
    period: 1,
  },
  {
    id: "react",
    title: "React",
    period: 1,
  },
];

export default skills;
