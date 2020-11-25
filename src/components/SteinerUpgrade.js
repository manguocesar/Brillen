import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

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



const SteinerUpgrade = ({ addBase, pizza }) => {


  return (
    <motion.div className="base_container"
   variants={containerVariants}
   initial="hidden" animate="visible" exit="exit"  >

  <motion.div drag="y"
    dragConstraints={{ top: -1000, bottom: 10 }}
    className="lenses_choice_container">

      <h2>Steiner Upgrade</h2>
      <p>Steiner Upgrade Description ....</p>
      
    <div className="Differences_Visualisation">
<p>Differences visualisation</p>

    </div>

  


            <Link to="/Summary">
            <motion.button
            className="home_button"
              variants={buttonVariants}
              whileHover="hover">
            Steiner Vision
            </motion.button>
        </Link>
        <Link to="/Summary">
            <motion.button
            className="home_button"
              variants={buttonVariants}
              whileHover="hover">
            Regular Vision
            </motion.button>
        </Link>
      

        </motion.div>


        <div className="lenses_choice_recap">

<h2>Prescription</h2>





  </div >

    </motion.div>
  )
}

export default SteinerUpgrade;