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

    const QRCodeQueueNumber = ({ }) => {


          return (
            <motion.div className="home_container"
          variants={containerVariants}
          initial="hidden" animate="visible" exit="exit">
                  <div className="registrationTwo_container">
                  <h2>Print Out QR Code and Queue Number</h2>
                  <p>Please print your QR Code and get your queue number for your eye test.</p>
                  <p>Once number is shown on the screen above eye exam room, please enter the exam room</p>

                  <ul >
                  
                  <Link to="/Questionaire">
                        <motion.button
                        className="home_button"
                          variants={buttonVariants}
                          whileHover="hover">
                            Back
                        </motion.button>
                        </Link>
                    
                        <Link to="/">
                        <motion.button
                        className="home_button"
                          variants={buttonVariants}
                          whileHover="hover">
                            Print QR code and queue number
                        </motion.button>
                      </Link>

                        <Link to="/">
                        <motion.button
                        className="home_button"
                          variants={buttonVariants}
                          whileHover="hover">
                            Cancel
                        </motion.button>
                      </Link>
                      
                    </ul>
                </div>
                      </motion.div>
                    )
                  }

        export default QRCodeQueueNumber;