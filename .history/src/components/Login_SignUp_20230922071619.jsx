import React, { useState } from 'react'
import Login from './Login';
import SignUp from './SignUp';

const Login_SignUp = () =>
{
  const [ newUser, setNewUser ] = useState( false );
  return (
    <div className="container">
      <div className="left-sidebar-container">
        <div className="banner">
          <img src='' alt='logo'/>
        </div>
      </div>
      <div className="right-sidebar-container">
        {
          newUser? <Login/> : <SignUp/>
        }
      </div>
    </div>
  );
}

export default Login_SignUp