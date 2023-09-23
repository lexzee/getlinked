import React from 'react'
import X from '../assets/images/X.png'
import fb from '../assets/images/facebook.png'
import li from '../assets/images/linkedin.png'
import ig from '../assets/images/ig.png'
import tele from '../assets/images/telephone.svg'
import loc from '../assets/images/location.png'
import starW from '../assets/images/star-1.png'
import starG from '../assets/images/star-g.png'
import { Link } from 'react-router-dom'
// import starP from '../assets/images/star-p.png'

const Footer = () => {
  return (
    <footer className="footer">
      <section className="foot1">
        <img src={starW} alt="" className="starW" />
        <img src={starW} alt="" className="starWs" />
        <img src={starW} alt="" className="starWss" />
        <img src={starG} alt="" className="starG" />

        <div className='about'>
          <h2 className="flogo">get<span>linked</span></h2>
          <p className='aboutDesc'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
          <aside>
            <p>Terms of Use</p>
            <hr />
            <p>Privacy Policy</p>
          </aside>
        </div>

        <div className='fNav'>
          <h3>Useful Links</h3>
          <ul className='links'>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#faq">FAQs</a></li>
            <Link to='register'>
              <li>Register</li>
            </Link>
          </ul>
          <aside>
            <p className="emp">Follow us</p>
            <img src={ig} alt="" className='ig' />
            <img src={X} alt="" className='X' />
            <img src={fb} alt="" className='fb' />
            <img src={li} alt="" className='li' />
          </aside>
        </div>

        <div className='contact'>
          <h3>Contact Us</h3>
          <div>
            <img src={tele} alt="" />
            <p>+234 6707653444</p>
          </div>
          <div>
            <img src={loc} alt="" />
            <p>27,Alara Street<br />Yaba 100012<br />Lagos State</p>
          </div>
        </div>
      </section>
      <section className="foot2">
        <p>All rights reserved. © getlinked Ltd.</p>
      </section>
    </footer>
  )
}

export default Footer