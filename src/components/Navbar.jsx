import Button from "./Button"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <p className="logo">get<span>linked</span></p>
      <ul className="dNav hidden">
        <li>Timeline</li>
        <li>Overview</li>
        <li>FAQs</li>
        <li>Contact</li>
        <li><Button value="Register" /></li>
      </ul>
      <div>
        <img src="#" alt="" className="menu"/>
        <ul className="mNav hidden">
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
          <li><Button value="Register" /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar