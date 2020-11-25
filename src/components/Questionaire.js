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



const Questionaire = ({ addBase, pizza }) => {



  return (
    <motion.div className="base container"
   variants={containerVariants}
   initial="hidden" animate="visible" exit="exit"
    
    >

      <h2>Questionaire</h2>
      <p>Please give us some input about your visual behaviour</p>
      <p>Then we can recommend the best product for you</p>
   

      <div className="Your_Data_Form">
      <p>How much time do you spend in front of your computer, table and/or smartphone</p>
<div><p>Less than an hour</p><p>Up to 4 hours</p><p>More than 4 hours</p></div>

<p>Do you travel....</p>
<div><p>yes</p><p>field</p><p>no</p><p>field</p></div>

<p>How important is....e</p>
<div><p>important</p><p>field</p><p>neutral</p><p>field</p><p>poor</p><p>field</p></div>

<p>Are your eyes light sensitive</p>
<div><p>yes</p><p>field</p><p>no</p><p>field</p></div>



<Link to="/NoAppointment">
            <motion.button
            className="home_button"
              variants={buttonVariants}
              whileHover="hover">
             Continue
            </motion.button>
        </Link>


</div>

<button>Appointment Availble</button>
<button>Appointment not Availble</button>


    </motion.div>
  )
}

export default Questionaire;