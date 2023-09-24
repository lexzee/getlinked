import { useEffect, useState } from 'react'
import './App.scss'
import Contact from './components/Contact'
import Register from './components/Register'
import Overview from './components/Overview'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleView = () => {
      // setIsMobile(window.innerWidth < 1200);
      const size = window.innerWidth
      size < "1200px" ? setIsMobile(true) : setIsMobile(false)
    };
    handleView();

    window.addEventListener("resize", handleView);
    return () => {
      window.removeEventListener("resize", handleView);
    }
  }, [isMobile])

  return (
    <>
      <div className="App">
        {!isMobile && <Navbar />}
        <Routes>
          <Route path='/' element={<Overview isMobile={isMobile} />} />
          <Route path='/contact' element={<Contact isMobile={isMobile} />} />
          <Route path='/register' element={<Register isMobile={isMobile} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
