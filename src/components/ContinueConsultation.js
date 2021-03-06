import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

            //images
            import QrCode from "../image/RegistrationTwo/qrCode.png"

            const containerVariants = {
              hidden: { opacity: 0, x:'100vw'  },
              visible: {   opacity:1,   x: 0,
                transition: {type : 'spring', stiffness: 10,  delay: 0.2}  },
              exit: {x: '-100vw', transition : {ease: 'easeInOut',duration: 1}} }

              const buttonVariants = {
                hidden : {scale:0,},
                visible:{  scale:1,
                  transition : {delay : 0.2, duration:2.5, type: "spring", stiffness: 20}},
                hover: {  scale: 1.05, textShadow: "0px 0px 4px ", boxShadow: "0px 0px 4px",
                  transition: { yoyo:Infinity, duration: 0.5   }}}

                const nextVariants = {
                  hidden: { opacity: 0, scale:0.1 },
                  visible: {opacity:1, scale:1,
                  transition : {delay : 1.2, duration:2} },
                  exit: {opacity: 0, scale:0.1, transition : {ease: 'easeInOut', duration:1}}   }

            const ContinueConsultation = () => {
                  
              return (
                    <motion.div className="home_container"
                  variants={containerVariants}
                  initial="hidden" animate="visible" exit="exit"
                             >

                      <h2>Continue Consultation Process</h2>
                            <p className="QRCode_Text">Here are the frames that you have chosen</p>
                            <p className="QRCode_Text">Please select one you would like to order</p>

                      <Link to="/ConsultationFrames">
                            <motion.button
                            className="home_button"
                              variants={buttonVariants}
                              whileHover="hover">
                            QR Code Scanned
                            </motion.button>
                        </Link>
                      
                              <p className="QRCode_Text">To scan your QR code, get it closer to the mirror</p>
                              <p className="QRCode_Text">QR code scanner is located on the left of the display</p>
                              <p className="QRCode_Text">If you have no QR code, please go back to the HomePage and click on "Start Registration"</p>
                              <motion.img variants={nextVariants} initial="hidden" animate="visible" exit="exit" style={{marginTop:"1vh",  height:"30vh", width:"20vh", marginLeft:"20vh" }} src={QrCode} alt=""/></motion.div>)}

          export default ContinueConsultation;