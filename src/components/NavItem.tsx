interface Props {
  url: string;
  icon: string;
}

const NavItem = ({ url, icon }: Props) => {
  return (
    <li>
      <a href={url} target="_blank">
        <svg className="icon">
          <use href={icon}></use>
        </svg>
      </a>
    </li>
  )
}

export default NavItem