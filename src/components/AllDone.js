import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";


          const containerVariants = {
            hidden: {  opacity: 0,   x:'100vw'   },
            visible: { opacity:1, x: 0,
            transition: {type : 'spring',  stiffness: 10,}  },
            exit: {x: '-100vw', transition : {duration: 2, ease: 'easeInOut'}}  }


          const buttonVariants = {   
            hover: { scale: 1.2,   textShadow: "0px 0px 8px ", boxShadow: "0px 0px 8px",
            transition: {   yoyo:Infinity, duration: 0.3}   } }   



const AllDone = ({ }) => {

          return (
            <motion.div 
                className="AllDone_Container"
                variants={containerVariants}
                initial="hidden" animate="visible" exit="exit">

              <h2>All Done !</h2>
              <p>Thank you for your order. You will receive  an order confirmation shortly on your mobile phone and/or via e-mail</p>
              <p>As soon as your glasses are ready are ready, we will notify you and you can pick them up here in the store</p>
            
              <Link to="/">
                    <motion.button
                    className="home_button"
                      variants={buttonVariants}
                      whileHover="hover">
                    Logout
                    </motion.button>
                </Link>

            </motion.div>
          )
        }

export default AllDone;