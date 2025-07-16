import { NavLink } from "react-router"

const NavBar = () => {
  return (
    <nav>
      <p>LOGO</p>
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}
export default NavBar