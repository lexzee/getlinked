import bLine from "../assets/images/bend-line.png"
import Button from "./Button"
import VRGuy from "../assets/images/VRGuy.png"
import globe from "../assets/images/globe.png"

const Section1 = () => {
  return (
    <div className="sec1">
      <div>
        <p>Igniting a Revolution in HR innovation</p>
        <img src={bLine} alt="" />
      </div>
      <div>
        <div className="desc">
          <h1>getlinked Tech Hackathon <span>1.0</span>🔗💥</h1>
          <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
          <Button value={"Register"} />
          <p>{`00`}<span>H</span> {`00`}<span>M</span> {`00`}<span>S</span></p>
        </div>
        <div className="images">
          <img src={VRGuy} alt="" className="tGuy" />
          <img src={globe} alt="" className="globe" />
        </div>
      </div>
    </div>
  )
}

export default Section1