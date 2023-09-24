import Button from "./Button"
import menu from '../assets/images/menu.svg'
import { Link } from "react-router-dom"

const Navbar = ({isMobile}) => {
  return (
    <nav className='navbar'>
      <p className="logo">get<span>linked</span></p>
      <ul className={`dNav ${!isMobile && "hidden"}`}>
        <li><a href="#timeline">Timeline</a></li>
        <Link to="/">
          <li>Overview</li>
        </Link>
        <li><a href="#faq">FAQs</a></li>
        <Link to={"contact"}>
          <li>Contact</li>
        </Link>
        <Link to='register'>
          <li><Button value="Register" /></li>
        </Link>
      </ul>
      <div>
        <img src={menu} alt="" className={`menu ${!isMobile ? "show" : "hidden"}` } />
        <ul className="mNav hidden">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#faq">FAQs</a></li>
          <Link to="contact">
            <li>Contact</li>
          </Link>
          <Link to="register">
            <li><Button value="Register" /></li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar