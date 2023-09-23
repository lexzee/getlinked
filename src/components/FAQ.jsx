import { useState } from 'react'
import manThinking from '../assets/images/manThinking.png'
import starW from '../assets/images/star-1.png'
import starG from '../assets/images/star-g.png'
import starP from '../assets/images/star-p.png'
import quesMark from '../assets/images/question.svg'
import H2 from './H2'

const FAQ = () => {

  const [isActive, setisActive] = useState(-1)
  const handleClick = (index) => {
    setisActive(index === isActive? -1 : index)
  }

  const FAQdata = [
    {
      id: 1,
      question: "Can I work on a project I started before the hackathon?",
      answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    },
    {
      id: 2,
      question: "What happens if I need help during the hackathon?",
      answer: "No more than 2GB. All files in your account must fit your allotted storage space."
    },
    {
      id: 3,
      question: "What happens if I don't have an idea for a project?",
      answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. \
      A reset link will be emailed to you.'
    },
    {
      id: 4,
      question: "Can I join a team or do I have to come with one?",
      answer: "Yes! Send us a message and we’ll process your request no questions asked."
    },
    {
      id: 5,
      question: "What happens after the hackathon?",
      answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    },
    {
      id: 6,
      question: "Can I work on a project I started before the hackathon?",
      answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    }
  ]

  const FAQbody = FAQdata.map((ques, key) => {
    return (
      <div className="FAQbody" key={key} id={ques.id}>
        <div className="question">
          <p className={`ques ${key==isActive && "bold"}`} >{ques.question} </p>
          <span className={`icon ${key==isActive ? 'up': 'down'}`} onClick={() => handleClick(key)}>+</span>
        </div>
        {key === isActive && <p className="answer">{ques.answer}</p>}
        <hr />
      </div>
    )
  })
  return (
    <div className="FAQ" id='faq'>
      <img src={starP} alt="" className="starP" />
      <div className="FAQ1">
        <H2 v1={"Frequently Ask"} v2={"Question"} />
        <p>We got answers to the questions that you might want to ask about <span>getlinked Hackathon 1.0</span></p>
        {FAQbody}
      </div>
      <div className="FAQ2">
        <img src={quesMark} alt="" className="quesMark" />
        <img src={quesMark} alt="" className="quesMark s" />
        <img src={quesMark} alt="" className="quesMark s" />
        <img src={starW} alt="" className="starW" />
        <img src={starW} alt="" className="starWs" />
        <img src={starG} alt="" className="starG" />
        <img src={starG} alt="" className="starGs" />

        <img src={manThinking} alt="" />
      </div>
    </div>
  )
}

export default FAQ