import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {motion,  } from "framer-motion";
import Loader from "./Loader"

// //images
import Glasses from "../image/home/glassesIcon.png"
import Arrow from "../image/home/arrowIcon.png"
import Dots from "../image/home/dotsIcon.png"
import Messages from "../image/home/messagesIcon.png"
import Click from "../image/home/clickIcon.png"


            const buttonVariants = {
              hidden : {scale:0,},
              visible:{  scale:1,
                transition : {delay : 0.2, duration:2.5, type: "spring", stiffness: 20}},
              hover: {  scale: 1.05, textShadow: "0px 0px 4px ", boxShadow: "0px 0px 4px",
                transition: { yoyo:Infinity, duration: 0.5   }}}

            const containerVariants = {
              hidden : { opacity:0.1},
              visible: {  opacity:1, 
                transition : {delay : 0.2, duration:1.5, type: "spring", stiffness: 20}},
              exit: {  x: '-100vw',  transition : {duration:0.5,ease: 'easeInOut'}}}

            const content =[
                      {icon:Glasses,text:"Select your new frames"},
                      {icon:Arrow,text:"Register on smart mirror for a free eye test"},
                      {icon:Dots,text:"The qualified personal clarifies all questions during the eye test"},
                      {icon:Messages,text:"At smart mirror, you get the perfect eye consultation"},
                      {icon:Click,text:"You order your new glasses at the Smart Mirror and pick them up here after a few days"},
                    ]
            const buttonChoiceText = [
                      {title: "Start registration",to: "RegistrationOne"},
                      {title:"Continue consultation process",to: "ContinueConsultation"},
                      {title:"Service and FAQs",to: "FAQs"},
                      {title:"Pick up glasses",to: "/"}
                    ]

        const Home = ({setSavedData, savedData}) => {

          useEffect((savedData) => {
            setSavedData(false)
            console.log("savedData",savedData);
            }, [])

          return (
            <div className="Grid_Container">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              // drag="y"
              // whileTap={{ scale: 0.95, opacity:0.7 }}
              // dragConstraints={{ top: -550, bottom: 10 }}
              className="home_container">
                <motion.h2  >
                  How it works?
                </motion.h2>
                <div className="home_main">
                  {content.map((item, index)=>(
                    <ul key={index}>
                      <li className="list_flat">
                       <div> <img src={item.icon} alt="" style={{height:"8vh", width:"8vh"}} /></div>
                <div>{index + 1 }. {item.text}  </div>
           
                    </li>
                  </ul>
                  ))}
              </div>

         <div class="home_footer_container">
                {buttonChoiceText.map(item => (
                <Link to={item.to}>
                    <motion.button
                      className="home_button"
                      variants={buttonVariants}
                      whileHover="hover">
                      {item.title}
                    </motion.button>
                </Link>))}
            </div>
          </motion.div></div>
        )
      }

export default Home;