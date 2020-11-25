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



const ContinueConsultation = ({ addBase, pizza }) => {



  return (
    <motion.div className="base container"
   variants={containerVariants}
   initial="hidden" animate="visible" exit="exit"
    
    >

      <h2>Continue Consultation Process</h2>
      <p>Here are the frames that you have chosen</p>
      <p>Please select one you would like to order</p>
      
      <div className="Frames_Container">
<div>Frame 1</div>
<div>Frame 2</div>
<div>Frame 3</div>

      </div>

    
            <Link to="/ConsultationFrames">
            <motion.button
            className="home_button"
              variants={buttonVariants}
              whileHover="hover">
             Continue
            </motion.button>
        </Link>
      



    </motion.div>
  )
}

export default ContinueConsultation;