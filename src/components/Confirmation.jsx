import cheers from '../assets/images/cheers.png'
import tick from '../assets/images/greenTick.png'
import Button from './Button'
import starW from '../assets/images/star-1.png'
import starG from '../assets/images/star-g.png'
import starP from '../assets/images/star-p.png'

const Confirmation = () => {
  return (
    <div className='confirmation'>
      <img src={starW} alt="" className="starW" />
      <img src={starP} alt="" className="starP" />
      <img src={starG} alt="" className="starG" />

      <div className="imgs">
        <img src={tick} alt="" className="tick" />
        <img src={cheers} alt="" className="cheers" />
      </div>
      <h2>
        Congratulations<br />you have successfully Registered!
      </h2>
      <p>Yes, it was easy and you did it!<br />check your mail box for next step</p>
      <Button value={"Back"} />
    </div>
  )
}

export default Confirmation