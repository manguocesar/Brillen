import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

//images
 import QrCode from "../image/RegistrationTwo/qrCode.png"

        const containerVariants = {
        hidden: { opacity: 0,  x:'100vw'   },
        visible: {  opacity:1, x: 0,
        transition : {delay : 0.1, duration:1}},
        exit: {x: '-100vw', transition : {ease: 'easeInOut', duration:1}}   }

        const nextVariants = {
          hidden: { opacity: 0, scale:0.1 },
          visible: {
          opacity:1,
          scale:1,
          transition : {delay : 0.8, duration:2.5} },
          exit: {x: '-100vw', transition : {ease: 'easeInOut', duration:1}}   }

        const buttonVariants = {
          hover: {
            scale: 1.2,  
            textShadow: "0px 0px 8px ",
            boxShadow: "0px 0px 8px",transition: {
              yoyo:Infinity,}  }  }

const RegistrationTwo = ({ addBase, pizza }) => {
  const Registrations = ['Scan QR Code', 'Manual Data Input'];


        return (
          <motion.div 
              className="home_container"
              drag="y"
              dragConstraints={{ top: -200, bottom: 10 }}
              variants={containerVariants}
              initial="hidden" animate="visible" exit="exit">
                <div className="registrationTwo_container">
                <h2>Registration</h2>
                <p>Scan your QR code next to the terminal</p>
                <p>If you don't have a QR code, please put in your data manually</p>

          <ul style={{display:"flex"}}>
            {Registrations.map(Registration => {
              return (
                <Link to="/YourData">
                <motion.button
                className="home_button"
                  variants={buttonVariants}
                  whileHover="hover">
                    {Registration}
                </motion.button>
              </Link>
                )
              })}
            </ul>
        </div>
                  

                      <motion.div variants={nextVariants}
              initial="hidden" animate="visible" exit="exit" >

                            <p>To scan your QR code, get it closer to the terminal</p>
                            <p>QR code scanner is located on the right of the screen</p>
                      <motion.img src={QrCode}   
              style={{margin: "20px 0px 0px 100px", width:"40vh", height: "40vh"}} alt=""/>
                </motion.div>  </motion.div>
            )
          }

    export default RegistrationTwo;