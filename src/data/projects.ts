interface Project {
  id: number;
  image: {
    small: string;
    large: string;
  };
  title: string;
  skills: string[];
  projectUrl: string;
  codeUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: {
      small: "/thumbnail-art-gallery-website-small.webp",
      large: "/thumbnail-art-gallery-website-large.webp",
    },
    title: "Art Gallery Website",
    skills: ["HTML", "CSS"],
    projectUrl: "https://fem-art-gallery-website-navy.vercel.app/",
    codeUrl: "https://github.com/Lewis-mbui/fem-art-gallery-website",
  },
  {
    id: 2,
    image: {
      small: "/thumbnail-weather-app-small.webp",
      large: "/thumbnail-weather-app-large.webp",
    },
    title: "Weather App",
    skills: ["HTML", "CSS", "Javascript"],
    projectUrl: "https://weather-app-vanilla-js-ivory.vercel.app/",
    codeUrl: "https://github.com/Lewis-mbui/weather-app-vanilla-js",
  },
  {
    id: 3,
    image: {
      small: "/thumbnail-amazon-clone-small.webp",
      large: "/thumbnail-amazon-clone-large.webp",
    },
    title: "Ecommerce Website",
    skills: ["HTML", "CSS", "Javascript"],
    projectUrl: "https://amazon-clone-project-lovat.vercel.app/",
    codeUrl: "https://github.com/Lewis-mbui/weather-app-vanilla-js",
  },
  {
    id: 4,
    image: {
      small: "/thumbnail-bmi-calculator-small.webp",
      large: "/thumbnail-bmi-calculator-large.webp",
    },
    title: "BMI Calculator",
    skills: ["TypeScript", "React"],
    projectUrl: "https://bmi-calculator-ochre-sigma.vercel.app/",
    codeUrl: "https://github.com/Lewis-mbui/bmi-calculator",
  },
  {
    id: 5,
    image: {
      small: "/thumbnail-desserts-shop-small.webp",
      large: "/thumbnail-desserts-shop-large.webp",
    },
    title: "Desserts Shop",
    skills: ["TypeScript", "React"],
    projectUrl: "https://desserts-shop-delta.vercel.app/",
    codeUrl: "https://github.com/Lewis-mbui/desserts-shop",
  },
  {
    id: 6,
    image: {
      small: "/thumbnail-game-hub-small.webp",
      large: "/thumbnail-game-hub-large.webp",
    },
    title: "Game Hub",
    skills: ["TypeScript", "React"],
    projectUrl: "https://game-hub-khaki-chi-47.vercel.app/",
    codeUrl: "https://github.com/Lewis-mbui/game-hub",
  },
];

export default projects;
