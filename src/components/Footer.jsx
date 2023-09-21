import React from 'react'
import X from '../assets/images/X.png'
import fb from '../assets/images/facebook.png'
import li from '../assets/images/linkedin.png'
import ig from '../assets/images/ig.png'
import tele from '../assets/images/telephone.png'
import loc from '../assets/images/location.png'

const Footer = () => {
  return (
    <footer className="footer">
      <section className="sec1">
        <div>
          <h2 className="flogo">get<span>linked</span></h2>
          <p>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
          <aside>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </aside>
        </div>

        <div>
          <h3>Useful Links</h3>
          <p>Overview</p>
          <p>Timeline</p>
          <p>FAQs</p>
          <p>Register</p>
          <aside>
            <p className="f">Follow us</p>
            <img src={ig} alt="" />
            <img src={X} alt="" />
            <img src={fb} alt="" />
            <img src={li} alt="" />
          </aside>
        </div>
        <div>
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
      <section className="sec2">
        <p>All rights reserved. © getlinked Ltd.</p>
      </section>
    </footer>
  )
}

export default Footer