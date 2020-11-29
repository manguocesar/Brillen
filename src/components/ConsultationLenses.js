import React, {useState} from 'react';
import { Link } from 'react-router-dom';
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
import TintBrown from "../image/ConsultationLenses/Braun.png"
import TintGrey from "../image/ConsultationLenses/Gray.png"
import TintGreen from "../image/ConsultationLenses/Green.png"

              const containerVariants = {
                hidden: {  opacity: 0,   x:'100vw'   },
                visible: { opacity:1, x: 0,
                transition: {type : 'spring',  stiffness: 10,}  },
                exit: {x: '-100vw', transition : {duration: 1, ease: 'easeInOut'}}  }


              const buttonVariants = {   
                hover: { scale: 1.2,   textShadow: "0px 0px 8px ", boxShadow: "0px 0px 8px",
                transition: {   yoyo:Infinity, duration: 0.3}   } }



              const ConsultationLenses = ({ addBase, pizza }) => {

                const [tintingChosen, setTintingChosen] = useState(false)
                const [chosen, setChosen] = useState("")

                        return (
                          <motion.div className="base_container"
                        variants={containerVariants}
                        initial="hidden" animate="visible" exit="exit"  >

                      <motion.div
                      drag="y"
                      whileTap={{ scale: 0.99, opacity:0.7 }}
                      dragConstraints={{ top: -3000, bottom: 20 }}


                      className="lenses_choice_container">

                            <h2>Consultation Lenses</h2>
                            <p className="QRCode_Text">
                              Based on your information about your vision and the results of the eye tested, 
                              we recommend the following lens type:</p>
                            
                            <div style={{marginTop:"20px"}}>
                            <h2>Your glassess in detail</h2>
                      <motion.img drag src={RotatingLens} alt="" style={{width:"320px",height:"320px", marginBottom:"20px"}}/>
                      </div>


                        <div className="Long_Distance_Optimisation_Container">
                          <h3>Long distance optimisation</h3>
                              <div className="Long_Distance_Optimisation_lens">
                                <div>
                                  <h4>No damage optimization of ...</h4>
                                  <img src={NoOptimisation} alt="" style={{width:"250px",height:"250px"}}/>
                                  <h4>XX€</h4>
                                </div>

                                <div>
                                  <h4>Correcting vision area</h4>
                                  <img src={LongDistanceOptimisation} alt="" style={{width:"250px",height:"250px"}}/>
                                  <h4>XX€</h4>
                              </div>
                            </div>
                        </div>

                        <div className="Long_Distance_Optimisation_Container">
                          <h3>Close distance optimisation</h3>
                              <div className="Long_Distance_Optimisation_lens">
                                <div>
                                  <h4>No damage optimization of ...</h4>
                                  <img src={NoOptimisation} alt="" style={{width:"250px",height:"250px"}}/>
                                  <h4>XX€</h4>
                                </div>

                                <div>
                                  <h4>Correcting vision area</h4>
                                  <img src={CloseUpOptimisation} alt="" style={{width:"250px",height:"250px"}}/>
                                  <h4>XX€</h4>
                              </div>
                            </div>
                        </div>

                        <div className="Long_Distance_Optimisation_Container">
                          <h3>Glass quality</h3>
                              <div className="Long_Distance_Optimisation_lens">
                                <div>
                                  <h4>Light Weight</h4>
                                  <img src={Normal} alt="" style={{width:"250px",height:"250px"}}/>
                                  <h4>XX€</h4>
                                </div>

                                <div>
                                  <h4>Correcting vision area</h4>
                                  <img src={ThinOne} alt="" style={{width:"250px",height:"250px"}}/>
                                  <h4>XX€</h4>
                              </div>
                            </div>
                        </div>

                        <div className="Long_Distance_Optimisation_Container">
                        
                              <div className="Long_Distance_Optimisation_lens">
                                <div>
                                  <h4>Extra thin design</h4>
                                  <img src={ThinTwo} alt="" style={{width:"250px",height:"250px"}}/>
                                  <h4>XX€</h4>
                                </div>

                                <div>
                                  <h4>Ultra thin design</h4>
                                  <img src={ThinThree} alt="" style={{width:"250px",height:"250px"}}/>
                                  <h4>XX€</h4>
                              </div>
                            </div>
                        </div>
                          
                        <div className="Long_Distance_Optimisation_Container">
                          <h3>AntiReflexion Coating</h3>
                              <div className="Long_Distance_Optimisation_lens">
                                <div>
                                  <h4>No damage optimization of ...</h4>
                                  <img src={HardCoat} alt="" style={{width:"250px",height:"250px"}}/>
                                  <h4>XX€</h4>
                                </div>

                                <div>
                                  <h4>Correcting vision area</h4>
                                  <img src={ReflexTwo} alt="" style={{width:"250px",height:"250px"}}/>
                                  <h4>XX€</h4>
                              </div>
                            </div>
                        </div>

                        <div className="Long_Distance_Optimisation_Container">
                        
                              <div className="Long_Distance_Optimisation_lens">
                                <div>
                                  <h4>No damage optimization of ...</h4>
                                  <img src={Lotus} alt="" style={{width:"250px",height:"250px"}}/>
                                  <h4>XX€</h4>
                                </div>

                                <div>
                                  <h4>Correcting vision area</h4>
                                  <img src={BlueCutTwo} alt="" style={{width:"250px",height:"250px"}}/>
                                  <h4>XX€</h4>
                              </div>
                            </div>
                        </div>


                        { !tintingChosen ? (
                          <div className="Tinting_Container">
                          <h3>Tinting</h3>
                              <div className="Tinting_Option">
                                <div className="Tinting_Option_Top">
                                  <div onClick={()=> {setTintingChosen(true)}}> 
                                   <p>With tinting</p> 
                                   <p>XX€</p> 
                                    </div>
                                  
                                    <div onClick={()=> {setTintingChosen(true)}}> 
                                   <p>Without tinting</p> 
                                   <p>XX€</p> 
                                    </div>
                                </div>
                                <div className="Tinting_Option_Bottom">
                                  <h4>With automatic tintin</h4>
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
                                  <h5 className={chosen == "Brown" && "activated"} 
                                  onClick={(e) => {setChosen(e.target.textContent)}}>Brown</h5>
                                  <h5 className={chosen == "Grey" && "activated"} 
                                  onClick={(e) => {setChosen(e.target.textContent)}}>Grey</h5>
                                  <h5 className={chosen == "Green" && "activated"} 
                                  onClick={(e) => {setChosen(e.target.textContent)}}>Green</h5>
                                </div>
                               
                            
                                  <form className="Absorbtion" >
                          <h3 for="vol">Absorbtion</h3>
                          <input step="20" style={{width:"90%"}} value="150" type="range" id="vol" name="vol" min="0" max="300"></input>
                        </form>
                             
                            </div><div className="Tinting_Color_lens">
                      <h5>Going Back</h5>
                      <img src={TintBrown} alt="" style={{width:"220px",height:"220px"}} />
                </div> </div>    </div>  ) }

                        
                                  <Link to="/SteinerUpgrade">
                                  <motion.button
                                  className="home_button"
                                    variants={buttonVariants}
                                    whileHover="hover">
                                  Continue
                                  </motion.button>
                              </Link>
                            

              </motion.div>


                <motion.div className="lenses_choice_recap"
                              drag="y"
                              whileTap={{ scale: 0.95 }}
                              dragConstraints={{ top: -700, bottom: 20 }}>

                      <h2>"Prescription"</h2>

                      <div className="lenses_choice_info">
                      <div className="image_holder">
                        <p>Frame Image <br/> PlaceHolder</p>
                        </div>
                     
                      <h4>Brillen.de frame</h4>
                      <h4>Frame Description</h4>
                      <h4>Frame Explanation</h4>
                      </div>

                      <div className="lenses_choice_calculator">
                          <h3 style={{paddingBottom:"10px"}}>Brillen.de Price Calculator</h3>
                          <div style={{paddingTop:"20px"}}><span>Base Price</span><span>XX€</span></div>
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

                  </motion.div>
  )
}

export default ConsultationLenses;