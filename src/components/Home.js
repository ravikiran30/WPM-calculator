import React from 'react'


import logo from '../img/logo.png'

import '../css/home.css'

import { Link } from 'react-router-dom'


function Home() {
   

  return (
     <><div className='home'>
      
      <div style={{position:"absolute",left:"50%",top:"50%",transform: 'translate( -50%,-50%)'}}>
        <center>
      <main className="px-2">
      <img src={logo}></img>
      <p className="lead" style={{color:"#9698A7"}}>
       <b>
        <b>Welcome to WPM Test ! </b>
        <br /> 
        Jump right in and explore your speed. 
        <br />
        Feel free to share some of your own inputs and help us improve!
        </b>
      </p>
      <Link to={{pathname:"/login"}}>
        
        <input type="submit" value="Get In  ➤" />
       
      </Link>
    </main>
    </center>
      </div>

        </div>
      </>
  )
}

export default Home