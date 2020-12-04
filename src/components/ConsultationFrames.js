import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";


                const containerVariants = {
                  hidden: {  opacity: 0,   x:'100vw'   },
                  visible: { opacity:1, x: 0,
                  transition: {type : 'spring',  stiffness: 10,}  },
                  exit: {x: '-100vw', transition : {duration: 1, ease: 'easeInOut'}}  }

                const buttonVariants = {   
                  hover: { scale: 1.2,   textShadow: "0px 0px 8px ", boxShadow: "0px 0px 8px",
                  transition: {   yoyo:Infinity, duration: 0.3}   } }

          const ConsultationFrames = ({setSavedData}) => {

            useEffect(() => {
              setSavedData(true)
              }, [])

              return (
                <motion.div className="home_container"
                  variants={containerVariants}
                  initial="hidden" animate="visible" exit="exit"
                  // drag="y"
                  // whileTap={{ scale: 0.98 }}
                  // dragConstraints={{ top: -250, bottom: 10 }} 
                  >

                  <h2>Consultation Frames</h2>
                    <p className="QRCode_Text">Here are the frames that you have chosen</p>
                    <p className="QRCode_Text">Please choose one you would like to order</p>
                    <div className="Frames_Container">
                        <div>Frame 1</div>
                        <div>Frame 2</div>
                        <div>Frame 3</div>
                  </div>
                        <Link to="/ConsultationLenses"  >
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
      export default ConsultationFrames;