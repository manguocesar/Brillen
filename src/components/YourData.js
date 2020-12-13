import React, {useState,useEffect} from 'react';
import {motion} from "framer-motion";
import {useForm} from "react-hook-form"
import { useHistory } from 'react-router-dom';

                  const containerVariants = {
                      hidden: {  opacity: 0,   x:'100vw'   },
                      visible: { opacity:1, x: 0,
                      transition: {type : 'spring',  stiffness: 10,}  },
                      exit: {x: '-100vw', transition : {duration: 2, ease: 'easeInOut'}}  }

                  const buttonVariants = {
                      hidden : {scale:0},
                      visible: {scale:1, transition : {delay : 0.2,  type: "spring", stiffness: 20}},
                      hover: {scale: 1.05, textShadow: "0px 0px 4px ", boxShadow: "0px 0px 4px",
                            transition: { yoyo:Infinity, duration: 0.3   }}}

        const YourData = ({setOpenKeyboard, setActiveInput, setSavedData, setFirstName, inputs, handleName}) => {

            useEffect(() => {setSavedData(false)}, [])

            const onSubmit = (data) => {console.log("data",data); setFirstName(data.Name + " " + data.Surname)}

            const [gender, setGender] = useState()
            const [noMobile, setNoMobile] = useState(false)
            const [SMSSent, setSMSSent] = useState(0)

           const handleKeyboard = (arg)=> {
            setActiveInput(arg);
             setOpenKeyboard(1)
           }

           const handleMobile = () => { setSMSSent(0); setNoMobile(!noMobile)}

           const handleNextPage = () =>{ 
             histoire.push("/Questionaire"); 
             handleSubmit(onSubmit);
             }

           let histoire = useHistory()
            const {register, handleSubmit,errors} = useForm()

            return (



              <motion.div className="home_container"
                 variants={containerVariants}
                 initial="hidden" animate="visible" exit="exit">
                <h2 style={{width:"40%"}}>Your Data</h2>

                      <form className="Your_Data_Form"  onSubmit={handleSubmit(onSubmit)} >
                        <motion.div  className="Your_Data_Field_One">

                            <p className="Title_Field">Gender:</p>
                            <div  className={gender === 1 ? "Your_Data_Field_One_gender_active" : "Your_Data_Field_One_gender" }    >
                              <input onClick={() => setGender(1)} style={{height:"3vh", width:"3vh"}}  name="Gender" type="radio" value="Man" ref={register} />

                            <p>Mr.</p> </div>
                              <div  className={gender === 2 ? "Your_Data_Field_One_gender_active" : "Your_Data_Field_One_gender" }>
                              <input onClick={ () => setGender(2)} style={{height:"3vh", width:"3vh"}}  name="Gender" type="radio" value="Woman" ref={register} />
                            <p>Mrs.</p>
                            </div>
                        </motion.div>

                        <motion.div  className="Your_Data_Field_One">
                        <p className="Title_Field">Title:</p>
                        <select  ref={register}  name="title" >
                            <option value="--Title--">--Title--</option>
                            <option value="Di.">Di.</option>
                            <option value="Dipl.">Dipl.</option>
                            <option value="Dr.">Dr.</option>
                            <option value="Ing.">Ing.</option>
                            <option value="Mag.">Mag.</option>
                        </select>
                        </motion.div>

                        <motion.div  className="Your_Data_Field_Two">
                          <div className="Your_Data_Field_Left_One">
                              <div className="Your_Data_Field_Left_Name">
                                <p className="Title_Field">Name</p>

                                <input onFocus={() => handleKeyboard("Name")  }
                                value={inputs["Name"] || ""}
                               
                                 maxLength='15'  name="Name" type="text"  placeholder="Name"
                                  ref={register
                                  // ({minLength:8})
                                  } />

                                {/* {errors.Name &&
                                <motion.span  variants={invalidVariants}
                                initial="hidden" animate="visible" exit="exit">Invalid</motion.span>} */}
                              </div>

                                <div className="Your_Data_Field_Left_Name">
                                    <p className="Title_Field">Address</p>
                                    <input  type="text" onFocus={() => handleKeyboard("Address")  }
                                value={inputs["Address"] || ""}
                                
                                    maxLength='25' name="Address"  placeholder="Address" ref={register} />
                                  </div>

                                  <div className="Your_Data_Field_Left_Name">
                                  <p className="Title_Field">ZIP Code</p>

                                  <input value={inputs["ZIPCode"] || ""} onFocus={() => handleKeyboard("ZIPCode")  }  maxLength='12'  type="text" name="ZIPCode"  placeholder="ZIP Code" ref={register} />
                                </div>
                          </div>

                          <div className="Your_Data_Field_Left_Two">
                          <div className="Your_Data_Field_Left_Name">
                                <p className="Title_Field">Surname</p>
                                <input  value={inputs["Surname"] || ""} onFocus={() => handleKeyboard("Surname")  }  onChange={(e)=> handleName(e)}
                                 maxLength='15' name="Surname" type="text"
                                  placeholder="Surname" ref={register} />
                                </div>

                                <div className="Your_Data_Field_Left_Name">
                                <p className="Title_Field">Country</p>

                                <select ref={register}  name="Country" >
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
                                  <input maxLength='15' name="City"  placeholder="City" ref={register} value={inputs["City"] || ""} onFocus={() => handleKeyboard("City")  }
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
                              <input value={inputs["E_Mail"] || ""} onFocus={() => handleKeyboard("E_Mail")} maxLength='15'  name="E_Mail" type="email" placeholder="E-Mail" ref={register} />
                              <input value={inputs["Mobile"] || ""} onFocus={() => handleKeyboard("Mobile")} maxLength='15' name="Mobile"  type="tel" placeholder="123-45-678"  ref={register} />
                            </div>
                       </motion.div>



                      <motion.div   className="Your_Data_Field_Four">
                        <p>Warning ! without active phone number not all functions will be available.</p>
                      </motion.div>



                      <div className="Your_Data_Field_Five">
                          <p> <input  style={{height:"3vh", width:"3vh"}} name="userHasMobile?" type="radio" value="noMobile" ref={register}  onClick={() => handleMobile() } /></p>
                          { noMobile ?
                          <>   <p>"I have my mobile with me"</p>   </>
                             :
                          <><p>"I do not have my mobile with me"</p>
                           <ul style={{display:"flex"}}>

                      <motion.button
                        className="home_button"
                        variants={buttonVariants}
                        whileHover="hover"
                        onClick={() => setSMSSent(SMSSent +1)}>

                          Send SMS
                      </motion.button>

                  </ul>
                 {SMSSent === 1 &&  <motion.span style={{fontSize:"2vh"}} variants={buttonVariants}>An SMS was sent</motion.span> }
                 {SMSSent > 1 &&  <motion.span style={{fontSize:"2vh"}} variants={buttonVariants}>SMS was re-sent</motion.span> }
                        </> }   </div>


                    { SMSSent !== 0 && <> <h2 style={{width:"40%"}}>SMS Verification</h2>
                        <motion.div variants={buttonVariants} className="Your_Data_Field_Six">
                                   <p>Please enter SMS verification code below</p>
                                   <input value={inputs["SMScode"] || ""} onFocus={() => handleKeyboard("SMScode")} 
                                   ref={register} type="tel" name="SMScode" placeholder="123-45-678" />
                                 </motion.div>
                                    <motion.button
                    onClick={() => handleNextPage() }
                    className="home_button"
                    variants={buttonVariants}
                    whileHover="hover">
                      Confirm SMS and Submit Information
                  </motion.button>      </>}
                    { noMobile && <><motion.div  className="Your_Data_Field_Three">
                            <div>
                              <p  className="Title_Field" style={{flexGrow:1, textAlign:"left"}}>Landline</p>
                              <p  className="Title_Field" style={{flexGrow:1, textAlign:"left"}}>Passport / ID Card</p>
                            </div>

                            <div className="Your_Data_Field_Three_Right" >
                              <input  value={inputs["Landline"] || ""} onFocus={() => handleKeyboard("Landline")} maxLength='18'  name="Landline" type="tel" placeholder="Landline" ref={register} />
                              <input value={inputs["passport"] || ""} onFocus={() => handleKeyboard("passport")} maxLength='18'  type="text"  name="passport" placeholder="12CK-4567-8910"  ref={register} />
                            </div>
                          </motion.div>
                       <motion.button
                    onClick={() => handleNextPage() }
                    className="home_button"
                    variants={buttonVariants}
                    whileHover="hover">
                    Submit Information
                  </motion.button></>  }  
              </form>
          </motion.div>
        )
      }

    export default YourData;