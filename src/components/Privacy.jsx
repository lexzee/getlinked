import tick from '../assets/images/greenTick.png'
import guard from '../assets/images/guardMan.png'
import shield from '../assets/images/privacy.png'
import Button from './Button'
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
      <section className="sec1">
        <H2 v1={"Privacy Policy"} v2={"Terms"} />
        <small>Last updated on September 12, 2023</small>
        <p>Below are our privacy & policy, which outline a lot of goodies. it’sour aim to always take of our participant</p>
        <div className="guidelines">
          <p>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information.This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>

          <p className="emp">Licensing Policy</p>
          <p className="sub">Here are terms of our Standard License:</p>

          {/* <div className="lPolicy">
            <img src={tick} alt="" />
            <p>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
          </div>
          <div className="lPolicy">
            <img src={tick} alt="" />
            <p>You are licensed to use the item available at any free source sites, for your project developement</p>
          </div> */}
          {body}
          <Button value={"Read More"} />
        </div>
      </section>

      <section className="sec2">
        <img src={shield} alt="" />
        <img src={guard} alt="" />
      </section>
    </div>
  )
}

export default Privacy