import idea from "../assets/images/idea.png"
import H2 from "./H2"
import starG from '../assets/images/star-g.png'
import starP from '../assets/images/star-p.png'
import arrow from '../assets/images/arrow.png'

const Section2 = () => {
  return (
    <div className="sec2">
      <img src={starG} alt="" className="starG" />
      <img src={arrow} alt="" className="arrow" />
      <img src={starG} alt="" className="starG" />
      <div className="sec2-1">
        <img src={idea} alt="" />
      </div>
      <div className="sec2-2">
        <H2 v1={"Introduction to getlinked"} v2={"teck Hackathon"} />
        <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
      </div>
    </div>
  )
}

export default Section2