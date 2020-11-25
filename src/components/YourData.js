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



const YourData = ({ addBase, pizza }) => {
  const Registrations = ['Accept', 'Edit'];


  return (
    <motion.div className="base container"
   variants={containerVariants}
   initial="hidden" animate="visible" exit="exit"
    
    >

      <h2>YourData</h2>
      <p>Scan your QR code next to the terminal</p>
      <p>If you don't have a QR code, please put in your data manually</p>
   

      <div className="Your_Data_Form">

<div><p>Gender</p><p>Mr.</p><p>Mrs.</p></div>
<div><p>Name</p><p>field</p><p>Surname</p><p>field</p></div>
<div><p>Adress</p><p>field</p><p>Country</p><p>field</p></div>
<div><p>ZIP Code</p><p>field</p><p>City</p><p>field</p></div>
<div><p>Date of Birth</p><p>field</p></div>
<div><p>E-Mail</p><p>field</p></div>
<div><p>Mobile Number</p><p>field</p></div>

<div><p>Warning: blablbabbalabbalablabalbabl</p></div>
<div><p>I dont want to bleblalblablalbalblabl</p></div>

<div><p>Area Prefix</p><p>field</p><p>Landline</p><p>field</p></div>
<div><p>ID card number</p><p>field</p></div>



</div>

<ul style={{display:"flex"}}>
        {Registrations.map(Registration => {
          let spanClass = pizza.Registration === Registration ? 'active' : '';
          return (
            <Link to="/Questionaire">
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

    </motion.div>
  )
}

export default YourData;