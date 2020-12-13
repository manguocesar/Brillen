import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import {motion} from "framer-motion";


    const keyboardMotion = {
      hidden: {  opacity: 0, scale:0,  y:'20vw',x:'20vh'   },
      visible: { opacity: 1, scale:1,  y:'0vw', x:'20vh' ,
        transition: {type : 'spring',  stiffness: 20,}  },
      exit: {opacity: 0, scale:0,  y:'100vw' , transition : {type : 'spring',  stiffness: 20,}}  }

function VKeyboard({inputName, onChangeAll, setInputs, openKeyboard, setOpenKeyboard, register, handleSubmit,errors,}) {
 

      const [layoutName, setLayoutName] = useState("default");
      const handleShift = () => {
        const newLayoutName = layoutName === "default" ? "shift" : "default";
        setLayoutName(newLayoutName);
      };

      const onKeyPress = button => {
        if (button === "{shift}" ) handleShift();
        if (button === "{CloseKeyoard}") {setOpenKeyboard(0)};
      };

  return (
    < >
    <motion.div  
    drag  dragConstraints={{ top: -380, bottom: 80, left: -300, right: 300 }}
    className={ openKeyboard ? "simple-keyboardgood" : "NOsimple_keyboard"} >
{/* opacity:openKeyboard */}
    <Keyboard
    
          inputName={inputName}
          onChangeAll={inputObj => onChangeAll(inputObj)}
          onKeyPress={onKeyPress}
          theme={"hg-theme-default  myTheme"}
          keyboardAppearance='dark'
          layoutName={layoutName}
          display={{
            '{bksp}': 'delete',
            '{CloseKeyoard}': 'Close Keyboard',
            '{shift}': 'shift',
            '{space}': 'space'
          }}
          layout={{
        'default': [
          '1 2 3 4 5 6 7 8 9 0 {bksp}',
          'q w e r t z u i o p ü .com',
          'a s d f g h j k l ö ä @',
          'y x c v b n m . {shift}',
          '{CloseKeyoard} {space}'
        ],
        'shift': [
          'Q W E R T Y U I O P .com',
          'A S D F G H J K L @',
          'Z X C V B N M {shift}',
          '{CloseKeyoard} {space}' ],
        'number': [
          '{space} {CloseKeyoard}',
          '1 2 3 4 5 6 7 8 9 0',
        ]
      }}


    />
  </motion.div>

  </>
  );
}

export default VKeyboard

    