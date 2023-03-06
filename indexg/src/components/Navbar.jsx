import React from 'react'

import logo from '../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" />
        <a href="#">events</a>
        <a href="#">services</a>
        <a href="#">about</a>
        <a href="#">gallery</a>
        <a href="#">blog</a>
    </div>
  )
}

export default Navbar