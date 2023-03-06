
import React from 'react';


import { Link, useLocation } from 'react-router-dom';
import WpmCalculator from '../Wpm/WpmCalculator'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from '../Wpm/style/global';
import { THEME } from '../Wpm/constants/Constants';
import '../css/login.css'


function Wpm() {
  const location = useLocation();
  let name;
  try {
    name = location.state.name
    return (
      <>
        <WpmCalculator 
        n={name}>
        </WpmCalculator>
      </>
    );
  } catch (error) {
    const theme = THEME;
    return (
      <ThemeProvider theme={theme}>
        <>
        <div className='canvas'>
        <div className="box" style={{ position: "relative", left: "50%", right: "50%", top: "50%", transform: 'translate( -50%,-50%)' }} >
        <GlobalStyles/>
          <h1>PLEASE LOGIN OR SIGNUP FIRST !!!</h1>
          <Link to={{ pathname: "/" }}>
            <input type="submit" value="← GO BACK "/> 
          </Link>
          </div>
          </div>
        </>
      </ThemeProvider>
    )
  }
}

export default Wpm

