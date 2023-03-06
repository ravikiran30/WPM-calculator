import { render } from '@testing-library/react';
import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';
import 'reactjs-popup/dist/index.css';

import '../css/login.css'

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";


function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [exists, setexists] = useState(true);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      navigate('/Login', { replace: true })
    } else {
      
      setexists(false)
    }

  };

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
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
            <div style={{ position: 'absolute', left: '50%', transform: 'translate( -650%,0%)', padding: "20px" }}>
              <form onSubmit={handleSubmit} to={{ pathname: "/login" }} className="box">
                <h1><b>Signup</b></h1>
                <p className="text-muted">Please enter your details!</p>
                <input required type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input required type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input required type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />



                <input type="submit" value="Signup" />
                <Link to={{ pathname: "/login" }} className=" text-muted">
                  Already have an account? <u>Login</u>
                </Link>

                <div className="col-md-12">
                  <ul className="social-network social-circle">
                    <li><a href="#" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" className="icoTwitter" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" className="icoGoogle" title="Google"><i className="fab fa-google"></i></a></li>
                  </ul>
                  {exists ? null : <Alert key="warning" variant="warning" onClose={() => setexists(true)} dismissible >
                    The user Already exists !!
                  </Alert>}

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Register;



