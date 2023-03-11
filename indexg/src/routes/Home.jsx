import React from 'react'
import {motion} from 'framer-motion'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './Home.css'

import Hero from '../components/Hero'
import Tournaments from '../components/Tournaments'
import Shop from '../components/Shop'

const marqueeVariants = {
  animate: {
    y: [1000, -600],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
}

const Home = () => {
  return (
    
    <div className='home'>
      <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {delay: 2}}} className="news">
        <motion.h1 variants={marqueeVariants}
          animate="animate" >monthly tournaments are now live! sign up now!</motion.h1>
      </motion.div>
      <Parallax pages={3} className="parallax-region">
        <ParallaxLayer speed={1}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={0.90} speed={0.5}>
          <Tournaments />
        </ParallaxLayer>
        <ParallaxLayer offset={1.50} speed={1}>
          <Shop />
        </ParallaxLayer>
      </Parallax>
    </div>
    
  )
}

export default Home