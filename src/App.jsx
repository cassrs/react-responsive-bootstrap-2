import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.scss'
import './assets/styles/style.scss'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero.jsx'
import Footer from './sections/Footer.jsx'
import Features from './sections/Features.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  )
}

export default App
