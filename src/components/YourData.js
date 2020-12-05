import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import {useForm} from "react-hook-form"



                  const containerVariants = {
                    hidden: {  opacity: 0,   x:'100vw'   },
                    visible: { opacity:1, x: 0,
                    transition: {type : 'spring',  stiffness: 10,}  },
                    exit: {x: '-100vw', transition : {duration: 2, ease: 'easeInOut'}}  }

                  const invalidVariants = {
                          hidden: { opacity: 0, scale:0.1 ,color:"black", },
                          visible: {   opacity:1, scale:1.5,color:"red", 
                            transition: {type : 'spring', stiffness: 10,  delay: 0.1}  },
                          exit: {opacity: 0, scale:0.1 ,color:"black", transition : {ease: 'easeInOut'}} }

                   const buttonVariants = {   
                            hover: { scale: 1.2,   textShadow: "0px 0px 8px ", boxShadow: "0px 0px 8px",
                            transition: {   yoyo:Infinity, duration: 0.3}   } }   

                            const topDisapear = { exit: {y: -1000, opacity:0,scale:0.1, transition : {duration: 0.4,ease: 'easeIn'}} }



        const YourData = ({setSavedData }) => {

          useEffect(() => {
            setSavedData(false)    }, [])

            const {register, handleSubmit,errors} = useForm()

            const onSubmit = (data) => {
              console.log("data",data);
            }

            return (
              <motion.div className="home_container"
                 variants={containerVariants}
                 initial="hidden" animate="visible" exit="exit"
                 drag="y"
                 whileTap={{ opacity: 0.6 }}
                 dragConstraints={{ top: -650, bottom: 10 }}  >

                <h2 style={{width:"40%", marginLeft: "10px"}}>Your Data</h2>
 
                      <form className="Your_Data_Form"  onSubmit={handleSubmit(onSubmit)}>
                        <motion.div variants={topDisapear} className="Your_Data_Field_One">
                            <p className="Title_Field">Gender:</p>
                              <input  name="Gender" type="radio" value="Man" ref={register} />
                            <p>Mr.</p>
                              <input checked name="Gender" type="radio" value="Woman" ref={register} />
                            <p>Mrs.</p>
                        </motion.div>


                        <motion.div variants={topDisapear} className="Your_Data_Field_Two">
                          <div className="Your_Data_Field_Left_One">
                              <div className="Your_Data_Field_Left_Name">
                                <p className="Title_Field">Name</p>
                                <input maxLength='15'  name="Name" type="text"  placeholder="Name" ref={register({required:true,minLength:8})} />
                                {errors.Name && 
                                <motion.span  variants={invalidVariants}
                                initial="hidden" animate="visible" exit="exit">Invalid</motion.span>}
                              </div>

                                <div className="Your_Data_Field_Left_Name">
                                  <p className="Title_Field">Adress</p>
                                    <input maxLength='25' name="Adress"  placeholder="Adress"ref={register({required:true,minLength:8})} />
                                  </div>

                                  <div className="Your_Data_Field_Left_Name">
                                  <p className="Title_Field">ZIP Code</p>
                                <input maxLength='12' name="ZIPCode"  placeholder="ZIP Code"ref={register} />
                                </div>
                          </div>

                          <div className="Your_Data_Field_Left_Two">
                          <div className="Your_Data_Field_Left_Name">
                                <p className="Title_Field">Surname</p>
                                <input maxLength='15' name="Surname" type="text"  placeholder="Surname" ref={register({required:true,minLength:4})} />
                                </div>

                                <div className="Your_Data_Field_Left_Name">
                                <p className="Title_Field">Country</p>
                                <input maxLength='15' name="Country" placeholder="Country" ref={register({required:true,minLength:3})} />
                                </div>
                                 
                                <div className="Your_Data_Field_Left_Name">
                                  <p className="Title_Field">City</p>
                                  <input maxLength='15' name="City"  placeholder="City"ref={register({required:true,minLength:3})} />
                                  </div>
                           </div>                    
                      </motion.div>



                        <motion.div variants={topDisapear} className="Your_Data_Field_Three">
                            <div>
                              <p className="Title_Field" style={{flexGrow:1, textAlign:"left"}}>Date of Birth</p>
                              <p  className="Title_Field" style={{flexGrow:1, textAlign:"left"}}>E-Mail</p>
                              <p  className="Title_Field" style={{flexGrow:1, textAlign:"left"}}>Mobile Number</p>

                            </div>

                            <div   className="Your_Data_Field_Three_Right" >
                             
                              <input max="2020-11-20"  name="DateOfBirth" type="date" placeholder="" ref={register({required:true})} />
                              <input maxLength='15'  name="E-Mail" type="email" placeholder="E-Mail" ref={register({required:true,minLength:8})} />
                            
                              <input maxLength='15' required type="tel" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" ref={register({required:true,minLength:6})} /> 
                            </div>
                       </motion.div>



                      <motion.div   className="Your_Data_Field_Four">
                        <p>Warning ! without active phone number not all functions will be available.</p>
                      </motion.div>


                     
                      <div className="Your_Data_Field_Five"> 
                          <p> <input name="RGPD" type="radio" value="Man" ref={register} /></p>
                          <p>"I dont have my mobile with me"</p>
                      </div>


                      {/* <ul style={{display:"flex"}}>
                <Link to="/Questionaire">
                  <motion.button
                    className="home_button"
                    variants={buttonVariants}
                    whileHover="hover">
                      Accept
                  </motion.button>
                </Link>

                <Link to="/Questionaire">
                    <motion.button
                      className="home_button"
                      variants={buttonVariants}
                      whileHover="hover">
                      Edit
                    </motion.button>
                </Link>
              </ul> */}

              {/* <input type="submit" ref={register} /> */}


                      {/* <div className="Your_Data_Field_Six">
                          <p  className="Title_Field">Area Prefix</p>
                              <p ><input  name="AreaPrefix" placeholder="Area Prefix"ref={register} /></p>
                              <p className="Title_Field">Landline</p>
                          <p> <input name="Landline" placeholder="Landline"ref={register} /></p>
                      </div> */}

                      {/* <div  className="Your_Data_Field_Seven">
                        <p className="Title_Field">ID card Number</p>
                        <p style={{display:"flex", flexGrow:1, }}>
                        <input style={{flexGrow:1,}} name="IDCard"  placeholder="IDCard" ref={register} />
                        </p>
                      </div> */}

                    
             </form>

             <h2 style={{width:"40%"}}>SMS Verification</h2>
             <div className="Your_Data_Field_Six">
                        <p>Please enter SMS verification code below</p>
                        <input  required type="tel" placeholder="123-45-678" /> 
                      </div>
                      
                      <ul style={{display:"flex"}}>
                      <Link to="/Questionaire">
                  <motion.button
                    className="home_button"
                    variants={buttonVariants}
                    whileHover="hover">
                      Accept
                  </motion.button>
              </Link>

              
                    {/* <motion.button
                      className="home_button"
                      variants={buttonVariants}
                      whileHover="hover">
                      Resend SMS
                    </motion.button>
               */}
              </ul>

          </motion.div>
        )
      }

    export default YourData;