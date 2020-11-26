import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import {useForm} from "react-hook-form"


const containerVariants = {
hidden: {
  opacity: 0,
  x:'100vw'
},
visible: {
opacity:1,
x: 0,
transition: {type : 'spring', 
delay: 0.5}
},exit: {x: '-100vw', transition : {ease: 'easeInOut'}}
}

const nextVariants = {
hidden:{
x:'-100vw'},
visible: {
x:0,
transition : {type: "spring", stiffness: 150  }
}

}
const buttonVariants = {

  hover: {
    scale: 1.2,  
    
    textShadow: "0px 0px 8px ",
    boxShadow: "0px 0px 8px",transition: {
      yoyo:Infinity,
      duration: 0.3  }} }



        const YourData = ({ addBase, pizza }) => {

            const {register, handleSubmit} = useForm()

            let Gender, Name, Surname, Adress, Country, ZIP, City,
            DataOfBirth, EMail, Mobile, AreaPrefix, Landline, IDCard = ""

            const handleChange = (e) => {
              
              Gender = e.target.value
              console.log("gender",Gender)
              console.log("gender",Name)
            }

            const onSubmit = (data) => {
              console.log("data",data);
            
            }

            return (
              <motion.div className="home_container"
                 variants={containerVariants}
                 initial="hidden" animate="visible" exit="exit"  >

                <h2>Your Data</h2>
              
   

                  <div className="Your_Data_Form">
<form onSubmit={handleSubmit(onSubmit)}>
            <div className="Your_Data_Field">
                <p>Gender:</p>
                <input name="radio" type="radio" value="mr" ref={register} />
                <p>Mr.</p>
                
                <input name="radio" type="radio" value="ms" ref={register} />
                <p>Mrs.</p>
                </div>

                <div className="Your_Data_Field">
                  <p>Name</p>
                  <input  name="Name" type="text" placeholder="Name" ref={register} />

                  <p>Surname</p>
                  <input name="Surname" type="text"  placeholder="Surname" ref={register} />
                </div>

                <div className="Your_Data_Field">
                  <p>Adress</p>
                  <input name="Adress"  placeholder="Adress"ref={register} />

                  <p>Country</p>
                  <input name="Country"  placeholder="Country"ref={register} />
                </div>


                      <div className="Your_Data_Field">
                        <p>ZIP Code</p>
                        <input name="ZIP"  placeholder="ZIP"ref={register} />
                        <p>City</p><input name="City" placeholder="City" ref={register} /></div>
                      <div className="Your_Data_Field"><p>Date of Birth</p><input name="DataOfBirth"placeholder="DataOfBirth"ref={register} /></div>
                      <div className="Your_Data_Field"><p>E-Mail</p><input name="text" value={EMail} placeholder="nada"ref={register} /></div>
                      <div className="Your_Data_Field"><p>Mobile Number</p><input name="text" value={Mobile} placeholder="nada"ref={register} /></div>

                      <div className="Your_Data_Field"><p>Warning: blablbabbalabbalablabalbabl</p></div>
                      <div className="Your_Data_Field"><p>I dont want to bleblalblablalbalblabl</p></div>

                      <div className="Your_Data_Field"><p>Area Prefix</p><input name="text" value={AreaPrefix} placeholder="nada"ref={register} />
                      <p>Landline</p><input name="text" value={Landline} placeholder="nada"ref={register} /></div>
                      <div className="Your_Data_Field"><p>ID card number</p><input name="text" value={IDCard} placeholder="nada"ref={register} /></div>

<input type="submit" ref={register} />

                      </form>

                      </div>

      <ul style={{display:"flex"}}>
            
                  <Link to="/Questionaire">
                  <motion.button
                  className="home_button"
                    variants={buttonVariants}
                    whileHover="hover"
                    >
                      Accept
                  </motion.button>
              </Link>

              <Link to="/Questionaire">
                  <motion.button
                  className="home_button"
                    variants={buttonVariants}
                    whileHover="hover">
                      Edit
                  </motion.button>
              </Link>
      
      </ul>

    </motion.div>
  )
}

export default YourData;