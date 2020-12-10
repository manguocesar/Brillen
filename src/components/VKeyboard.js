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

      
      const keyboard = useRef();

      

      const handleShift = () => {
        const newLayoutName = layoutName === "default" ? "shift" : "shift";
        setLayoutName(newLayoutName);
      };

      const onKeyPress = button => {
        console.log("Button pressed", button);
        if (button === "shift" || button === "{lock}") handleShift();
        if (button === "CloseKeyoard") {setOpenKeyboard(false)};
      };

  return (
    <>
    { openKeyboard ?  <motion.div className="simple-keyboard "  variants={keyboardMotion}
    initial="hidden" animate="visible" exit="exit">

    <Keyboard
          inputName={inputName}
          onChangeAll={inputObj => onChangeAll(inputObj)}
          // keyboardRef={r => (keyboard.current = r)}
          onKeyPress={onKeyPress}
          theme={"hg-theme-default hg-layout-default myTheme"}
          keyboardAppearance='dark'
          layout={{
        'default': [
          '1 2 3 4 5 6 7 8 9 0',
          'q w e r t y u i o p {.com}',
          'a s d f g h j k l @',
          'z x c v b n m {shift}',
          'CloseKeyoard'
        ],
        'shift': [
          'CloseKeyoard',
          'Q W E R T Y U I O P',
          'A S D F G H J K L"',
          '{shift} Z X C V B N M < > ? {shift}',
          '.com @ {space}'
        ]
      }}


    />
  </motion.div> : <></>}

  </>
  );
}

export default VKeyboard

    