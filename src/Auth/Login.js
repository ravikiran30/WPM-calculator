import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import Alert from 'react-bootstrap/Alert';

import '../css/login.css'



const Login =() => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalid,setInvali]=useState(false)



  const handleSubmit = async (event) => {
    event.preventDefault();

    //Request to login
    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);

    if (response.ok) {
 
      navigate('/wpm',{state:{name:data.name}})
      
      
    }else{
      setInvali(true)
    }
    
  };

  const particlesInit = useCallback(async engine => {
   
    
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    
  }, []);




  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,

          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />


      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div style={{ position: 'absolute', left: '50%', transform: 'translate( -650%,100%)', padding: "20px" }}>
              <form onSubmit={handleSubmit} className="box" >
                <h1><b>LogIn</b></h1>
                <p className="text-muted">Please enter your Email and Password!</p>
                <input required type="email" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <input required type="password" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />

                <Container>
                  <Row>
                    <Col md={{ span: 0, offset: 0 }}>
                      <input type="submit" value="Login" />
                    </Col>
                    <Col md={{ span: 0, offset: 0 }}>
                      <Link to={{ pathname: "/register" }} >
                        <input type="submit" value="Signup" />
                      </Link>
                    </Col>
                  </Row>
                </Container>
                <div className="col-md-12">
                  <ul className="social-network social-circle">
                    <li><a href="#" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" className="icoTwitter" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" className="icoGoogle" title="Google"><i className="fab fa-google"></i></a></li>
                  </ul>
                  {invalid?<Alert key='danger' variant='danger' onClose={() => setInvali(false)} dismissible>
          Wrong Credentials !
        </Alert>:null}
        
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Login;



