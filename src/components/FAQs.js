import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0,  x:'100vw'   },
  visible: {  opacity:1, x: 0,
  transition : {delay : 0.1, duration:1}},
  exit: {x: '-100vw', transition : {ease: 'easeInOut', duration:1}}   }



        const FAQs = () => {

      const contentFAQ = ["Id aliquip adipisicing cillum do cillum Lorem sint Lorem occaecat consequat.",
       "Consequat minim nostrud sunt tempor sit nisi.", "Et ad commodo minim nisi."]


        return (
          <motion.div className="AllDone_Container"
            variants={containerVariants}
            initial="hidden" animate="visible" exit="exit"
            // drag="y"
            // dragConstraints={{ top: -1000, bottom: 10 }} 
            >

              <h2>Service & FAQs</h2>
              <p>You need our technical staff? Please get your queue number. Our staff will come to you shortly</p>
    
    
     

            <div className="ListFAQ_container">
                <p>You might also find information in our FAQs' section:</p>
                  <ul>
                  {contentFAQ.map((item, index) => (
                  <li className="ListFAQ">FAQ n°{index + 1} : {item}</li>  )) }
                  </ul>
            </div>


        </motion.div>
      )
    }

    export default FAQs;