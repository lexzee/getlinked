import winwise from '../assets/images/Winwise.png'
import libA from '../assets/images/LibertyA.png'
import libP from '../assets/images/LibertyP.png'
import wisper from '../assets/images/wisper.png'
import lens7 from '../assets/images/lensml.png'
import lens8 from '../assets/images/lensmr.png'
import starW from '../assets/images/star-1.png'
import starP from '../assets/images/star-p.png'

const Partners = () => {
  return (
    <div className="partners">
      <img src={lens7} alt="" className="lens7" />
      <img src={lens8} alt="" className="lens8" />
      <img src={starP} alt="" className="starP" />
      <img src={starW} alt="" className="starW" />


      <section className="partner1">
        <h2>Parners and Sponsors</h2>
        <p>Getlinked Hackathon 1.0is honored to have the following major companies as its partners and sponsors</p>
      </section>
      <section className="partner2">
        <img src={libA} alt="" className='libA' />
        <hr className="vertical" />
        <img src={libP} alt="" className='libP' />
        <hr className="vertical" />
        <img src={winwise}
        alt=""className='winwise' />

        <hr className="horizontal" />
        <hr />
        <hr className="horizontal" />
        <hr />
        <hr className="horizontal" />

        <img src={wisper} alt="" className='wisper' />
        <hr className="vertical" />
        <p className='pay'>Pay<span className="p">box</span></p>
        <hr className="vertical" />
        <div className="vplus">
          <p className='virtual'>Virtual <span className="v">Plus</span></p>
          <p className="tg">Design Studios</p>
        </div>
      </section>
    </div>
  )
}

export default Partners