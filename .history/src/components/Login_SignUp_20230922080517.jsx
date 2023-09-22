import React, { useState } from 'react'
import Login from './Login';
import SignUp from './SignUp';
import logo from '../Icons/icon_x512.png'

const Login_SignUp = () => {
  const [ newUser, setNewUser ] = useState( false );

  const toggleForm = () =>
  { 
    setNewUser( !newUser );
  };
  return (
    <div className="container">
      <div className="left-sidebar-container">
        <div className="banner">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="right-sidebar-container">
        {newUser ? (
          <SignUp toggleForm={toggleForm} />
        ) : (
          <Login toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default Login_SignUp