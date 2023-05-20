import React from 'react'
import {motion} from 'framer-motion'
import Founder from './Founder'
import Menu from './Menu'
function Home() {
const options={
  initial:{
    x:"-100%",
    opacity:0,
  },
  whileInView:{
    x:0,
    opacity:1,
  }
}
  return (
   <>
    <section className='home'>
     <div>
      <motion.h1 {...options}>MBA Burger Wala</motion.h1>
      <motion.p {...options} transition={{delay:0.2}}>Give yourself a tasty burger.</motion.p>
     </div>
     <motion.a initial={{y:'-100%',opacity:0}} transition={{delay:0.2}} whileInView={{y:1,opacity:1}} href="#menu">
      Explore Menu
     </motion.a>
    </section>
    <Founder/>
    <Menu/>
   </>
  )
}

export default Home
