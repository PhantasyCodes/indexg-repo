import React from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useAnimation } from 'framer-motion'

import logo2 from '../assets/logo2.png'
import arrow from '../assets/icons/next-block.png'

import './Footer.css'

const Footer = () => {
    const {ref, inView } = useInView()
    const animation = useAnimation()


    useEffect(() => {
        console.log("use effect hook, inView = ", inView)
        console.log("nice")
        if(inView) {
          animation.start({
            x:-100,
            transition: {
              type: 'spring', duration: 2, bounce: 0.3
            }
          })
        }
        if(!inView){
          animation.start({x: '-49vw'})
        }
    
      }, [inView])

  return (
    <div className='footer'>
        <img src={logo2} alt="logo" />
        <div className="footer-text">
            <div className="column">
                <h2>shop</h2>
                <p>IndexG Merch</p>
                <p>Tournament Tickets</p>
            </div>
            <div className="column">
                <h2>news</h2>
                <p>Recent tournaments</p>
                <p>IndexG Weekly</p>
            </div>
            <div className="column">
                
            </div>
        </div>
        <motion.img ref={ref} animate={animation} whileHover={{scale:1.2}} className='shop-arrow' src={arrow} alt="" />
    </div>
  )
}

export default Footer