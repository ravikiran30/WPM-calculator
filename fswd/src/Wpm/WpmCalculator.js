import React, { useRef,useState} from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./style/global";
import TypeBox from "./components/features/TypeBox/TypeBox";
import FooterMenu from "./components/common/FooterMenu";
import {
  THEME
} from "./constants/Constants";
import useLocalPersistState from "./hooks/useLocalPersistState";
import {
  SOUND_MODE,
  ACTIVE
} from "./components/features/sound/sound";


const WpmCalculator = (
  n
) =>{

  // localStorage persist theme setting
  const theme = THEME;
  const name = n.n


  // local persist game mode setting
  const [soundMode, setSoundMode] = useLocalPersistState(false, SOUND_MODE);
  const [activate,setActivate]=useState(soundMode,ACTIVE)

  

  const toggleSoundMode = () => {
    setSoundMode(!soundMode);
    setActivate(!activate)
  };
  const textInputRef = useRef(null);
  const focusTextInput = () => {
    textInputRef.current && textInputRef.current.focus();
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="canvas">
          <GlobalStyles />
          
          <TypeBox
            textInputRef={textInputRef}
            soundMode={soundMode}
            key="type-box"
            handleInputFocus={() => focusTextInput()}
            name={name}
          ></TypeBox>
          <FooterMenu
           
            toggleSoundMode={toggleSoundMode}
            
            
            activate={activate}
          ></FooterMenu>

        </div>
      </>
    </ThemeProvider>
  );
}

export default WpmCalculator;
