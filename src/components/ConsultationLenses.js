import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

//images
import RotatingLens from "../image/ConsultationLenses/Animation_Lens_Rotation.gif"
import NoOptimisation from "../image/ConsultationLenses/NoOptimisation.png"
import LongDistanceOptimisation from "../image/ConsultationLenses/Long_distance_optimisation.png"
import CloseUpOptimisation from "../image/ConsultationLenses/Close_up_optimisation.png"
import Normal from "../image/ConsultationLenses/Normal.png"
import ThinOne from "../image/ConsultationLenses/thin_1.png"
import ThinTwo from "../image/ConsultationLenses/thin_2.png"
import ThinThree from "../image/ConsultationLenses/thin_3.png"
import HardCoat from "../image/ConsultationLenses/hard_coat.png"
import ReflexTwo from "../image/ConsultationLenses/reflex_2.png"
import Lotus from "../image/ConsultationLenses/lotus.png"
import BlueCutTwo from "../image/ConsultationLenses/blue_cut2.png"
import TintBrown from "../image/ConsultationLenses/Braun.png"
import TintGrey from "../image/ConsultationLenses/Gray.png"
import TintGreen from "../image/ConsultationLenses/Green.png"

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
      duration: 0.3
      
        }
  
  }
  
  }



const ConsultationLenses = ({ addBase, pizza }) => {

  const [tintingChosen, setTintingChosen] = useState(false)


  return (
    <motion.div className="base_container"
   variants={containerVariants}
   initial="hidden" animate="visible" exit="exit"  >

<motion.div drag="y"
dragConstraints={{ top: -1000, bottom: 10 }}


className="lenses_choice_container">

      <h2>Consultation Lenses</h2>
      <p>Based on your information about your vision and the results of the eye tested, we recommend the following lens type:</p>
      
      <div>
      <h3>Your glassess in detail</h3>
<img src={RotatingLens} alt="" style={{width:"120px",height:"120px"}}/>
</div>


  <div className="Long_Distance_Optimisation_Container">
    <h3>Long distance optimisation</h3>
        <div className="Long_Distance_Optimisation_lens">
          <div>
             <p>No damage optimization of ...</p>
             <img src={NoOptimisation} alt="" style={{width:"120px",height:"120px"}}/>
             <p>XX€</p>
          </div>

          <div>
            <p>Correcting vision area</p>
            <img src={LongDistanceOptimisation} alt="" style={{width:"120px",height:"120px"}}/>
             <p>XX€</p>
        </div>
      </div>
  </div>

  <div className="Long_Distance_Optimisation_Container">
    <h3>Close distance optimisation</h3>
        <div className="Long_Distance_Optimisation_lens">
          <div>
             <p>No damage optimization of ...</p>
             <img src={NoOptimisation} alt="" style={{width:"120px",height:"120px"}}/>
             <p>XX€</p>
          </div>

          <div>
            <p>Correcting vision area</p>
            <img src={CloseUpOptimisation} alt="" style={{width:"120px",height:"120px"}}/>
             <p>XX€</p>
        </div>
      </div>
  </div>

  <div className="Long_Distance_Optimisation_Container">
    <h3>Glass quality</h3>
        <div className="Long_Distance_Optimisation_lens">
          <div>
             <p>Light Weight</p>
             <img src={Normal} alt="" style={{width:"120px",height:"120px"}}/>
             <p>XX€</p>
          </div>

          <div>
            <p>Correcting vision area</p>
            <img src={ThinOne} alt="" style={{width:"120px",height:"120px"}}/>
             <p>XX€</p>
        </div>
      </div>
  </div>

  <div className="Long_Distance_Optimisation_Container">
  
        <div className="Long_Distance_Optimisation_lens">
          <div>
             <p>Extra thin design</p>
             <img src={ThinTwo} alt="" style={{width:"120px",height:"120px"}}/>
             <p>XX€</p>
          </div>

          <div>
            <p>Ultra thin design</p>
            <img src={ThinThree} alt="" style={{width:"120px",height:"120px"}}/>
             <p>XX€</p>
        </div>
      </div>
  </div>
    
  <div className="Long_Distance_Optimisation_Container">
    <h3>AntiReflexion Coating</h3>
        <div className="Long_Distance_Optimisation_lens">
          <div>
             <p>No damage optimization of ...</p>
             <img src={HardCoat} alt="" style={{width:"120px",height:"120px"}}/>
             <p>XX€</p>
          </div>

          <div>
            <p>Correcting vision area</p>
            <img src={ReflexTwo} alt="" style={{width:"120px",height:"120px"}}/>
             <p>XX€</p>
        </div>
      </div>
  </div>

  <div className="Long_Distance_Optimisation_Container">
  
        <div className="Long_Distance_Optimisation_lens">
          <div>
             <p>No damage optimization of ...</p>
             <img src={Lotus} alt="" style={{width:"120px",height:"120px"}}/>
             <p>XX€</p>
          </div>

          <div>
            <p>Correcting vision area</p>
            <img src={BlueCutTwo} alt="" style={{width:"120px",height:"120px"}}/>
             <p>XX€</p>
        </div>
      </div>
  </div>


  { !tintingChosen ? (
    <div className="Tinting_Container">
    <h3>Tinting</h3>
        <div className="Tinting_Option">
          <div className="Tinting_Option_Top">
             <p onClick={()=> {setTintingChosen(true)}}>With..</p>
             
             <p>Without ...</p>
          </div>
          <div className="Tinting_Option_Bottom">
             <p>With.....on of ...</p>
          </div>
      </div>
  </div>
  ):(
    <div className="Tinting_Container">
    <h3>Tinting</h3>
    <div className="Tinting_Container_Two">
        <div className="Tinting_Color">
         <h2>Color</h2>  
          <div className="Tinting_Option_Top">
             <p >green..</p>
             <p >grey..</p>
             <p>red ...</p>
          </div>
          <div className="Absorbtion">
             <p>Absorbtion Line is here</p>
          </div>
      </div><div className="Tinting_Color_lens">
<p>Going Back</p>
<img src={TintBrown} alt="" style={{width:"220px",height:"220px"}} />

</div>
      </div>



  </div>
  )
  }

  


            <Link to="/SteinerUpgrade">
            <motion.button
            className="home_button"
              variants={buttonVariants}
              whileHover="hover">
            Continue
            </motion.button>
        </Link>
      

        </motion.div>


        <div className="lenses_choice_recap">

<h2>Prescription</h2>

<div className="lenses_choice_info">
<div className="image_holder">
  <p>Frame Image PlaceHolder</p>
  </div>
<p>ajsdkjsbjkq</p>
<p>ajsdkjsbjkq</p>
<p>ajsdkjsbjkq</p>
</div>

<div className="lenses_choice_info">
<h3>Your glassess in detail</h3>
<p>ajsdkjsbjkq</p>
<p>ajsdkjsbjkq</p>
<p>ajsdkjsbjkq</p>
<p>ajsdkjsbjkq</p>
<p>ajsdkjsbjkq</p>
<p>ajsdkjsbjkq</p>
<p>ajsdkjsbjkq</p>
<p>ajsdkjsbjkq</p>
</div>



  </div >

    </motion.div>
  )
}

export default ConsultationLenses;