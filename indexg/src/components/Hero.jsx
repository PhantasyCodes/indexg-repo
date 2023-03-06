import trophy from '../assets/icons/trophy.png'
import self from '../assets/icons/self.png'
import team from '../assets/icons/team.png'
import medal from '../assets/icons/medal.png'

import React from 'react'
import Navbar from './Navbar'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <Navbar />
        <div className="hero-content">
            <div className="hero-left">
                <h1>GAMER CHARACTER</h1>
                <h2 className='special'>THE MODERN GAMING SCENE</h2>
                <p>Welcome to Kenya's pioneer gaming agency, with over 20 members and a diverse community of gamers</p>
            </div>
            <div className="hero-right">
                <div className="hero-right-item">
                    <img src={trophy} alt="" />
                    <p><span>10</span><br></br>tournament wins</p>
                </div>
                <div className="hero-right-item">
                    <img src={self} alt="" />
                    <p><span>20</span><br></br>members</p>
                </div>
                <div className="hero-right-item">
                    <img src={team} alt="" />
                    <p><span>5</span><br></br>teams</p>
                </div>
                <div className="hero-right-item">
                    <img src={medal} alt="" />
                    <p><span>15</span><br></br>awards</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero