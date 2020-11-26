import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";



const containerVariants = {
  hidden : {
    opacity:0,
    x:'100vw'},
  visible:{
    opacity:1,x:'0vw',
    transition : {delay : 0.2, duration:0.5, type: "spring", stiffness: 80 }},
  exit: {
    x: '-100vw', transition : {duration:1,ease: 'easeInOut'}}}

          
          const buttonVariants = {

            hover: {
              scale: 1.2,  
              
              textShadow: "0px 0px 8px ",
              boxShadow: "0px 0px 8px",transition: {
                yoyo:Infinity,
                duration: 0.3 } } }

        const Registration = () => {
        const Registrations = ['YES', 'NO'];


        return (
          <motion.div className="home_container"
        variants={containerVariants}
        initial="hidden" animate="visible" exit="exit">

            <h2>Welcome at brillen.de express</h2>
            <p >Have you already chosen a frame?</p>
            <ul style={{display:"flex"}}>
              {Registrations.map((Registration, index) => {
                return (
                  <li key={index}>
                  <Link to="/RegistrationTwo">
                  <motion.button
                  className="home_button"
                    variants={buttonVariants}
                    whileHover="hover">
                      {Registration}
                  </motion.button>
              </Link></li>
                )
              })}
            </ul>
          </motion.div>
        )
      }

      export default Registration;