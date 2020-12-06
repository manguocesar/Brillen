import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

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
            hover: {  scale: 1.05, textShadow: "0px 0px 4px ", boxShadow: "0px 0px 4px",
              transition: { yoyo:Infinity, duration: 0.5   }}}



        const SteinerUpgrade = () => {


          return (
            <motion.div className="base_container"
          variants={containerVariants}
          initial="hidden" animate="visible" exit="exit"  >

                  <motion.div 
                  // drag="y"
                    // dragConstraints={{ top: -500, bottom: 10 }}
                    className="lenses_choice_container">

                      <h2>Steiner Upgrade</h2>
                      <p>"Steiner Upgrade Description: Duis incididunt ad veniam nulla enim officia do officia qui id adipisicing nostrud officia consequat. Nulla in esse minim proident deserunt incididunt sit proident ad exercitation labore. Excepteur nulla in commodo Lorem do laboris.</p>
                      
                    <div className="Differences_Visualisation">
               <div><img style={{height:"170px", width:"300px"}} alt="" src={Grey}/></div>
               <div><img style={{height:"170px", width:"300px"}} alt="" src={Green}/></div>

                    </div>
                    <Link to="/Summary">
                            <motion.button
                            className="home_button"
                              variants={buttonVariants}
                              whileHover="hover">
                            Regular Vision
                            </motion.button>
                        </Link>   
                      <Link to="/Summary">
                            <motion.button
                            className="home_button"
                              variants={buttonVariants}
                              whileHover="hover">
                           Upgrade to Steiner Vision
                            </motion.button>
                        </Link>
                        </motion.div>  
                        
                        {/* <div className="lenses_choice_recap">
                <h2>Prescription</h2>
          </div > */}

            </motion.div>
          )  }

        export default SteinerUpgrade;