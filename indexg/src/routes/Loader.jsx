import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

import logo from '../assets/logo.png'
import hero1 from '../assets/images/hero1.png'

import './Loader.css'

const transition = {duration: .6, ease: [0.43, 0.13, 0.23, 0.96]}

function Loader() {
  return (
    <div className="loader">
        <div className='navbar2'>
            <div className="links">
            </div>
            <img className='logo' src={logo} alt="logo" />
            <div className="links">
            </div>
        </div>
        <Link to={`/home`}>
            <motion.img 
            initial={{
                x:'75%',
                y: '20%'
            }} 
            className="hero-image"
            src={hero1} alt="" />
        </Link>
    </div>

  )
}

export default Loader