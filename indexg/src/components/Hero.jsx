import hero1 from '../assets/images/hero1.png'

import React from 'react'
import Navbar from './Navbar'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <Navbar />
        <div className="hero-content">
            <div className="hero-left">
                <h1>GAMER<span> CHARACTER</span></h1>
                <p>Welcome to Kenya's pioneer gaming agency, with over 20 members and a diverse community of gamers</p>
                <a href="#">join now</a>
            </div>
            <div className="hero-right">
                <img src={hero1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero