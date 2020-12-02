import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {motion,useMotionValue, useTransform,} from "framer-motion";
import {useForm} from "react-hook-form"
import Calendar from 'react-calendar';
import moment from 'moment'


          const containerVariants = {
            hidden: { opacity: 0, x:'100vw'  },
            visible: {   opacity:1,   x: 0,
              transition: {type : 'spring', stiffness: 10,  delay: 0.2}  },
            exit: {x: '-100vw', transition : {ease: 'easeInOut',duration: 1.5}} }

          const buttonVariants = {  
            hover: { scale: 1.2,    textShadow: "0px 0px 8px ",   boxShadow: "0px 0px 8px",
            transition: {  yoyo:Infinity,  duration: 0.3  }} }

        const NoAppointment = () => {

          const y = useMotionValue(0)
          const opacity = useTransform(
            y,  [0, -100],
            [1, 0]
          )

          const [chosen, setChosen] = useState("")
          const [date,setDate] = useState([new Date().getFullYear(), new Date().getMonth(), new Date().getDate()])
          const onChange = date => { setDate([ date.getFullYear(),  date.getMonth(),  date.getDate()])}
                
                const {register, handleSubmit, errors} = useForm()
                const onSubmit = (data) => {
                  console.log("data",data);
                }
                return (
                  <motion.div 
                      className="home_container"
                      variants={containerVariants}
                      initial="hidden" animate="visible" exit="exit"  >
                        <motion.div style={{ opacity }}>
                    <h2>No Appointment Available</h2>
                          <p>Sorry but I cannot offer an appointment within the next hour</p>
                          <p>Please choose a suitable date from the calandar below</p>
                          </motion.div>
                
                    <div className="calendar_container">
                  
                          <motion.div 
                          y={y}
                          drag="y"
                            whileTap={{ scale: 0.98 }}
                            dragConstraints={{ top: -650, bottom: 10 }} 
                            className="calandar_dates">
                            
                          <div className="calandar_dates_one">
                            
                          Date:   {moment(date).format('Do MMMM')}  </div>
                          <Calendar onChange={onChange} value={date}
                            className="calend"
                            defaultView="month"
                            activeStartDate={  moment.tomorrow}
                            // onClickDay={(value, event) => console.log('Clicked day: ', event.target)}
                          />

                  <Link to="/PrintQRCode">
                          <motion.button
                          className="home_button"
                            variants={buttonVariants}
                            whileHover="hover">
                          Confirm Date
                          </motion.button>
                      </Link>


                            </motion.div>
                            <motion.div 
                            y={y}
                              drag="y"
                              whileTap={{ scale: 0.98 }}
                              dragConstraints={{ top: -650, bottom: 10 }} 
                              className="calendar_hours">
                            
                                <div className="calendar_hours_one">
                                  
                                {/* <span style={{marginRight:"5px"}}>Hour: </span>   */}
                                    <span className="calendar_hours_display"   >
                                       {moment(date).format('Do MMMM YYYY')}</span>  </div>
                                  
                                  <div className="calendar_hours_one">
                                    <span className="calendar_hours_display">
                                      Available Hours :
                              </span>
                            </div>


                          <div className="calendar_hours_one">
                            <p className={chosen == "08:00" && "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>08:00</p>  
                            <p className={chosen == "14:00" && "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>14:00</p>  
                          </div>
                          <div className="calendar_hours_one">
                            <p className={chosen == "09:00" && "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>09:00</p>  
                            <p className={chosen == "15:00" && "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>15:00</p>  
                            </div>
                          <div className="calendar_hours_one">
                             <p className={chosen == "10:00" && "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>10:00</p>  
                             <p className={chosen == "16:00" && "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>16:00</p>  
                              </div>
                          <div className="calendar_hours_one">
                             <p className={chosen == "11:00" && "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>11:00</p>  
                             <p className={chosen == "17:00" && "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>17:00</p>  
                              </div>
                          <div className="calendar_hours_one">
                             <p className={chosen == "12:00" && "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>12:00</p>  
                             <p className={chosen == "18:00" && "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>18:00</p>  
                              </div>
                          <div className="calendar_hours_one">
                             <p className={chosen == "13:00" && "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>13:00</p>  
                             <p className={chosen == "19:00" && "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>19:00</p>  
                              </div>
                              

                            </motion.div>
                            </div>
                  </motion.div>
                )
              }

        export default NoAppointment;