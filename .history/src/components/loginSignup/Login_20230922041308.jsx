import React from 'react'

const Login = ({ toggleForm }) => {
  return (
    <>
      <div className="login-container">
        <p>Login to your Account</p>
        <div className="input-box">
          <input type="text" name="name" required="required" />
          <span>Email / Mobile</span>
        </div>
        <div className="input-box">
          <input type="password" name="password" required="required" />
          <span>Password</span>
        </div>
        <p className="create-account">
          Don't have an Account?
          <button onClick={() => toggleForm()}>SignUp</button>
        </p>
      </div>
    </>
  );
};

export default Login