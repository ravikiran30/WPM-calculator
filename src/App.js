import React from 'react';


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './Auth/Login'
import Register from './Auth/Register';
import Wpm from './components/Wpm'
import Home from './components/Home'




function App() {


  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route
           exact path="/"
            element={<Home />}

          />
          <Route
          
          path="/wpm"
          element={<Wpm/>}
          
        />
          <Route
            path="/login"
            element={<Login />}

          />

          <Route
            path="/register"
            element={<Register />}
          />
        
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
