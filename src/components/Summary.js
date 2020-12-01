import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

        const containerVariants = {
          hidden: {  opacity: 0,   x:'100vw'   },
          visible: { opacity:1, x: 0,
          transition: {type : 'spring',  stiffness: 10,}  },
          exit: {x: '-100vw', transition : {duration: 2, ease: 'easeInOut'}}  }


        const buttonVariants = {   
          hover: { scale: 1.2, x:30,   textShadow: "0px 0px 8px ", boxShadow: "0px 0px 8px",
          transition: {   yoyo:Infinity, duration: 0.3}   } }



const Summary = ({  }) => {
          return (
            <motion.div className="base_container"
              variants={containerVariants}
              initial="hidden" animate="visible" exit="exit"  >

            <motion.div drag="y"
              dragConstraints={{ top: -1000, bottom: 10 }}
              className="lenses_choice_container">

              <h2>Summary</h2>
                    <p>Please check this overview of your order and confirm order by clicking "Submit Order". After a few days, you will receive a message, so you can pick up your new glasses here in that store</p>
            
              <div className="summary_text">
                <div > <p>Base Price</p><p>XXX€</p></div>
                <div> <p>Frame Price</p><p>XXX€</p></div>
                  <div> 
                        <div >
                          <p className="summary_text_content">Remote Optimisation </p>
                          <p>/ No Remote Optimisation</p>
                        </div>
                          <p>XXX€</p>
                  </div>
                <div><div> <p className="summary_text_content">Close Up Optimisation</p> <p>/ No Close Up Optimisation</p></div><p>XXX€</p></div>
                <div><div> <p className="summary_text_content">Quality Plastic </p> 
                <p className="summary_text_content">/ Thin Version </p>
                   <p className="summary_text_content">/ Extra THin Version </p> 
                   <p className="summary_text_content">/ Extremly Thin Version</p></div><p>XXX€</p></div>
                <div><div> <p className="summary_text_content">Hard Coating </p> 
                <p className="summary_text_content">/ Reflex Coating </p> <p className="summary_text_content">/ Lotus Effect </p> 
                <p className="summary_text_content">/ Blue Out</p></div><p>XXX€</p></div>
                <div><div> <p className="summary_text_content">With Tinting </p>
                 <p className="summary_text_content">/ Without TInting </p> 
                 <p className="summary_text_content">/ With automatic TInting</p></div><p>XXX€</p></div>
                <div> <div><p className="summary_text_content">Steiner Vision </p>
                 <p className="summary_text_content">/ Regular Vision</p></div><p>XXX€</p></div>
                <div> <p>Discount</p><p>XXX€</p></div>
                <div style={{borderTop:"white 1px solid", margin: "15px", padding:"10px"}}> <p>Total Price</p><p>XXX€</p></div>
              

              </div>

        <div>Conditions genraral ... Aliqua labore cupidatat cupidatat elit duis laborum duis deserunt. Ea labore adipisicing esse culpa et labore in fugiat exercitation aliqua est do velit eiusmod. Fugiat nostrud duis quis incididunt sunt laborum sunt ullamco elit id do do. Nostrud ad quis est duis pariatur.
        </div>
           <Link to="/ConsultationLenses">
                      <motion.button
                      className="home_button"
                        variants={buttonVariants}
                        whileHover="hover">
                      Edit Order
                      </motion.button>
                </Link>
                <Link to="/AllDone">
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