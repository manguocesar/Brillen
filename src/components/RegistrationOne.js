import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";


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
          transition : {delay : 1.2, duration:3.5} },
          exit: {x: '-100vw', transition : {ease: 'easeInOut', duration:1}}   }

        const buttonVariants = {
          hover: {
            scale: 1.2,  
            textShadow: "0px 0px 8px ",
            boxShadow: "0px 0px 8px",transition: {
              yoyo:Infinity,   }  }  }

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