import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import FAQ from './components/FAQ'
import Timeline from './components/Timeline'
import Prizes from './components/Prizes'
import Partners from './components/Partners'
import Privacy from './components/Privacy'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        {/* <Navbar />
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
        <Footer /> */}

        {/* <Contact /> */}
        <Register />
      </div>
    </>
  )
}

export default App
