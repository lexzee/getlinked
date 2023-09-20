import silver from "../assets/images/silver_medal.png"
import gold from "../assets/images/gold_medal.png"
import bronze from "../assets/images/bronze_medal.png"
import cup from "../assets/images/cup.png"
import Rank from "./Rank"
import RankG from "./RankG"
import H2 from "./H2"

const Prizes = () => {
  return (
    <div className="prizes">
      <section className="sec1">
        <H2 v1={"Prizes and"} v2={"Rewards"} />
        <p>Highlight of the prizes or rewards for winners and for participants</p>
      </section>
      <section className="sec2">
        <div className="image">
          <img src={cup} alt="" />
        </div>
        <div className="rewards">
          <Rank img={silver} position={"2nd Runner"} prize={"N300,000"} />
          <RankG img={gold} position={"1st Runner"} prize={"N400,000"} />
          <Rank img={bronze} position={"3rd Runner"} prize={"N150,000"} />
        </div>
      </section>
    </div>
  )
}

export default Prizes