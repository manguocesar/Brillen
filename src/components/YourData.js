import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import "react-simple-keyboard/build/css/index.css";
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
                      hidden : {scale:0},
                      visible: {scale:1, transition : {delay : 0.2, duration:2.5, type: "spring", stiffness: 20}},
                      hover: {scale: 1.05, textShadow: "0px 0px 4px ", boxShadow: "0px 0px 4px", 
                            transition: { yoyo:Infinity, duration: 0.3   }}}  

                  // const topDisapear = { exit: {y: -1000, opacity:0,scale:0.1, transition : {duration: 0.4,ease: 'easeIn'}} }



        const YourData = ({setOpenKeyboard, setActiveInput, setSavedData,setInputName, setFirstName, inputs, onChangeAll, setInputs,setFamilyName}) => {

            useEffect(() => {setSavedData(false)}, [])

            const onSubmit = (data) => {console.log("data",data)}

            const [gender, setGender] = useState()
            const [noMobile, setNoMobile] = useState(false)

           const handleKeyboard = (arg)=> {
            setActiveInput(arg);
             setOpenKeyboard(true)
           }

           
  const {register, handleSubmit,errors} = useForm()

            return (

              

              <motion.div className="home_container"
            
                 variants={containerVariants}
                 initial="hidden" animate="visible" exit="exit"
                 drag="y"
                 whileTap={{ opacity: 0.8 }}
                 dragConstraints={{ top: -650, bottom: 10 }}  >

                <h2 style={{width:"40%", marginLeft: "10px"}}>Your Data</h2>

         

 


                      <form className="Your_Data_Form"  onSubmit={handleSubmit(onSubmit)} >
                        <motion.div  className="Your_Data_Field_One">
                         
                            <p className="Title_Field">Gender:</p>
                            <div  className={gender === 1 ? "Your_Data_Field_One_gender_active" : "Your_Data_Field_One_gender" }    >
                              <input onClick={() => setGender(1)} style={{height:"40px", width:"40px"}}  name="Gender" type="radio" value="Man" ref={register} />
                             
                            <p>Mr.</p> </div>
                              <div  className={gender === 2 ? "Your_Data_Field_One_gender_active" : "Your_Data_Field_One_gender" }>
                              <input onClick={ () => setGender(2)} style={{height:"40px", width:"40px"}}  name="Gender" type="radio" value="Woman" ref={register} />
                            <p>Mrs.</p>
                            </div>
                        </motion.div>

                        <motion.div  className="Your_Data_Field_One">
                        <p className="Title_Field">Title:</p>
                        <select name="title" >
                            <option value="Doctor">Doctor</option>
                            <option value="Master">Master</option>
                            <option value="President">President</option>
                        </select>
                        </motion.div>

                        <motion.div  className="Your_Data_Field_Two">
                          <div className="Your_Data_Field_Left_One">
                              <div className="Your_Data_Field_Left_Name">
                                <p className="Title_Field">Name</p>


                   


                                <input onFocus={() => handleKeyboard("Name")  } 
                                value={inputs["Name"] || ""}
                                 onChange={(e)=> setFamilyName(e.target.value)}
                                 maxLength='15'  name="Name" type="text"  placeholder="Name"
                                  ref={register({minLength:8})} /> 

                                {/* {errors.Name && 
                                <motion.span  variants={invalidVariants}
                                initial="hidden" animate="visible" exit="exit">Invalid</motion.span>} */}
                              </div>

                                <div className="Your_Data_Field_Left_Name">
                                    <p className="Title_Field">Adress</p>
                                    <input  type="text" onFocus={() => handleKeyboard("Adress")  } 
                                value={inputs["Adress"] || ""}
                                 onChange={(e)=> setFamilyName(e.target.value)}
                                    maxLength='25' name="Adress"  placeholder="Adress" ref={register({minLength:8})} />
                                  </div>

                                  <div className="Your_Data_Field_Left_Name">
                                  <p className="Title_Field">ZIP Code</p>

                                 
                                


                                  <input value={inputs["ZIPCode"] || ""} onFocus={() => handleKeyboard("ZIPCode")  }  maxLength='12'  type="text" name="ZIPCode"  placeholder="ZIP Code" ref={register} />
                                </div>
                          </div>

                          <div className="Your_Data_Field_Left_Two">
                          <div className="Your_Data_Field_Left_Name">
                                <p className="Title_Field">Surname</p>
                                <input onChange={(e)=> setFirstName(e.target.value)} value={inputs["Surname"] || ""} onFocus={() => handleKeyboard("Surname")  }
                                 maxLength='15' name="Surname" type="text" 
                                  placeholder="Surname" ref={register({minLength:4})} />
                                </div>

                                <div className="Your_Data_Field_Left_Name">
                                <p className="Title_Field">Country</p>
                                
                                <select name="Country" >
                                    <option value="Germany">Germany</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Netherland">Netherland</option>
                                    <option value="France">France</option>
                                </select>
                                
                                {/* <input maxLength='15' name="Country" placeholder="Country" 
                                ref={register({required:true,minLength:3})} /> */}
                                </div>
                                 
                                <div className="Your_Data_Field_Left_Name">
                                  <p className="Title_Field">City</p>
                                  <input maxLength='15' name="City"  placeholder="City" ref={register({minLength:3})} value={inputs["City"] || ""} onFocus={() => handleKeyboard("City")  }
                                   />
                                  </div>
                           </div>                    
                      </motion.div>



                        <motion.div  className="Your_Data_Field_Three">
                            <div>
                              <p className="Title_Field" style={{flexGrow:1, textAlign:"left"}}>Date of Birth</p>
                              <p  className="Title_Field" style={{flexGrow:1, textAlign:"left"}}>E-Mail</p>
                              <p  className="Title_Field" style={{flexGrow:1, textAlign:"left"}}>Mobile Number</p>

                            </div>

                            <div className="Your_Data_Field_Three_Right" >
                             
                              <input  defaultValue="1980-10-20" max="2017-12-20" min="1920-10-20" name="DateOfBirth" type="date" placeholder="" ref={register} />
                              <input value={inputs["E-Mail"] || ""} onFocus={() => handleKeyboard("E-Mail")} maxLength='15'  name="E-Mail" type="email" placeholder="E-Mail" ref={register({minLength:8})} />
                              <input value={inputs["Mobile"] || ""} onFocus={() => handleKeyboard("Mobile")} maxLength='15' name="Mobile"  type="tel" placeholder="123-45-678"  ref={register({minLength:6})} /> 
                            </div>
                       </motion.div>



                      <motion.div   className="Your_Data_Field_Four">
                        <p>Warning ! without active phone number not all functions will be available.</p>
                      </motion.div>


                     
                      <div className="Your_Data_Field_Five"> 
                          <p> <input  style={{height:"40px", width:"40px"}} name="RGPD" type="radio" value="noMobile" ref={register}  onClick={() => setNoMobile(!noMobile)} /></p>
                          { noMobile ? 
                          <>
                          <p>"I have my mobile with me"</p> 
                         
                     </>     
                          
                          
                          : 
                          <><p>"I do not have my mobile with me"</p>
                           <ul style={{display:"flex"}}>
                          <Link to="/Questionaire">
                      <motion.button
                        className="home_button"
                        variants={buttonVariants}
                        whileHover="hover">
                          Send SMS
                      </motion.button>
                  </Link>
                  </ul></>
                          
                          }
                      </div>

                      { noMobile ? <motion.div  className="Your_Data_Field_Three">
                            <div>
                              <p  className="Title_Field" style={{flexGrow:1, textAlign:"left"}}>Landline</p>
                              <p  className="Title_Field" style={{flexGrow:1, textAlign:"left"}}>Passport / ID Card</p>
                            </div>

                            <div className="Your_Data_Field_Three_Right" >
                              <input maxLength='18'  name="Landline" type="tel" placeholder="Landline" ref={register({required:true,minLength:8})} />
                              <input maxLength='18'  type="text" placeholder="12CK-4567-8910"  ref={register({required:true,minLength:8})} /> 
                            </div>
                       </motion.div>
                        : <> <h2 style={{width:"40%"}}>SMS Verification</h2>
                        <div className="Your_Data_Field_Six">
                                   <p>Please enter SMS verification code below</p>
                                   <input value={inputs["SMScode"] || ""} onFocus={() => handleKeyboard("SMScode")} ref={register} type="tel" name="SMScode" placeholder="123-45-678" /> 
                                 </div></>
                      }



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

                        <input type="submit" name="submitfield" ref={register} />


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

            
                      
                      <ul style={{display:"flex"}}>
                      <Link to="/Questionaire">
                  <motion.button
                    className="home_button"
                    variants={buttonVariants}
                    whileHover="hover">
                      (re)Send SMS
                  </motion.button>
              </Link>

              
              </ul>

          </motion.div>
        )
      }

    export default YourData;