import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {motion} from "framer-motion";

//images
import RotatingLens from "../image/ConsultationLenses/Animation_Lens_Rotation.gif"
import NoOptimisation from "../image/ConsultationLenses/NoOptimisation.png"
import LongDistanceOptimisation from "../image/ConsultationLenses/Long_distance_optimisation.png"
import CloseUpOptimisation from "../image/ConsultationLenses/Close_up_optimisation.png"
import Normal from "../image/ConsultationLenses/Normal.png"
import ThinOne from "../image/ConsultationLenses/thin_1.png"
import ThinTwo from "../image/ConsultationLenses/thin_2.png"
import ThinThree from "../image/ConsultationLenses/thin_3.png"
import HardCoat from "../image/ConsultationLenses/hard_coat.png"
import ReflexTwo from "../image/ConsultationLenses/reflex_2.png"
import Lotus from "../image/ConsultationLenses/lotus.png"
import BlueCutTwo from "../image/ConsultationLenses/blue_cut2.png"
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
                  hover: {  scale: 1.05, textShadow: "0px 0px 1vh ", boxShadow: "0px 0px 1vh",
                    transition: { yoyo:Infinity, duration: 0.5   }}}

              const ConsultationLenses = ({frames}) => {

                const [tintingChosen, setTintingChosen] = useState(false)

                const [absorbtion, setAbsorbtion] = useState(20)

                //activated and colored green states
                const [chosenColor, setChosenColor] = useState(Brown)
                const [chosenTinting, setChosenTinting] = useState(2)

const handleChosenTinting = (value)=> {
  setChosenTinting(value)
  console.log("chosenTinting",chosenTinting);
}

let arrayLenses = [Brown,Grey,Green,Brown]

                const [longDistance, setLongDistance] = useState(false)
                const [closeDistance, setCloseDistance] = useState(false)
                const [glassQuality, setGlassQuality] = useState(1)
                const [antiReflexion, setAntiReflexion] = useState(1)
               

                        return (
                          <motion.div className="base_container"
                            variants={containerVariants}
                            initial="hidden" animate="visible" exit="exit"  >

                      <motion.div
                        drag="y"
                        whileTap={{ scale: 0.99, opacity:0.9 }}
                        dragConstraints={{ top: -1500, bottom: 20 }}
                        className="lenses_choice_container">

                            <h2>Consultation Lenses</h2>
                            <p className="QRCode_Text">
                              Based on your information about your vision and the results of the eye test, 
                              we recommend the following lens type:</p>
                            
                            <div style={{marginTop:"1vh"}}>
                                <h2>Your glassess in detail</h2>
                                <motion.img  src={RotatingLens} alt="" 
                                  style={{width:"32vh",height:"20vh", marginBottom:"1vh",}}/>
                           </div>



                        <div className="Long_Distance_Optimisation_Container">
                          <h3>Long distance optimisation</h3>
                              <div className="Long_Distance_Optimisation_lens">
                                <div  className={longDistance ? "typeGlasses" : "typeGlassesActive"}
                                      onClick={(e) => {setLongDistance(false)}} >
                                  <h4>No design optimization of far vision area</h4>
                                  <img src={NoOptimisation} alt="" style={{width:"20vh",height:"9vh"}}/>
                                  <h4>XX€</h4>
                                </div>

                                <div className={longDistance ? "typeGlassesActive" : "typeGlasses"}
                                      onClick={(e) => {setLongDistance(true)}}
                                    >
                                  <h4>Optimized, wider far vision area</h4>
                                  <img src={LongDistanceOptimisation} alt="" style={{width:"20vh",height:"9vh"}}/>
                                  <h4>XX€</h4>
                              </div>
                            </div>
                        </div>

                        <div className="Long_Distance_Optimisation_Container">
                          <h3>Close distance optimisation</h3>
                              <div className="Long_Distance_Optimisation_lens">
                                <div className={closeDistance ? "typeGlasses" : "typeGlassesActive"}
                                      onClick={(e) => {setCloseDistance(false)}}>
                                  <h4>No damage optimization of near vision area</h4>
                                  <img src={NoOptimisation} alt="" style={{width:"20vh",height:"9vh"}}/>
                                  <h4>XX€</h4>
                                </div>

                                <div className={closeDistance ? "typeGlassesActive" : "typeGlasses"}
                                      onClick={(e) => {setCloseDistance(true)}}>
                                  <h4>Optimized, wider near vision area</h4>
                                  <img src={CloseUpOptimisation} alt="" style={{width:"20vh",height:"9vh"}}/>
                                  <h4>XX€</h4>
                              </div>
                            </div>
                        </div>

                        <div className="Long_Distance_Optimisation_Container">
                          <h3>Glass quality</h3>
                              <div className="Long_Distance_Optimisation_lens">
                                <div className={glassQuality === 1 ? "typeGlassesActive" : "typeGlasses"}
                                      onClick={(e) => {setGlassQuality(1)}}>
                                  <h4>Lightweight plastic lenses</h4>
                                  <img src={Normal} alt="" style={{width:"20vh",height:"9vh"}}/>
                                  <h4>XX€</h4>
                                </div>

                                <div className={glassQuality === 2 ? "typeGlassesActive" : "typeGlasses"}
                                      onClick={(e) => {setGlassQuality(2)}}>
                                  <h4>Thinner design</h4>
                                  <img src={ThinOne} alt="" style={{width:"20vh",height:"9vh"}}/>
                                  <h4>XX€</h4>
                              </div>
                            </div>
                        </div>
                        <div className="Long_Distance_Optimisation_Container">
                              <div className="Long_Distance_Optimisation_lens">
                                <div className={glassQuality === 3 ? "typeGlassesActive" : "typeGlasses"}
                                      onClick={(e) => {setGlassQuality(3)}}>
                                  <h4>Extra thin design</h4>
                                  <img src={ThinTwo} alt="" style={{width:"20vh",height:"9vh"}}/>
                                  <h4>XX€</h4>
                                </div>

                                <div className={glassQuality === 4 ? "typeGlassesActive" : "typeGlasses"}
                                      onClick={(e) => {setGlassQuality(4)}}>
                                  <h4>Ultra thin design</h4>
                                  <img src={ThinThree} alt="" style={{width:"20vh",height:"9vh"}}/>
                                  <h4>XX€</h4>
                              </div>
                            </div>
                        </div>
                          
                        <div className="Long_Distance_Optimisation_Container">
                          <h3>Anti-reflection coating</h3>
                              <div className="Long_Distance_Optimisation_lens">
                                <div className={antiReflexion === 1 ? "typeGlassesActive" : "typeGlasses"}
                                      onClick={(e) => {setAntiReflexion(1)}} >
                                  <h4>Hard coating</h4>
                                  <img src={HardCoat} alt="" style={{width:"20vh",height:"9vh"}}/>
                                  <h4>XX€</h4>
                                </div>

                                <div className={antiReflexion === 2 ? "typeGlassesActive" : "typeGlasses"}
                                      onClick={(e) => {setAntiReflexion(2)}} >
                                  <h4>Hard coating + AR Coating</h4>
                                  <img src={ReflexTwo} alt="" style={{width:"20vh",height:"9vh"}}/>
                                  <h4>XX€</h4>
                              </div>
                            </div>
                        </div>

                        <div className="Long_Distance_Optimisation_Container">
                        
                              <div className="Long_Distance_Optimisation_lens">
                                <div className={antiReflexion === 3 ? "typeGlassesActive" : "typeGlasses"}
                                      onClick={(e) => {setAntiReflexion(3)}} >
                                  <h4>Hard Coating + AR Coating + Lotus effect</h4>
                                  <img src={Lotus} alt="" style={{width:"20vh",height:"9vh"}}/>
                                  <h4>XX€</h4>
                                </div>

                                <div className={antiReflexion === 4 ? "typeGlassesActive" : "typeGlasses"}
                                      onClick={(e) => {setAntiReflexion(4)}} >
                                  <h4>Hard Coating + AR Coating + Blue Cut</h4>
                                  <img src={BlueCutTwo} alt="" style={{width:"20vh",height:"9vh"}}/>
                                  <h4>XX€</h4>
                              </div>
                            </div>
                        </div>


                        { !tintingChosen ? (
                          <div className="Tinting_Container">
                          <h3>Tinting</h3>
                              <div className="Tinting_Option">
                                <div className="Tinting_Option_Top">
                                  <div className={chosenTinting == 1 && "activated"}   
                                        onClick={() => {handleChosenTinting(1); setTintingChosen(true)}}
                                       
                                        > 
                                   <p className="tinting_text">With tinting</p> 
                                   <p className="tinting_text">XX€</p> 
                                    </div>
                                  
                                    <div className={chosenTinting == 2 && "activated"} 
                                        onClick={() => {handleChosenTinting(2)}} 
                                    //  onClick={()=> {setTintingChosen(true)}}
                                     > 
                                   <p className="tinting_text">Without tinting</p> 
                                   <p className="tinting_text">XX€</p> 
                                    </div>
                                </div>
                                <div
                                className={chosenTinting == 3 ? "Tinting_Option_Bottom_activated": "Tinting_Option_Bottom"} 
                                onClick={() => {handleChosenTinting(3)}} >
                                  <h4>With automatic tinting</h4>
                                  <h4>XX€</h4>
                                </div>
                            </div>
                        </div>
                                    ):(
                          <div className="Tinting_Container">
                              <h2>Tinting</h2>
                          <div className="Tinting_Container_Two">
                              <div className="Tinting_Color">
                                    <h3>Color</h3>  
                                      <div className="Tinting_Option_Top">
                                        <h5 className={chosenColor == Brown && "activated"} 
                                        onClick={(e) => {setChosenColor(Brown)}}>Brown</h5>
                                        <h5 className={chosenColor == Grey && "activated"} 
                                        onClick={(e) => {setChosenColor(Grey)}}>Grey</h5>
                                        <h5 className={chosenColor == Green && "activated"} 
                                        onClick={(e) => {setChosenColor(Green)}}>Green</h5>
                                      </div>
                                        <form className="Absorbtion" >
                                          <h3 for="vol">Absorbtion {absorbtion}%</h3>
                                          <input onChange={(e) => setAbsorbtion(e.target.value)} step="20" style={{width:"90%"}} type="range" name="Absorbtion" value={absorbtion} min="0" max="100"/>
                                        </form>
                             </div>
                            <div className="Tinting_Color_lens">
                                <h5 onClick={()=> {setTintingChosen(false)}}>Going Back</h5>
                                   <img src={chosenColor} alt="" style={{width:"20vh",height:"20vh"}} />
                                 </div>   </div>    </div>  ) }
                                  
                                  
                                  
                              <Link to="/SteinerUpgrade">
                                  <motion.button
                                    className="home_button"
                                    variants={buttonVariants}
                                    whileHover="hover">
                                      Continue
                                  </motion.button>
                              </Link>
                           </motion.div>


                        <motion.div 
                            className="lenses_choice_recap"
                            // drag="y"
                            //           whileTap={{ scale: 0.95 }}
                            //           dragConstraints={{ top: -1300, bottom: 20 }}
                            >

                              <h2>"Prescription"</h2>

                              
                              <div className="image_holder">
                                <img alt="" src={arrayLenses[frames]}/>
                                </div>
                            
                          
                             

                      <div className="lenses_choice_calculator">
                          <h3>Brillen.de Price Calculator</h3>
                          <div ><span>Base Price</span><span>XX€</span></div>
                          <div ><span>Frame Price</span><span>XX€</span></div>
                          <div><span>No Remote Optimization</span><span>XX€</span></div>
                          <div><span>No Close-Up Optimization</span><span>XX€</span></div>
                          <div><span>Thin Version</span><span>XX€</span></div>
                          <div style={{paddingBottom:"20px"}}><span>Hard Coating</span><span>XX€</span></div>
                          <div><span>Without tinting</span><span>XX€</span></div>
                          <div><span>Discount</span><span>XX€</span></div>
                          <div><span>Total Price</span><span>XX€</span></div>
                  
                           </div>
                          </motion.div >
                      </motion.div>  )}
            export default ConsultationLenses;