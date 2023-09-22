import tick from '../assets/images/greenTick.png'
import guard from '../assets/images/guardMan.png'
import shield from '../assets/images/privacy.png'
import Button from './Button'
import lens9 from '../assets/images/lensml.png'
import lens10 from '../assets/images/lensmr.png'
import H2 from './H2'

const Privacy = () => {
  const data = [
    {
      id: 1,
      value: "The Standard License grants you a non-exclusive right to navigate and register for our event",
    },
    {
      id: 1,
      value: "You are licensed to use the item available at any free source sites, for your project developement",
    },
  ]

  const body = data.map((data, key) => {
    return (
      <div className="lPolicy" key={key}>
        <img src={tick} alt="" />
        <p>{data.value}</p>
      </div>
    )
  })
  return (
    <div className="privacy">
      <img src={lens10} alt="" className="lens10" />
      <img src={lens9} alt="" className="lens9" />
      <section className="privacy1">
        <div className="head">
          <H2 v1={"Privacy Policy and"} v2={"Terms"} />
          <p>Last updated on September 12, 2023</p>
        </div>
        <p className='details'>Below are our privacy & policy, which outline a lot of goodies. it’sour aim to always take of our participant</p>
        <div className="guidelines">
          <p className='desc'>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information.This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>

          <p className="emp">Licensing Policy</p>
          <p className="sub">Here are terms of our Standard License:</p>

          {body}
          <Button value={"Read More"} />
        </div>
      </section>

      <section className="privacy2">
        <img src={shield} alt="" className='shield' />
        <img src={guard} alt="" className='guard' />
      </section>
    </div>
  )
}

export default Privacy