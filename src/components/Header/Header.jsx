import React, { useState } from 'react'
import otehr from '../../assets/apple.svg'
import pppo from '../../assets/appleB.svg'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [logo, setlogo]= useState(pppo)
  return (
    <div>
      <nav id='Header'>
        <Link to={'/'}><img  onMouseLeave={()=> setlogo(pppo)} onMouseEnter={()=> setlogo(otehr)}  src={logo} alt="" /></Link>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Support</li>
        <li>Where to Buy</li>
        <li></li>
      </nav>
        <Link></Link>
      
    </div>
  )
}

export default Header