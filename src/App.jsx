import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mac from './pages/Mac'
import Ipad from './pages/Ipad'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/mac' element={<Mac />}/>
        <Route path='/Ipad' element={<Ipad />}/>

      </Routes>  
    </BrowserRouter>
    </>
  )
}

export default App
