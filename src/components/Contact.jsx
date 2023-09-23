import ig from '../assets/images/ig.png'
import X from '../assets/images/X.png'
import fb from '../assets/images/facebook.png'
import li from '../assets/images/linkedin.png'
import Button from './Button'
import starW from '../assets/images/star-1.png'
import starG from '../assets/images/star-g.png'
import starP from '../assets/images/star-p.png'
import lens from '../assets/images/lensml.png'

const Contact = () => {
  return (
    <div className="contact">
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
          <input type="text" className="name" placeholder="Team's Name" />
          <input type="text" className="topic" placeholder="Topic" />
          <input type="email" className="email" placeholder="Email" />
          <textarea name="message" id="" cols="30" rows="10" className="message" placeholder="Message"></textarea>
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