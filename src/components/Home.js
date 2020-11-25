import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import Loader from "./Loader"

// //images

import Glasses from "../image/home/glassesIcon.png"
import Arrow from "../image/home/arrowIcon.png"
import Dots from "../image/home/dotsIcon.png"
import Messages from "../image/home/messagesIcon.png"
import Click from "../image/home/clickIcon.png"


      const buttonVariants = {
      hover: {
        scale: 1.2,
        textShadow: "0px 0px 8px ",
        boxShadow: "0px 0px 8px",
          transition: {
            yoyo:Infinity,
            duration: 0.3   }}}

      const containerVariants = {
      hidden : {
        opacity:0,},
      visible:{
        opacity:1,
        transition : {delay :0.5, duration:1.5}},
      exit: {
        x: '-100vw',
        transition : {ease: 'easeInOut'}}}

const content =[
  {icon:Glasses,text:"lorewwwwwwwww"},
  {icon:Arrow,text:"lorewwwwwwwww"},
  {icon:Dots,text:"lorewwwwwwwww"},
  {icon:Messages,text:"lorewwwwwwwww"},
  {icon:Click,text:"lorewwwwwwwww"},
]
const buttonChoiceText = [
          {title: "Start registration",to: "RegistrationOne"},
          {title:"Continue consultation process",to: "ContinueConsultation"},
          {title:"Service and FAQs",to: "FAQs"},
          {title:"Pick up glasses",to: "ContinueConsultation"}]


const Home = () => {
  return (
    <motion.div
    variants={containerVariants}
     initial="hidden"
      animate="visible"
      exit="exit"
      className="home_container">
      <motion.h2
       initial={{opacity:0
       }}
      animate={{opacity:1
    }}
    transition={{ delay: 0.5 , duration : 3 }}
      >
        How it works?
      </motion.h2>
     

      {content.map((item, index)=>(
         <ul key={index}>
           <li className="list_flat">
         
    
         
           <img src={item.icon} alt="" style={{height:"8vh", width:"8vh"}} />
                
              
                  <div>{index}</div>
               <div styles={{margin:"2px"}}>{item.text}
         </div>
         </li></ul>))}

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
    </motion.div>
  )
}

export default Home;