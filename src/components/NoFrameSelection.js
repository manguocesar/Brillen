import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";


        const containerVariants = {
        hidden: { opacity: 0,  x:'100vw'   },
        visible: {  opacity:1, x: 0,
        transition : {delay : 0.1, duration:1}},
        exit: {x: '-100vw', transition : {ease: 'easeInOut', duration:1}}   }

        const buttonVariants = {
          hover: {
            scale: 1.2,  
            textShadow: "0px 0px 8px ",
            boxShadow: "0px 0px 8px",transition: {
              yoyo:Infinity,}  }  }

        const NoFrameSelection = () => {


            return (
              <motion.div 
                className="home_container"
                variants={containerVariants}
                initial="hidden" animate="visible" exit="exit">
          <div className="registrationTwo_container">
              <h2>Frame Selection</h2>
              <p>Choose 2 to 3 frames freely. Our staff will then recommend the best frame for your requirements during the eye test.</p>
              <p>Once you have chosen your frames, please come back to me and register for the eye test.</p>
              <p>I wish you a lot of fun choosing your frames!</p>

                <Link to="/">
                <motion.button
                  className="home_button"
                  variants={buttonVariants}
                  whileHover="hover">
                    OK
                </motion.button>
              </Link>
                      
                </div>
              </motion.div>
            )
          }

    export default NoFrameSelection;