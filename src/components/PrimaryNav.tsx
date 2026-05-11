import navItems from "../data/nav-items"
import NavItem from "./NavItem"

const PrimaryNav = () => {
  return (
    <nav className="primary-nav--header | primary-nav flex">
      <a className="logo" href="/">
        <p>Lewismbui</p>
      </a>
      <ul className="nav__links | flex" role="list">
        {navItems.map(item => <NavItem key={item.id} url={item.url} icon={item.icon} />)}
      </ul>
    </nav>
  )
}

export default PrimaryNav