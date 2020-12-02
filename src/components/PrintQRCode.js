import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";


                  const containerVariants = {
                    hidden: { opacity: 0, x:'100vw'  },
                    visible: {   opacity:1,   x: 0,
                      transition: {type : 'spring', stiffness: 10,  delay: 0.2}  },
                    exit: {x: '-100vw', transition : {ease: 'easeInOut',duration: 1.5}} }

                    const buttonVariants = {  
                      hover: { scale: 1.2,    textShadow: "0px 0px 8px ",   boxShadow: "0px 0px 8px",
                      transition: {  yoyo:Infinity,  duration: 0.3  }} }

                const PrintQRCode = ({ }) => {
              return (
                <motion.div className="home_container"
              variants={containerVariants}
              initial="hidden" animate="visible" exit="exit"
              drag="y"    whileTap={{ scale: 0.98 }} 
              dragConstraints={{ top: -150, bottom: 10 }}   >

                  <h2>PrintQRCode and Appointment details</h2>
                  <p className="QRCode_Text">Your are welcome to leave your selected frame in the reservation box for 1 week</p>
                  <p className="QRCode_Text">Please print out your QR code and appointment details</p>
              
                <Link to="/">
                            <motion.button
                            className="home_button"
                              variants={buttonVariants}
                              whileHover="hover">
                            Print QR code and Appointment details
                            </motion.button>
                        </Link>
                    </motion.div>   )   }

        export default PrintQRCode;