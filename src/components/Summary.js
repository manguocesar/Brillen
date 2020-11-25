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



const Summary = ({ addBase, pizza }) => {

  const [tintingChosen, setTintingChosen] = useState(false)


  return (
    <motion.div className="base_container"
      variants={containerVariants}
      initial="hidden" animate="visible" exit="exit"  >

    <motion.div drag="y"
      dragConstraints={{ top: -1000, bottom: 10 }}
      className="lenses_choice_container">

      <h2>Summary</h2>
       <p>Based on your information about your vision and the results of the eye tested, we recommend the following lens type:</p>
        <p>Based on your information about your vision and the results of the eye tested, we recommend the following lens type:</p>
     
      <div className="summary_text">
      <div> <p>Base Price</p><p>XXX€</p></div>
      <div> <p>Frame Price</p><p>XXX€</p></div>
      <div> <div><p>Remote Optimisation </p>
        <p>/ No Remote Optimisation</p></div>
      <p>XXX€</p></div>
      <div><div> <p>Close Up Optimisation</p> <p>/ No Close Up Optimisation</p></div><p>XXX€</p></div>
      <div><div> <p>Quality Plastic </p> <p>/ Thin Version </p> <p>/ Extra THin Version </p> <p>/ Extremly Thin Version</p></div><p>XXX€</p></div>
      <div><div> <p>Hard Coating </p> <p>/ Reflex Coating </p> <p>/ Lotus Effect </p> <p>/ Blue Out</p></div><p>XXX€</p></div>
      <div><div> <p>With Tinting </p> <p>/ Without TInting </p> <p>/ With automatic TInting</p></div><p>XXX€</p></div>
      <div> <div><p>Steiner Vision </p> <p>/ Regular Vision</p></div><p>XXX€</p></div>
      <div> <p>Discount</p><p>XXX€</p></div>
      <div style={{borderTop:"white 1px solid", margin: "15px"}}> <p>Total Price</p><p>XXX€</p></div>
      

      </div>

<div>COnditions genraral ()lorem50</div>

  


            <Link to="/SteinerUpgrade">
            <motion.button
            className="home_button"
              variants={buttonVariants}
              whileHover="hover">
            Edit Order (goes previous)
            </motion.button>
        </Link>
        <Link to="/SteinerUpgrade">
            <motion.button
            className="home_button"
              variants={buttonVariants}
              whileHover="hover">
            Submit Order
            </motion.button>
        </Link>
      

        </motion.div>


   

    </motion.div>
  )
}

export default Summary;