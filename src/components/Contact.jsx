import ig from '../assets/images/ig.png'
import X from '../assets/images/X.png'
import fb from '../assets/images/facebook.png'
import li from '../assets/images/linkedin.png'
import Button from './Button'
import starW from '../assets/images/star-1.png'
import starG from '../assets/images/star-g.png'
import starP from '../assets/images/star-p.png'
import lens from '../assets/images/lensml.png'
import { useEffect, useState } from 'react'

const Contact = () => {

  const [contactForm, setContactForm] = useState({
    name: '',
    topic: '',
    email: '',
    message: ''
  })

  const [getLinkedData, setGetLinkedData] = useState({
    contact:{},
    registration:{}
  })

  // fetch("https://swapi.dev/api/people/l")
  useEffect(()=>{
    fetch("https://backend.getlinked.ai/hackathon/categories-list")
      .then(res => res.json())
      .then(data => setGetLinkedData(prev => ({
        ...prev,
        contact: data
      })))
    fetch("https://backend.getlinked.ai/hackathon/registration")
      .then(res => res.json())
      .then(data => setGetLinkedData(prev => ({
        ...prev,
        registration: data
      })))
  }, [])

    console.log(getLinkedData);

  const handleChange = (e) => {
    const {name, type, value} = e.target
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="contact" id="#">
      <img src={lens} alt="" className="lens" />
      <img src={starW} alt="" className="starW" />
      <img src={starW} alt="" className="starWs" />
      <img src={starP} alt="" className="starP" />
      <img src={starG} alt="" className="starG" />

      <div className="back">
      </div>
      <div className="contact1">
      </div>


      <div className="contact2">
        <h1 className="heading">
          Questions or need assistance?<br />
          Let us know about it
        </h1>
        <p className='sHeading'>
        Email us below to any question related to our event
        </p>
        <form action="" className="contactF">
          <input
            type="text"
            className="name"
            placeholder="Team's Name"
            name='name'
            value={contactForm.name}
            onChange={handleChange}
            />
          <input
            type="text"
            className="topic"
            placeholder="Topic"
            name='topic'
            value={contactForm.topic}
            onChange={handleChange}
            />
          <input
            type="email"
            className="email"
            placeholder="Email"
            name='email'
            value={contactForm.email}
            onChange={handleChange}
            />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            className="message"
            placeholder="Message"
            value={contactForm.message}
            onChange={handleChange}
          ></textarea>
          <Button value={"Submit"} />
        </form>
        <div className="aside">
          <p>Share on</p>
          <div className="socials">
            <img src={ig} alt="" className="ig" />
            <img src={X} alt="" className="X" />
            <img src={fb} alt="" className="fb" />
            <img src={li} alt="" className="li" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact