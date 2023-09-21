import winwise from '../assets/images/Winwise.png'
import libA from '../assets/images/LibertyA.png'
import libP from '../assets/images/LibertyP.png'
import wisper from '../assets/images/wisper.png'

const Partners = () => {
  return (
    <div className="partners">
      <section className="sec1">
        <h2>Parners and Sponsors</h2>
        <p>Getlinked Hackathon 1.0is honored to have the following major companies as its partners and sponsors</p>
      </section>
      <section className="sec2">
        <img src={libA} alt="" />
        <img src={libP} alt="" />
        <img src={winwise} alt="" />
        <img src={wisper} alt="" />
        <p>Pay<span className="p">box</span></p>
        <p>Virtual <span className="v">Plus</span></p>
      </section>
    </div>
  )
}

export default Partners