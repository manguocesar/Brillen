import React, {useState,useEffect} from 'react';
import { useHistory,Link } from 'react-router-dom';
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
                visible: {   opacity:1,   scale: 1.4, color: "rgb(30, 250, 30)", x: 50,
                      transition: {type : 'spring', stiffness: 10,  delay: 0.5}  },
                exit: {opacity: 0, scale: 0.01, color: "black" },
                hover: { scale: 1.5, x:70,   textShadow: "0.2vh 0.2vh 0.8vh ",   
                transition: {  yoyo:Infinity,  duration: 0.4  }} }

            const popVariants = {
              hidden: { scale: 0.1, y: '10vw' },
              visible: {   scale:1, y: '0vw' , 
                  transition: {type : 'spring', stiffness: 10,  delay: 0.1}  },
              exit: {scale: 0.1, y: '10vw' , transition : {ease: 'easeInOut'}},
              hover: { scale: 1.1,    textShadow: "0px 0px 8px ",   boxShadow: "0px 0px 8px",
                  transition: {  yoyo:Infinity,  duration: 0.5  }} }

            const topDisapear = { exit: { opacity:0,scale:0.1, transition : {duration: 0.4,ease: 'easeIn'}} }


          const Questionaire = ({savedData,setSavedData}) => {

            const onSubmit = (data) => {console.log("data",data)}

          const nextPage = useHistory()
console.log("nextPage",nextPage);
            
            const {register, handleSubmit,errors} = useForm()



            const handleStep = () => {
              


                if (step === 4 ) 
              {
                // nextPage.push('/NoAppointment');
                setStep(0)
                }
                else 
              {setStep(step + 1)}
            }


            const [step, setStep] = useState(1)

            const [computerTime, setComputerTime] = useState(0)
            const [carTravel, setCarTravel] = useState(0)
            const [clarityImportant, setClarityImportant] = useState(0)
            const [eyeSensitive, setEyeSensitive] = useState(0)


                useEffect(() => {
                  setSavedData(true)
                  }, [])

            return (
                  <motion.div className="home_container"
                      variants={containerVariants}
                      initial="hidden" animate="visible" exit="exit"
                      // drag="y"
                      // whileTap={{ opacity: 0.6 }}
                      // dragConstraints={{ top: -500, bottom: 10 }}
                        >

                <motion.h2 variants={topDisapear}>Questionaire </motion.h2>
                <motion.p variants={topDisapear}>Please give us some input about your visual behaviour.</motion.p>
                <motion.p variants={topDisapear}>Then we can recommend the best product for you</motion.p>
            

                <div className="Questionaire_Form">

                <form className="Your_Data_Form"  onSubmit={handleSubmit(onSubmit)} >
        {   step === 1 ? <><motion.p variants={topDisapear} >
          How much time do you spend in front of your computer, table and/or smartphone?
              </motion.p>
                  <motion.div variants={topDisapear}  className="Questionaire_Form_One">
                    <div  className={ computerTime === 1 ? "Frames_Container_divGreen": "Frames_Container_div"} >  <motion.input style={{height:"3vh", width:"3vh"}} onClick={() => setComputerTime(1)} name="computerTime" type="radio" value="<1H" ref={register} />
                            <motion.p>Less than an hour</motion.p></div>
                   <div  className={ computerTime === 2 ? "Frames_Container_divGreen": "Frames_Container_div"}>     <motion.input style={{height:"3vh", width:"3vh"}} onClick={() => setComputerTime(2)} name="computerTime" type="radio" value="<4H" ref={register} />
                            <motion.p>Up to 4 hours</motion.p></div>
                  <div className={ computerTime === 3 ? "Frames_Container_divGreen": "Frames_Container_div"}>   <motion.input style={{height:"3vh", width:"3vh"}} onClick={() => setComputerTime(3)}  name="computerTime" type="radio" value=">4H" ref={register} />
                            <motion.p>More than 4 hours</motion.p></div>
                  </motion.div></> : ""}




                  {   step === 2 ? <><motion.p variants={topDisapear} >Do you travel a lot by car?</motion.p>
                  <motion.div variants={topDisapear}   className="Questionaire_Form_One">
                  <div  className={ carTravel === 1 ? "Frames_Container_divGreen": "Frames_Container_div"} > 
                              <input style={{height:"3vh", width:"3vh"}}  onClick={() => setCarTravel(1)} name="carTravelling" type="radio" value="Yes" ref={register} />
                            <p>Yes</p></div>
                 <div  className={ carTravel === 2 ? "Frames_Container_divGreen": "Frames_Container_div"} >   
                 <input style={{height:"3vh", width:"3vh"}} onClick={() => setCarTravel(2)} name="carTravelling" type="radio" value="No" ref={register} />
                            <p>No</p></div>
                  </motion.div></> : ""}


                  {   step === 3 ? <> <p>How important is a clear image in the peripheral areas of the glasses to you?</p>
                  <div className="Questionaire_Form_One">
                  <div  className={ clarityImportant === 1 ? "Frames_Container_divGreen": "Frames_Container_div"} > 
                              <input style={{height:"3vh", width:"3vh"}} onClick={() => setClarityImportant(1)} name="clearPeripheral" type="radio" value="Important" ref={register} />
                            <p>Important</p></div>
                            <div  className={ clarityImportant === 2 ? "Frames_Container_divGreen": "Frames_Container_div"} >    
                             <input style={{height:"3vh", width:"3vh"}} onClick={() => setClarityImportant(2)} name="clearPeripheral" type="radio" value="Neutral" ref={register} />
                            <p>Neutral</p></div>
                            <div  className={ clarityImportant === 3 ? "Frames_Container_divGreen": "Frames_Container_div"} >    
                            <input style={{height:"3vh", width:"3vh"}} onClick={() => setClarityImportant(3)} name="clearPeripheral" type="radio" value="NotImportant" ref={register} />
                            <p>Not important</p></div>
                            
                  </div> </> : ""}

                  {   step === 4 ? <> <p>Are your eyes light sensitive?</p>
                  <div className="Questionaire_Form_One">
                  <div  className={ eyeSensitive === 1 ? "Frames_Container_divGreen": "Frames_Container_div"} > 
                              <input style={{height:"3vh", width:"3vh"}} onClick={() => setEyeSensitive(1)} name="lightSensitive" type="radio" value="Yes" ref={register} />
                            <p>Yes</p>   </div>
                  <div  className={ eyeSensitive === 2 ? "Frames_Container_divGreen": "Frames_Container_div"} > 
                              <input style={{height:"3vh", width:"3vh"}} onClick={() => setEyeSensitive(2)} name="lightSensitive" type="radio" value="No" ref={register} />
                            <p>No</p>   </div>
                  <div  className={ eyeSensitive === 3 ? "Frames_Container_divGreen": "Frames_Container_div"} > 
                              <input style={{height:"3vh", width:"3vh"}} onClick={() => setEyeSensitive(3)} name="lightSensitive" type="radio" value="Poor" ref={register} />
                            <p>Poor</p>   </div>
                  </div> </> : ""}

                   {   step === 5 ? <><input type="submit" name="submitfield" ref={register} /> </>: <></>} 
             
                  </form>
                  </div>
                  

                  { step === 0 ?<> <div className="time_selection"> 
                                <Link to="/QRCodeQueueNumber">
                                  <motion.button  
                                            className="home_button"
                                            variants={popVariants}
                                            whileHover="hover">
                                              Appointment Available
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
                                      Make appointment now
                              </motion.button></Link>
                               </> : <></> }

                  
              { step === 1 ? <motion.button
                          onClick={() => setStep(step + 1)}
                          className="home_button"
                            variants={popVariants}
                            whileHover="hover">
                          Continue
                      </motion.button> : <></> }
            
              { step > 1 ? 
                 (<>
                 <motion.button
             onClick={() => setStep(step - 1)}
             className="home_button"
               variants={popVariants}
               whileHover="hover">
             Go back
         </motion.button>
         <motion.button
             onClick={() => handleStep() }
             className="home_button"
               variants={popVariants}

               whileHover="hover">
             Continue
         </motion.button></>)  : (<></>) }


                </motion.div>  )  }

            export default Questionaire;