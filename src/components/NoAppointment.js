import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

//images



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



const NoAppointment = ({ addBase, pizza }) => {



  return (
    <motion.div className="base container"
   variants={containerVariants}
   initial="hidden" animate="visible" exit="exit"
    
    >

      <h2>No Appointment Available</h2>
      <p>Sorry but I cannot offer an appointment within the next hour</p>
      <p>Please choose a suitable date from the calandar below</p>
   

      <div className="calandar_container">
     
     <div className="calandar_dates">Dates</div>
     <div className="calandar_hours">Hours</div>
     
     </div>



<Link to="/PrintQRCode">
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

export default NoAppointment;