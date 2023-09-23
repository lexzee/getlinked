import { useState } from 'react'
import './App.scss'
import Contact from './components/Contact'
import Register from './components/Register'
import Overview from './components/Overview'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </>
  )
}

export default App
