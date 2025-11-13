import React from 'react'
import Hero from './Components/Heros/Hero'
import Service from './Components/Services/Service'
import Navbar from './Components/Navbars/Navbar'

const App = () => {
  return (
    <>
      <div className="parent">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
