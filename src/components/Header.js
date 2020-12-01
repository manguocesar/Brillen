import React from 'react';
import {motion} from 'framer-motion'
import { Link, useHistory } from 'react-router-dom';

//images
import WhiteLogo from "../image/header/whiteLogo.png"
import SupportIcon from "../image/header/supportIcon.png"
import Home from "../image/header/homeIcon.png"
import GoBack from "../image/header/arrowLeft.png"


              const svgVariants = {
                hidden: {opacity : 0, scale:0.1},
                visible: { scale: 1, opacity: 1,
                  transition: { duration: 1.5  }},
                exit : {  opacity:0, transition : {duration:0.5}} }

              const containerVariants = {
                hidden : {  opacity:0,  y:'-10vw'},
                visible:{  opacity:1,y:'0vw',
                  transition : {delay : 0.2, duration:1,type: "spring", stiffness: 10}},
                hover: { scale: 0.98,   borderRadius:"20px",
                  transition: {  yoyo:Infinity,  duration: 0.4  }},
                exit: { x: '-50vw',
                  transition : {duration:1,ease: 'easeInOut'}}}

                  const containerVariantsTwo = {
                    hidden : {opacity:0, scale : 0},
                    visible:{opacity:1, scale : 1,
                      transition : {delay : 0.2, duration:1,type: "spring", stiffness: 10}},
                    hover: { opacity:0.7,scale : 0.98, borderRadius:"20px", 
                      transition: {  yoyo:Infinity,  duration: 0.4  }},
                    exit: {opacity:0, scale : 0, transition : {duration:1,ease: 'easeInOut'}}}

   
      const Header = ({savedData}) => {

        let history = useHistory()
            const goingBack = () => { history.goBack() };
        return ( 
          <header >
            <motion.div
                className="logo"
                drag 
                whileTap={{ scale: 0.95 }}
                dragConstraints={{ left:-150, top:-50, right:800, bottom:1200}}
                dragElastic={0.9}  
                        >
              <motion.img  variants={svgVariants}
                initial="hidden"
                animate="visible"  src={WhiteLogo} alt="" style={{height:"10vh"}}  />

            </motion.div>

        <div className="Header_Icon_One">
          <div style={{display:"flex", flexDirection:"row"}}>
              <motion.div   
              
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover="hover"
                    className="iconUser">
              
                      <img src={SupportIcon} alt="" style={{width: "40px",height: "40px"}} />
                      <p>To authentify, click on the icon </p>
                   </motion.div>

                    {history.location.pathname == "/" ? (""
                          ):(
                          <motion.div   
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="navigation_header">
                                <motion.div variants={containerVariants} whileHover="hover"> 
                                  <Link to="/" >
                                    <img src={Home} style={{width: "42px",height: "42px"}} alt=""/>
                                  </Link> 
                                </motion.div>
                            <motion.div variants={containerVariants} whileHover="hover" onClick={()=> {goingBack()}}> 
                            <img src={GoBack} style={{width: "42px",height: "42px"}} alt=""/>
                          </motion.div>
                  </motion.div>
                  )}


          </div>

          <div className="header_save_process">
                {  savedData ===  false ? ("" ):(
                  <motion.div  
                      variants={containerVariantsTwo}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      whileHover="hover"
                      className="iconUser">
                        <p>Save process and log out </p>
                  </motion.div>)}

                 { (savedData === false ) ? ("" ):(
                      <motion.div  
                            style={{marginLeft:"15px"}}
                            variants={containerVariantsTwo}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            whileHover="hover"
                            className="iconUser">
                              <p>Max Muster </p>
                        </motion.div>  )}
                     </div>  </div>
                </header>
              )
            }

            export default Header;