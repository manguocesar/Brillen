import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

import Brown from "../image/ConsultationLenses/Braun.png"
import Grey from "../image/ConsultationLenses/Gray.png"
import Green from "../image/ConsultationLenses/Green.png"

                const containerVariants = {
                  hidden: {  opacity: 0,   x:'100vw'   },
                  visible: { opacity:1, x: 0,
                  transition: {type : 'spring',  stiffness: 10,}  },
                  exit: {x: '-100vw', transition : {duration: 1, ease: 'easeInOut'}}  }

                  const buttonVariants = {
                    hidden : {scale:0,},
                    visible:{  scale:1,
                      transition : {delay : 0.2, duration:2.5, type: "spring", stiffness: 20}},
                    hover: {  scale: 1.05, textShadow: "0px 0px 4px ", boxShadow: "0px 0px 4px",
                      transition: { yoyo:Infinity, duration: 0.5   }}}

          const ConsultationFrames = ({setSavedData,frames, setFrames}) => {

            useEffect(() => {
              setSavedData(true)
              }, [])

              let arrayLenses = [Brown,Grey,Green]

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
                      {arrayLenses.map((item,index)=> {
                       return <div className={ frames === index+1 ? "Frames_Container_divGreen": "Frames_Container_div"} onClick={() => setFrames(index+1)} ><img alt="" src={item} /><p>Frame {index+1}</p></div>
                      })}
                      
                  </div>
                        <Link to={`/ConsultationLenses${arrayLenses[frames]}`}  >
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