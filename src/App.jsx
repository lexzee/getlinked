import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Navbar />
        <hr />
        <Section1 />
      </div>
    </>
  )
}

export default App
