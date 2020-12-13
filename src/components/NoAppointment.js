import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {motion,useMotionValue, useTransform,} from "framer-motion";
import Calendar from 'react-calendar';
import moment from 'moment'
import axios from "axios";

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
          const opacity = useTransform(y,[0, -100],[1, 0])

          const [chosen, setChosen] = useState("")
          const [selection, setSelection] = useState()
          const [date,setDate] = useState()
          const [availabilities,setAvailabilities] = useState("")


            async function fetchData() {
              const url = "https://booking.bizec.net/api_v1/store/available_booking_date/122?days_required=15";
              let req = new Request(url
                ,{method: 'GET',
                headers: {'X-Country-Code': 'at',
                "Content-Type": "application/json"},} )
               try {
                fetch(req)
                .then(response => response.json())
                .then(data => setAvailabilities([
                  data.data.map((items) => (items.current_date)),
                  data.data.map((item2) => (item2.calendar[0]))
                ]))
                              } catch (error) {
                     console.log("error", error)}}

        useEffect(() => {fetchData()}, [])

                    
        // const handleMyclick = () => {
        //   console.log("availabilities", availabilities[0])
        //   console.log("availabilities2",availabilities[1][[availabilities[0].indexOf(selection)]].time_list)
        //   console.log("availabilities2", availabilities[1][[availabilities[0].indexOf(selection)]].time_list.includes("09:00") // returns true
        //   )
        // }
        
        const onChange = date => { setDate([ date.getFullYear(),  date.getMonth(),  date.getDate()])}        
        const onClickDay = (date) => {setSelection(date.toISOString().slice(0,-16) + date.getDate())}
             
                return (
                  <motion.div 
                      className="home_container"
                      variants={containerVariants}
                      initial="hidden" animate="visible" exit="exit"  >
                        <motion.div style={{ opacity }}>
                    <h2>No Appointment Available</h2>
                 {/* { availabilities &&  <p onClick={() => handleMyclick()}>test api calls</p>} */}
                          <p>Sorry but I cannot offer an appointment within the next hour</p>
                          <p>Please choose a suitable date from the calandar below</p>
                          </motion.div>
                
                    <div className="calendar_container">
                          <motion.div    className="calandar_dates">
                            
                         
                          <Calendar onChange={onChange} value={date}
                          // value={moment()._d}
                            className="calend"
                            firstDayOfWeek="monday"
                            showFixedNumberOfWeeks={true}
                            defaultView="month"
                            defaultActiveStartDate={new Date()} 
                            minDate={new Date()}
                            maxDate={moment().add(60, 'days')._d}
                            minDetail="month"
                             onClickDay={(event, date) => onClickDay(event, date)}
                             next2Label={null}
                             prev2Label={null}
                             tileClassName={({date}) => availabilities.includes(date.toISOString().slice(0,-14)) ? 'red' : 'blue'}
                            //  tileActive={moment().add(2, 'days')._d}
                             //below we pass all the not selectable dates //launches the fct for all dates
                            tileDisabled={({date}) =>  availabilities && !availabilities[0].includes(date.toISOString().slice(0,-14)),  
                          console.log(date)         }    />



                 { chosen && <Link to="/PrintQRCode">
                          <motion.button
                          className="home_button"
                            variants={buttonVariants}
                            whileHover="hover">
                          Confirm Date
                          </motion.button>
                      </Link>}


                            </motion.div>
                            { date? 
                            <motion.div 
                            variants={containerVariants}
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
                            <p className={ availabilities &&   !availabilities[1][[availabilities[0].indexOf(selection)]].time_list.includes("08:00")  ? "noAvailability" : "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>08:00</p>  
                            <p className={ availabilities &&   !availabilities[1][[availabilities[0].indexOf(selection)]].time_list.includes("14:00")  ? "noAvailability" : "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>14:00</p>  
                          </div>
                          <div className="calendar_hours_one">
                            <p className={  availabilities &&  !availabilities[1][[availabilities[0].indexOf(selection)]].time_list.includes("09:00")  ? "noAvailability" : "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>09:00</p>  
                            <p className={  availabilities &&  !availabilities[1][[availabilities[0].indexOf(selection)]].time_list.includes("15:00")  ? "noAvailability" : "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>15:00</p>  
                            </div>
                          <div className="calendar_hours_one">
                             <p className={   availabilities && !availabilities[1][[availabilities[0].indexOf(selection)]].time_list.includes("10:00")  ? "noAvailability" : "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>10:00</p>  
                             <p className={  availabilities &&  !availabilities[1][[availabilities[0].indexOf(selection)]].time_list.includes("16:00")  ? "noAvailability" : "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>16:00</p>  
                              </div>
                          <div className="calendar_hours_one">
                             <p className={  availabilities &&  !availabilities[1][[availabilities[0].indexOf(selection)]].time_list.includes("11:00")  ? "noAvailability" : "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>11:00</p>  
                             <p className={ availabilities &&   !availabilities[1][[availabilities[0].indexOf(selection)]].time_list.includes("17:00")  ? "noAvailability" : "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>17:00</p>  
                              </div>
                          <div className="calendar_hours_one">
                             <p className={ availabilities &&   !availabilities[1][[availabilities[0].indexOf(selection)]].time_list.includes("12:00")  ? "noAvailability" : "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>12:00</p>  
                             <p className={  availabilities &&  !availabilities[1][[availabilities[0].indexOf(selection)]].time_list.includes("18:00")  ? "noAvailability" : "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>18:00</p>  
                              </div>
                          <div className="calendar_hours_one">
                             <p className={ availabilities &&   !availabilities[1][[availabilities[0].indexOf(selection)]].time_list.includes("13:00")  ? "noAvailability" : "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>13:00</p>  
                             <p className={  availabilities &&  !availabilities[1][[availabilities[0].indexOf(selection)]].time_list.includes("19:00")  ? "noAvailability" : "activated"} onClick={(e) => {setChosen(e.target.textContent)}}>19:00</p>  
                              </div>
                            </motion.div>
                            :""}


                            </div>
                  </motion.div>
                )
              }

        export default NoAppointment;