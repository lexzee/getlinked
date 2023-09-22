import H2 from "./H2"
import bLady from '../assets/images/bLlady.png'
import lens1 from '../assets/images/lensml.png'
import lens2 from '../assets/images/lensmr.png'
import starW from '../assets/images/star-1.png'


const Section3 = () => {
  return (
    <div className="sec3">
      <img src={lens1} alt="" className="lens1" />
      <img src={lens2} alt="" className="lens2" />
      <img src={starW} alt="" className="starW" />
      <img src={starW} alt="" className="starWs" />
      <img src={starW} alt="" className="starWss" />

      <div className="sec3-1">
        <img src={bLady} alt="" />
      </div>
      <div className="sec3-2">
        <H2 v1={"Rules and"} v2={"Guidelines"} />
        <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
      </div>
    </div>
  )
}

export default Section3