import FAQ from "./FAQ"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Partners from "./Partners"
import Privacy from "./Privacy"
import Prizes from "./Prizes"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Timeline from "./Timeline"

const Overview = () => {
  return (
    <div>
      <Navbar />
      <hr className='secDiv' />
      <Section1 />
      <hr className='secDiv' />
      <Section2 />
      <hr className='secDiv' />
      <Section3 />
      <hr className='secDiv' />
      <Section4 />
      <hr className='secDiv' />
      <FAQ />
      <hr className='secDiv' />
      <Timeline />
      <hr className='secDiv' />
      <Prizes />
      <hr className='secDiv' />
      <Partners />
      <hr className='secDiv' />
      <Privacy />
      <hr className='secDiv' />
      <Footer />
    </div>
  )
}

export default Overview