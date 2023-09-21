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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Navbar />
        <hr />
        <Section1 />
        <hr />
        <Section2 />
        <hr />
        <Section3 />
        <hr />
        <Section4 />
        <hr />
        <FAQ />
        <hr />
        <Timeline />
        <hr />
        <Prizes />
        <hr />
        <Partners />
        <hr />
        <Privacy />
        <hr />
        <Footer />
      </div>
    </>
  )
}

export default App
