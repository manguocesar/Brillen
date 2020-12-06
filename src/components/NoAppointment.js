import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {motion,useMotionValue, useTransform,} from "framer-motion";
import {useForm} from "react-hook-form"
import Calendar from 'react-calendar';
import moment from 'moment'


          const containerVariants = {
            hidden: { opacity: 0, x:'50vw'  },
            visible: {   opacity:1,   x: 0,
              transition: {type : 'spring', stiffness: 10,  delay: 0.1}  },
            exit: {x: '-60vw',opacity: 0, scale:0.2, transition : {ease: 'easeInOut',duration: 1.5}} }

            const buttonVariants = {
              hidden : {scale:0,},
              visible:{  scale:1,
                transition : {delay : 0.2, duration:2.5, type: "spring", stiffness: 20}},
              hover: {  scale: 1.05, textShadow: "0px 0px 4px ", boxShadow: "0px 0px 4px",
                transition: { yoyo:Infinity, duration: 0.5   }}}

        const NoAppointment = () => {

          const y = useMotionValue(0)
          const opacity = useTransform(
            y,  [0, -100],
            [1, 0]
          )

          const [chosen, setChosen] = useState("")
          const [date,setDate] = useState(
            // [new Date().getFullYear(), new Date().getMonth(), new Date().getDate()]

          )
          const onChange = date => { setDate([ date.getFullYear(),  date.getMonth(),  date.getDate()])}
                

console.log("new Date()",new Date(), moment()._d);

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
                          // y={y}
                          // drag="y"
                          //   whileTap={{ scale: 0.98 }}
                          //   dragConstraints={{ top: -650, bottom: 10 }} 
                            className="calandar_dates">
                            
                          <div className="calandar_dates_one">
                            
                          Date:   {moment(date).format('Do MMMM')}  </div>
                          <Calendar onChange={onChange} value={date}
                            className="calend"
                            showFixedNumberOfWeeks={true}
                            defaultView="month"
                            defaultActiveStartDate={new Date()} 
                            minDate={new Date()}
                            maxDate={moment().add(90, 'days')._d}
                            minDetail="month"
                             onClickDay={(value, event) => console.log('Clicked day: ',value, event.target)}
                             next2Label={null}
                             prev2Label={null}

                             //below we pass all the not selectable dates
                             tileDisabled={({activeStartDate, date, view }) => date.getDay() === 0}

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



                            { date? 
                            <motion.div 
                            variants={containerVariants}
                            // y={y}
                            //   drag="y"
                            //   whileTap={{ scale: 0.98 }}
                            //   dragConstraints={{ top: -650, bottom: 10 }} 
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
                            :""}


                            </div>
                  </motion.div>
                )
              }

        export default NoAppointment;