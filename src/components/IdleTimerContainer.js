
import React, {useState, useRef} from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from "react-modal"
import { useHistory } from 'react-router-dom';
import {motion} from "framer-motion";

    const containerVariants = {
        hidden: {  opacity: 0,   scale:0   },
        visible: { opacity:1, scale: 1,
        transition: {type : 'spring',  stiffness: 10,}  },
        exit: {x: '-100vw', transition : {duration: 2, ease: 'easeInOut'}}  }

    const buttonVariants = {
        hidden : {scale:0},
        visible: {scale:1, transition : {delay : 0.2, duration:2.5, type: "spring", stiffness: 20}},
        hover: {scale: 1.05, textShadow: "0px 0px 4px ", boxShadow: "0px 0px 4px", 
              transition: { yoyo:Infinity, duration: 0.3   }}}  

Modal.setAppElement('#root')

function IdleTimerContainer() {
    const [modalIsOpen,setModalIsOpen] = useState(false)
    const idleTimerRef = useRef(null)
    const sessionTimeoutRef = useRef(null)
    
    let histoire = useHistory()

const onIdle = () => { 
    setModalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut,20 * 1000)
                    }
const stayActive = () => { setModalIsOpen(false); clearTimeout(sessionTimeoutRef.current)}
const logOut = () => { setModalIsOpen(false); histoire.push("/");  clearTimeout(sessionTimeoutRef.current)}
const handleAfterCloseFunc = () => {clearTimeout(sessionTimeoutRef.current)}

    return (
        <motion.div variants={containerVariants}>

        <Modal 
            isOpen={modalIsOpen} 
            shouldCloseOnOverlayClick={true}
            onRequestClose={()=> setModalIsOpen(false)}
            onAfterClose={
                handleAfterCloseFunc
              /* Function that will be run after the modal has closed. */}
            style={{
                overlay: {backgroundColor:'black', zIndex: 2, padding:"800px", borderRadius:"20px"},
                content: {backgroundColor:'rgb(180, 180, 180)', width:"60%", height:"70vh", margin:"0px auto", color: 'red', display:"flex",flexDirection:"column",justifyContent:"center", alignItems:"center", textAlign:"center"}
                
            }}
             >
            <p style={{color:"black", fontSize:"2.2em", padding:"20px", fontWeight:"bolder"}}>You've been idle for a while!</p>
            <p style={{color:"black", fontSize:"2.2em", padding:"20px", fontWeight:"bolder"}}>You will be logged out</p>
        <motion.div variants={containerVariants}>
            <motion.button variants={buttonVariants} className="home_button" style={{color:"black", fontSize:"2.2em", padding:"20px", fontWeight:"bolder", border:"2px solid black"}} 
            onClick={logOut}>Log me out</motion.button>
            <motion.button variants={buttonVariants} className="home_button" style={{color:"black", fontSize:"2.2em", padding:"20px", fontWeight:"bolder", border:"2px solid black"}} 
            onClick={stayActive}>
                Keep me signed in
            </motion.button>
        </motion.div>
        </Modal>
            <IdleTimer 
                ref={idleTimerRef}
                timeout={20*1000}
                onIdle={onIdle}

            ></IdleTimer>
        </motion.div>
    )
}

export default IdleTimerContainer
