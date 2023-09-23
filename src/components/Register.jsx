import designer from '../assets/images/designer.png'
import Button from './Button'
import starW from '../assets/images/star-1.png'
import starP from '../assets/images/star-g.png'
import lens from '../assets/images/lensml.png'
import Confirmation from './Confirmation'

const Register = () => {
  return (
    <div className='reg-confirm'>

      <div className="confirmed hidden">
        <Confirmation />
      </div>
      <div className="register">
        <img src={starW} alt="" className="starW" />
        <img src={starP} alt="" className="starP" />
        <img src={starP} alt="" className="starPs" />
        <img src={lens} alt="" className="lens" />


        <p className="title">Register</p>
        <div className="reg1">
          <img src={designer} alt="" className="mImg" />
        </div>

        <div className="reg2">
          <aside>
          <p> Be part of this movement</p>
          <div className="dot">
            <p>🚶‍♂️</p>
            <p>🚶‍♀️</p>
          </div>
          </aside>
          <h1 className="head">Create Your Account</h1>

          <form action="" className="regF">
            <label htmlFor="name">
              Team's Name
            </label>
            <input type='text' className="name" id='name' placeholder='Enter the name of your group' />
            <label htmlFor="phone">
              Phone
            </label>
            <input type="tel" className="phone" id='phone' placeholder='Enter your phone number' />
            <label htmlFor="email">
              Email
            </label>
            <input type="email" className="email" id='email' placeholder='Enter your email address' />
            <label htmlFor="topic">
              Project Topic
            </label>
            <input type="text" className="topic" id='topic' placeholder='What is your group project topic?' />

            <div className="cat-size">
              <div className="cat">
                <label htmlFor="category">
                  Category
                </label>
                <input type="text" className="category" id='category'/>
              </div>

              <div className="size">
                <label htmlFor="size">
                  Group Size
                </label>
                <input type="text" className="topic" id='size'/>
              </div>
            </div>

            <p className="note">
            Please review your registration details before submitting
            </p>
            <div className="terms">
              <input type="checkbox" name="terms" id="terms" />
              <p className="term">I agreed with the event terms and conditions and privacy policy</p>
            </div>
            <Button value={"Submit"} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register