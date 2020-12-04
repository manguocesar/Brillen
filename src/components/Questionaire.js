import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import {useForm} from "react-hook-form"
import moment from 'moment'

            const containerVariants = {
              hidden: { opacity: 0, x:'100vw'  },
              visible: {   opacity:1,   x: 0,
                    transition: {type : 'spring', stiffness: 10,  delay: 0.1}  },
              exit: {x: '-100vw', transition : {duration:1 ,ease: 'easeInOut'}} }

              const opacityVariants = {
                hidden: { opacity: 0, scale: 0.1, color: "black" },
                visible: {   opacity:1,   scale: 1, color: "rgb(30, 250, 30)",
                      transition: {type : 'spring', stiffness: 10,  delay: 0.5}  },
                exit: {opacity: 0, scale: 0.01, color: "black" },
                hover: { scale: 1.2, x:20,   textShadow: "0px 0px 8px ",   
                transition: {  yoyo:Infinity,  duration: 0.4  }} }

            const popVariants = {
              hidden: { scale: 0.1, y: '10vw' },
              visible: {   scale:1, y: '0vw' , 
                  transition: {type : 'spring', stiffness: 10,  delay: 0.1}  },
              exit: {scale: 0.1, y: '10vw' , transition : {ease: 'easeInOut'}},
              hover: { scale: 1.2,    textShadow: "0px 0px 8px ",   boxShadow: "0px 0px 8px",
                transition: {  yoyo:Infinity,  duration: 0.3  }} }

            const topDisapear = { exit: { opacity:0,scale:0.1, transition : {duration: 0.4,ease: 'easeIn'}} }


          const Questionaire = ({savedData,setSavedData}) => {
            const [selected, setSelected] = useState(false)
            const {register, handleSubmit,errors} = useForm()

                useEffect(() => {
                  setSavedData(true)
                  }, [])

            return (
                  <motion.div className="home_container"
                      variants={containerVariants}
                      initial="hidden" animate="visible" exit="exit"
                      drag="y"
                      whileTap={{ opacity: 0.6 }}
                      dragConstraints={{ top: -500, bottom: 10 }}
                        >

                <motion.h2 variants={topDisapear}>Questionaire </motion.h2>
                <motion.p variants={topDisapear}>Please give us some input about your visual behaviour</motion.p>
                <motion.p variants={topDisapear}>Then we can recommend the best product for you</motion.p>
            

                <div className="Questionaire_Form">

              <motion.p variants={topDisapear} >How much time do you spend in front of your computer, table and/or smartphone?</motion.p>
                  <motion.div variants={topDisapear}  className="Questionaire_Form_One">
                              <motion.input name="computerTime" type="radio" value="<1H" ref={register} />
                            <motion.p>Less than an hour</motion.p>
                              <motion.input name="computerTime" type="radio" value="<4H" ref={register} />
                            <motion.p>Up to 4 hours</motion.p>
                              <motion.input name="computerTime" type="radio" value=">4H" ref={register} />
                            <motion.p>More than 4 hours</motion.p>
                  </motion.div>

              <motion.p variants={topDisapear} >Do you travel a lot by car?</motion.p>
                  <motion.div variants={topDisapear}   className="Questionaire_Form_One">
                              <input name="carTravelling" type="radio" value="Yes" ref={register} />
                            <p>Yes</p>
                              <input name="carTravelling" type="radio" value="No" ref={register} />
                            <p>No</p>
                  </motion.div>


                  <p>How important is a clear image in the peripheral areas of the glasses to you?</p>
                  <div className="Questionaire_Form_One">
                              <input name="clearPeripheral" type="radio" value="Important" ref={register} />
                            <p>Important</p>
                              <input name="clearPeripheral" type="radio" value="Neutral" ref={register} />
                            <p>Neutral</p>
                              <input name="clearPeripheral" type="radio" value="NotImportant" ref={register} />
                            <p>Not important</p>
                            
                  </div>

                  <p>Are your eyes light sensitive?</p>
                  <div className="Questionaire_Form_One">
                              <input name="lightSensitive" type="radio" value="Yes" ref={register} />
                            <p>Yes</p>
                              <input name="lightSensitive" type="radio" value="No" ref={register} />
                            <p>No</p>
                              <input name="lightSensitive" type="radio" value="Poor" ref={register} />
                            <p>Poor</p>
                  </div>

                        
                  </div>
                  
              { !selected ? ( 
              
                      <motion.button
                          onClick={()=> setSelected(true)}
                          className="home_button"
                            variants={popVariants}
                            whileHover="hover">
                          Continue
                      </motion.button>
                            ):(
                      <> <div className="time_selection"> 
                                <Link to="/QRCodeQueueNumber">
                                  <motion.button  
                                            className="home_button"
                                            variants={popVariants}
                                            whileHover="hover">
                                              Appointment Availble
                                        </motion.button> 
                                   </Link>
                                  <motion.p
                                     whileHover="hover"
                                     variants={opacityVariants}  >
                                     { moment().add(20, 'm').calendar()}
                                   </motion.p>
                               </div>


                              
                              <Link to="/NoAppointment">
                                 <motion.button  
                                    className="home_button"
                                    variants={popVariants}
                                    whileHover="hover" >
                                      Appointment not Availble
                              </motion.button></Link> </>)
                      }
                </motion.div>  )  }
            export default Questionaire;