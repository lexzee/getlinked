import H2 from './H2'
import Button from './Button'
import judges from "../assets/images/judges.png"
import lens3 from "../assets/images/lensml.png"
import lens4 from "../assets/images/lensmr.png"
import starW from '../assets/images/star-1.png'
import starP from '../assets/images/star-p.png'

const Section4 = () => {

  const data = [
    {
      title: "Innovation and Creativity",
      description: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
    },
    {
      title: "Functionality",
      description: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
    },
    {
      title: "Impact and Relevance",
      description: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
    },
    {
      title: "Technical Complexity",
      description: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
    },
    {
      title: "Adherence to Hackathon Rules",
      description: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
    },
  ]

  const body = data.map((data, key) => {
    return (
      <p key={key}><span>{data.title}:</span> {data.description}</p>
    )
  })
  return (
    <div className='sec4'>
      <img src={lens3} alt="" className="lens3" />
      <img src={lens4} alt="" className="lens4" />
      <img src={starP} alt="" className="starP" />
      <img src={starW} alt="" className="starW" />
      <img src={starW} alt="" className="starWs" />


      <div className="sec4-1">
        <img src={judges} alt="" />
      </div>
      <div className="sec4-2">
        <H2 v1={"Judging Criteria"} v2={"Key attributes"} />
        {body}
        <Button value={"Read More"} />
      </div>
    </div>
  )
}

export default Section4