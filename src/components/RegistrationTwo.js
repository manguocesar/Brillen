import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

//images
import QrCode from "../image/RegistrationTwo/qrCode.svg"

const containerVariants = {
hidden: {
  opacity: 0,
  x:'100vw'
},
visible: {
opacity:1,
x: 0,
transition: {type : 'spring', 
delay: 0.5}
},exit: {x: '-100vw', transition : {ease: 'easeInOut'}}
}

const nextVariants = {
hidden:{
x:'-100vw'},
visible: {
x:0,
transition : {type: "spring", stiffness: 150  }
}

}
const buttonVariants = {

  hover: {
    scale: 1.2,  
    
    textShadow: "0px 0px 8px ",
    boxShadow: "0px 0px 8px",transition: {
      yoyo:Infinity,
      duration: 0.3
      
        }
  
  }
  
  }



const RegistrationTwo = ({ addBase, pizza }) => {
  const Registrations = ['Fashion', 'Health'];


  return (
    <motion.div className="base container"
   variants={containerVariants}
   initial="hidden" animate="visible" exit="exit"
    
    >

      <h2>Registration 2/2</h2>
      <p>Scan your QR code next to the terminal</p>
      <p>If you don't have a QR code, please put in your data manually</p>
      <ul style={{display:"flex"}}>
        {Registrations.map(Registration => {
          let spanClass = pizza.Registration === Registration ? 'active' : '';
          return (
            <Link to="/YourData">
            <motion.button
            className="home_button"
              variants={buttonVariants}
              whileHover="hover">
                {Registration}
            </motion.button>
        </Link>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        variants={nextVariants}
        initial="hidden"
        animate="visible"
     
        >
          <Link to="/YourData">
            <motion.button
           variants={buttonVariants}
            whileHover="hover"
            
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

<div>

<p>To scan your QR code, get it closer to ...</p>
      <p>QR code scanner is located on the left...</p>
<img src={QrCode} alt=""/>
</div>


    </motion.div>
  )
}

export default RegistrationTwo;