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



const PrintQRCode = ({ addBase, pizza }) => {



  return (
    <motion.div className="base container"
   variants={containerVariants}
   initial="hidden" animate="visible" exit="exit"
    
    >

      <h2>PrintQRCode and Appointment details</h2>
      <p>Your are welcome to leave your selected frame in the reservation box for 1 week</p>
      <p>Please print out your QR code and appointment details</p>
   

   


<Link to="/">
            <motion.button
            className="home_button"
              variants={buttonVariants}
              whileHover="hover">
             Confirm Date
            </motion.button>
        </Link>





    </motion.div>
  )
}

export default PrintQRCode;