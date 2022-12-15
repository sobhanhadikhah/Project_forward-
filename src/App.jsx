import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Allinone, Navbar, Hero, About, Support } from "./components"

function App() {
  useEffect(() => {
    console.log(`first`);
  }, [])
  return (
    < >

      <Navbar />
      <Hero />
      <About />
      <Support />
      <Allinone />
    </>
  )
}

export default App
