import React from 'react'
import {motion} from 'framer-motion';
import me from '../../images/founder.jpeg'
function Founder() {
    const options={
        initial:{
            x:'-100%',
            opacity:0,
        },
        whileInView:{
            x:0,
            opacity:1,
        }
    }
  return (
    <section className='founder'> 
      <motion.div {...options}>
        <img src={me} alt="founder" height={200} width={200} />
        <h3>Vishal Kumar</h3>
        <p>Hey, Everyone I am , the founder of MBA Burger Wala.

            <br />
            Our aim is to create the most tasty burger on planet
        </p>
      </motion.div>
    </section>
  )
}

export default Founder
