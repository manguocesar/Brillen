import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x:'100vw'
  },
  visible: {
    opacity:1,
    x: 0,
    transition: {type : 'spring', mass: 0.4,damping: 8,
      when: "beforeChildren",
staggerChildren : 0.4 //wait 0.4 second between children
}},
  exit: {
    x: '-100vw', transition : {ease: 'easeInOut'}}
  }

const childVariants = {
hidden: {
opacity: 0
}, visible: {
opacity:1}
}

const Order = ({ setShowModal, pizza }) => {

  //after 4 sec Modal appears
  useEffect(( ) =>   {
  setTimeout( (  )  =>   {setShowModal(true)},
  4000)
  }, [setShowModal]
  )
 
  return (
    <motion.div 
    className="container order"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"  >

 <motion.h2>Thank you for your order :)</motion.h2>
      <motion.p  variants={childVariants} >
        You ordered a {pizza.base} pizza with:
        </motion.p>
      <motion.div  variants={childVariants}>
        {pizza.toppings.map(topping =>
           <div key={topping}>{topping}</div>)}
   </motion.div> </motion.div>
  )
}

export default Order;