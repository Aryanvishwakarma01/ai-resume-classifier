import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'
import HomePage from '../components/HomePage'
import UploadSection from '../components/UploadSection'
import Features from '../components/Features'
import Footer from '../components/Footer'


function App() {
  

  return (
    <>
       <Navbar />
       <HomePage />
       <UploadSection />
       <Features />
       <Footer />
    </>
  )
}

export default App
