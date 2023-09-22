import silver from "../assets/images/silver_medal.png"
import gold from "../assets/images/gold_medal.png"
import bronze from "../assets/images/bronze_medal.png"
import cup from "../assets/images/cup.png"
import lens5 from "../assets/images/lensml.png"
import lens6 from "../assets/images/lensmr.png"
import Rank from "./Rank"
import H2 from "./H2"

const Prizes = () => {
  return (
    <div className="prizes">
      <img src={lens5} alt="" className="lens5" />
      <img src={lens6} alt="" className="lens6" />
      <section className="prizes1">
        <H2 v1={"Prizes and"} v2={"Rewards"} />
        <p>Highlight of the prizes or rewards for winners and for participants</p>
      </section>

      <section className="prizes2">
        <div className="image">
          <img src={cup} alt="" />
        </div>
        <div className="rewards">
          <Rank img={silver} position={"2nd"} prize={"N300,000"} />
          <Rank class={'G'} img={gold} position={`1st`} prize={"N400,000"} />
          <Rank img={bronze} position={"3rd"} prize={"N150,000"} />
        </div>
      </section>
    </div>
  )
}

export default Prizes