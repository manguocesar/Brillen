import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

//images
import QrCode from "../image/RegistrationTwo/qrCode.png"

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



const ConsultationFrames = ({ addBase, pizza }) => {



  return (
    <motion.div className="base container"
   variants={containerVariants}
   initial="hidden" animate="visible" exit="exit"
    
    >

      <h2>Consultation Frames</h2>
      <p>Scan your QR code next to the terminal</p>
      

    
            <Link to="/ConsultationLenses">
            <motion.button
            className="home_button"
              variants={buttonVariants}
              whileHover="hover">
             Scan QR Code
            </motion.button>
        </Link>
      

    

<div>

<p>To scan your QR code, get it closer to ...</p>
      <p>QR code scanner is located on the left...</p>
<img src={QrCode} alt=""/>
</div>


    </motion.div>
  )
}

export default ConsultationFrames;