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
            scale: 1.2, x:5, 
            textShadow: "0px 0px 8px ",
            boxShadow: "0px 0px 8px",transition: {
              yoyo:Infinity,   }  }  }

        const Registration = () => {


        return (
          <motion.div className="home_container"
          // drag="y"  dragConstraints={{ top: -100, bottom: 10 }}
        variants={containerVariants}
        initial="hidden" animate="visible" exit="exit">

            <h2>Registration</h2>
            <p>Welcome at brillen.de express</p>
            <p >Have you already chosen a frame?</p>
            <ul style={{display:"flex"}}>
                  <li >
                  <Link to="/RegistrationTwo">
                  <motion.button
                  className="home_button"
                    variants={buttonVariants}
                    whileHover="hover">
                      YES
                  </motion.button>
              </Link></li>
              <li >
                  <Link to="/NoFrameSelection">
                  <motion.button
                  className="home_button"
                    variants={buttonVariants}
                    whileHover="hover">
                     NO
                  </motion.button>
              </Link></li>
            </ul>
          </motion.div>
        )
      }

      export default Registration;