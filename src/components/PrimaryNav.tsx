import navItems from "../data/nav-items"
import NavItem from "./NavItem"

const PrimaryNav = () => {
  return (
    <nav className="primary-nav">
      <a href="/">
        <p className="logo">lewismbui</p>
      </a>
      <ul className="nav__links" role="list">
        {navItems.map(item => <NavItem key={item.id} url={item.url} icon={item.icon} />)}
      </ul>
    </nav>
  )
}

export default PrimaryNav