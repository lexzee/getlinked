import designer from '../assets/images/designer.png'
import Button from './Button'
import starW from '../assets/images/star-1.png'
import starP from '../assets/images/star-g.png'
import lens from '../assets/images/lensml.png'
import Confirmation from './Confirmation'
import { useState } from 'react'

const Register = () => {

  const [regForm, setRegForm] = useState({
    id: '',
    email: '',
    name: '',
    number: '',
    topic: '',
    group_size: '',
    privacy_policy_accepted: false ,
    date_created: '',
    last_updated: '',
    category: '',
  })

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target
    setRegForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div className='reg-confirm'>

      <div className="confirmed hidden">
        <Confirmation />
      </div>
      <div className="register" id='register'>
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

          <form action="" className="regF" onSubmit={handleSubmit}>
            <label htmlFor="name">
              Team's Name
            </label>
            <input
              type='text'
              className="name"
              name="name"
              placeholder='Enter the name of your group'
              value={regForm.name}
              onChange={handleChange}
            />

            <label htmlFor="phone">
              Phone
            </label>
            <input
              type='tel'
              className="phone"
              name='number'
              placeholder='Enter your phone number'
              value={regForm.number}
              onChange={handleChange}
            />

            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="email"
              name='email'
              placeholder='Enter your email address'
              value={regForm.email}
              onChange={handleChange}
            />

            <label htmlFor="topic">
              Project Topic
            </label>
            <input
              type="text"
              className="topic"
              name='topic'
              value={regForm.topic}
              placeholder='What is your group project topic?'
              onChange={handleChange}
            />

            <div className="cat-size">
              <div className="cat">
                <label htmlFor="category">
                  Category
                </label>
                <select
                  name='category'
                  id="category"
                  value={regForm.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="MOBILE">Mobile</option>
                  <option value="WEB">Web</option>
                  <option value="BACKEND">Backend</option>
                </select>
              </div>

              <div className="size">
                <label htmlFor="size">
                  Group Size
                </label>
                <select
                  name='group_size'
                  id="size"
                  value={regForm.group_size}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select size</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>

            <p className="note">
            Please review your registration details before submitting
            </p>
            <div className="terms">
              <input
                type="checkbox"
                name="privacy_policy_accepted"
                checked={regForm.privacy_policy_accepted}
                id="terms"
                onChange={handleChange}
              />
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