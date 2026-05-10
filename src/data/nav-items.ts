interface NavItem {
  id: string;
  url: string;
  icon: string;
}

const navItems: NavItem[] = [
  {
    id: "github",
    url: "https://github.com/Lewis-mbui",
    icon: "/icons.svg#icon-github",
  },
  {
    id: "frontend-mentor",
    url: "https://www.frontendmentor.io/profile/Lewis-mbui",
    icon: "/icons.svg#icon-frontend-mentor",
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/lewis-mugo-143681250/",
    icon: "/icons.svg#icon-linkedin",
  },
];

export default navItems;
