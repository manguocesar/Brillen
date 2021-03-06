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

            const [selected, setSelected] = useState(1)

          return (
            <motion.div className="base_container"
          variants={containerVariants}
          initial="hidden" animate="visible" exit="exit"  >
                  <motion.div 
                    className="lenses_choice_container">

                      <h2>Steiner Upgrade</h2>
                      <p>"Steiner Upgrade Description: Duis incididunt ad veniam nulla enim officia do officia qui id adipisicing nostrud officia consequat.</p>
                      
                    <div className="Differences_Visualisation">
               <div className={ selected === 1 ? "greenBorder" : "whiteBorder"} onClick={(e) => setSelected(1)}><img style={{height:"10vh", width:"22vh"}} alt="" src={Grey} /></div>
               <div className={ selected === 2 ? "greenBorder" : "whiteBorder"} onClick={(e) => setSelected(2)}><img style={{height:"10vh", width:"22vh"}} alt="" src={Green}/></div>
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
                        
                  

            </motion.div>
          )  }

        export default SteinerUpgrade;